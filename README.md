# Agrileaf
**Agrileaf: AI-Powered Plant Disease Diagnosis and Care Recommendations** \
Agrileaf is a cutting-edge tool designed to empower farmers, gardeners, and plant enthusiasts by providing accurate and efficient plant disease diagnosis. By leveraging advanced AI technology, Agrileaf can analyze images of plant leaves to detect potential diseases. But we don't stop there.

After identifying the disease, Agrileaf seamlessly integrates with a Large Language Model (LLM) to offer personalized care recommendations. This includes the most effective fertilizer suggestions, best practices for plant care, and tailored advice to ensure your plants remain healthy and thriving.

Whether you're dealing with a small home garden or a large-scale farm, Agrileaf is here to provide you with the knowledge and tools to optimize plant health and productivity.

## Set Up the Server
**In this project the directory `agrileaf-server` is server written in python.** \
Navigate to the `agrileaf-server` Directory
```bash
cd agrileaf-server
```
Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```
Install requirements
```bash
pip install -r requirements.txt 
```
### Dataset
The project utilizes the [Corn Leaf Disease](https://huggingface.co/datasets/Prachi1234/corn-leaf-disease) Dataset from Hugging Face. This dataset includes images of corn plant leaves categorized by various diseases and healthy conditions.
#### Description
**Source:** [Hugging Face - Corn Leaf Disease Image Dataset](https://huggingface.co/datasets/Prachi1234/corn-leaf-disease)\ 
Content: Contains images of corn leaves with labels indicating different types of diseases and healthy states.
Format: Images are organized in folders by disease categories. 
### Model
For image classification, we use the **ResNet50** model pretrained on the ImageNet dataset. ResNet50 is a deep convolutional network known for its effectiveness in various image recognition tasks.

#### Description
**Source:** [PyTorch Hub - ResNet50](https://pytorch.org/vision/main/models/generated/torchvision.models.resnet50.html)\
Usage: The pretrained ResNet50 model is used to leverage transfer learning for identifying diseases in plant leaf images.

