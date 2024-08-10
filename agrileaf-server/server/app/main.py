from model import load_model, predict
from utils import transform_image

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
import torch
import torchvision.models as models
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["AIzaSyBOJXOu5FTf1nm_rwkuH5C2VgXVZFFvNOo"])

model = genai.GenerativeModel('gemini-1.5-flash')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the specific domains you want to allow
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load required models
MODEL_PATH = "/Users/viru/Documents/GitHub/Agrileaf/agrileaf-server/model/resnet50_corn_disease.pth"
model = models.resnet50(weights=None)
num_features = model.fc.in_features
model.fc = torch.nn.Linear(num_features, 4)
model.load_state_dict(torch.load(MODEL_PATH, map_location='cpu'))
model.eval()

@app.post("/detect-disease/")
async def detect_disease(
    files: List[UploadFile] = File(...),
    cropType: str = Form(...),
    cropArea: str = Form(...),
):
    predictions = []
    classes = ['Blight', 'Common_Rust', 'Gray_Leaf_Spot', 'Healthy']

    for file in files:
        try:
            # Read the image file
            image = await file.read()
            # Transform image
            image_tensor = transform_image(image)
            # Make prediction
            result = predict(model, image_tensor)
            # Append prediction to the list
            predictions.append({
                "filename": file.filename,
                "prediction": classes[result],
            })

        except Exception as e:
            return JSONResponse(content={"error": str(e)}, status_code=500)

    return JSONResponse(content={"predictions": predictions, "cropType": cropType, "cropArea": cropArea})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
