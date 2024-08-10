from fastapi import FastAPI, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel
import torch
import torchvision.models as models
from io import BytesIO
from PIL import Image
import base64
import logging
import google.generativeai as genai
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key="AIzaSyBOJXOu5FTf1nm_rwkuH5C2VgXVZFFvNOo")

mdl = genai.GenerativeModel('gemini-1.5-flash')

# Load the ResNet50 model for disease detection
MODEL_PATH = "/Users/viru/Documents/GitHub/Agrileaf/agrileaf-server/model/resnet50_corn_disease.pth"
disease_model = models.resnet50(weights=None)
num_features = disease_model.fc.in_features
disease_model.fc = torch.nn.Linear(num_features, 4)
disease_model.load_state_dict(torch.load(MODEL_PATH, map_location='cpu'))
disease_model.eval()

# Import your custom model functions
from model import load_model, predict
from utils import transform_image

class DiseaseDetectionRequest(BaseModel):
    files: List[str]  # List of Base64 encoded images
    cropType: str
    cropArea: str

@app.post("/detect-disease/")
async def detect_disease(request: DiseaseDetectionRequest):
    try:
        predictions = []
        classes = ['Blight', 'Common_Rust', 'Gray_Leaf_Spot', 'Healthy']
        pred = set()

        for base64_image in request.files:
            try:
                # Decode the base64 image data
                image_data = base64.b64decode(base64_image)
                image_data = BytesIO(image_data)  # Convert to a BytesIO object

                # Open the image from the BytesIO object
                image = Image.open(image_data).convert('RGB')

                # Convert image back to BytesIO for transform_image
                buffered = BytesIO()
                image.save(buffered, format="JPEG")
                image_bytes = buffered.getvalue()

                # Transform image using the transform_image function
                image_tensor = transform_image(image_bytes)  # Assuming transform_image works with bytes or BytesIO

                # Make prediction
                result = predict(disease_model, image_tensor)

                # Append prediction to the list
                predictions.append({
                    "name": classes[result],
                })
                pred.add(classes[result])

            except Exception as e:
                logging.error(f"Error processing image: {e}")
                return JSONResponse(content={"error": f"Error processing image: {str(e)}"}, status_code=500)
            
        # Generate the prompt after making predictions
        thisdisease = " ".join(list(pred))

        prompt = f"""
            We have detected the **{thisdisease}** disease in our **{request.cropType}** crops, which cover **{request.cropArea}** acres.

Please provide detailed recommendations to prevent and manage this disease. Format your response as follows:

1. **Solution Name:** [Name of the solution]
   - **Description:** [Brief description of the solution]
   - **Instructions:** [Step-by-step instructions on how to implement the solution]

2. **Solution Name:** [Name of the solution]
   - **Description:** [Brief description of the solution]
   - **Instructions:** [Step-by-step instructions on how to implement the solution]

Ensure each solution is clearly named and includes concise instructions on how to use it effectively in farming practices.

            """

        # Generate the AI content based on the prompt
        response = mdl.generate_content(prompt)

        return JSONResponse(content={"predictions": list(pred), "cropType": request.cropType, "cropArea": request.cropArea, "solution": response.text})

    except Exception as e:
        logging.error(f"Internal Server Error: {e}")
        return JSONResponse(content={"error": "Internal Server Error"}, status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
