from app.model import load_model, predict
from app.utils import transform_image

from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from typing import Union
import torch
import torchvision.models as models

app = FastAPI()

# Load required models
MODEL_PATH = "../model/resnet50_corn_disease.pth"
model = models.resnet50(weights=None)
num_features = model.fc.in_features
model.fc = torch.nn.Linear(num_features, 4)
model.load_state_dict(torch.load(MODEL_PATH))
model.eval()

@app.post("/predict-disease/")
async def predict_disease(file: UploadFile = File(...)):
    try:
        # Read the image file
        image = await file.read()
        # Transform image
        image_tensor = transform_image(image)
        # Make prediction
        result = predict(model, image_tensor)
        classes = ['Blight', 'Common_Rust', 'Gray_Leaf_Spot', 'Healthy']
        return JSONResponse(content={"prediction": classes[result], })

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)