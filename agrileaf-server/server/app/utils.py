import torch
from torchvision import transforms
from io import BytesIO
from PIL import Image

def transform_image(image_bytes):
    # Define the image transformations
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])
    image = Image.open(BytesIO(image_bytes))
    image_tensor = transform(image).unsqueeze(0)
    return image_tensor