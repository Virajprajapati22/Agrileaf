import torch
from torchvision import transforms
from io import BytesIO
from PIL import Image

MODEL_PATH = "../../model/resnet50_corn_disease.pth"

def load_model():
    model = torch.load(MODEL_PATH)
    model.eval()
    return model

def predict(model, image_tensor):
    with torch.no_grad():
        output = model(image_tensor)
    _, predicted = torch.max(output, 1)
    return predicted.item()