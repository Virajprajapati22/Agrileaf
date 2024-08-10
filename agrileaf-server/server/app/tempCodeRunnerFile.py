red and request.cropType and request.cropArea:
        #     # Generate the prompt after making predictions
        #     thisdisease = " ".join(list(pred))

        #     prompt = f"""
        #     We have identified four types of crop diseases in our dataset: 'Blight,' 'Common Rust,' 'Gray Leaf Spot,' and 'Healthy.'

        #     Currently, the {thisdisease} disease has been detected in our {request.cropType} crops, which have been cultivated over an area of {request.cropArea} acres.

        #     I am seeking recommendations on how to prevent and manage this disease on our farm. Please provide a response in the following format:

        #     Solutions: [List of recommended solutions]
        #     Usage of Solutions: [Instructions on how to apply each solution effectively in our farming practices]

        #     Each solution should be clearly named, followed by specific guidance on how to implement it in the context of farming.
        #     """

        #     # Generate the AI content based on the prompt
        #     response =