import React, { useState } from 'react';

let curIdx = 0;

const FileUploader = () => {
    const [images, setImages] = useState(Array(5).fill(null)); // State for 5 image slots
    const [selectedCrop, setSelectedCrop] = useState(''); // State for selected crop
    const [cropArea, setCropArea] = useState(''); // State for crop area
    const [detectedDiseases, setDetectedDiseases] = useState(null); // State for detected diseases and solutions
    const [loading, setLoading] = useState(false); // State to indicate loading status

    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file); // Create a URL for the image
            const updatedImages = [...images];
            updatedImages[curIdx] = url; // Update the specific index with the new image URL
            setImages(updatedImages); // Update the state with the new images array
            curIdx++;
        }
    };

    const handleFindDisease = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Prepare data to send to the backend
            const formData = new FormData();
            formData.append('cropType', selectedCrop);
            formData.append('cropArea', cropArea);
            images.forEach((image, index) => {
                if (image) {
                    formData.append(`image${index + 1}`, image);
                }
            });

            // Send request to backend
            const response = await fetch('/api/detect-disease', {
                method: 'POST',
                body: formData,
            });

            // Get the response data
            const result = await response.json();

            // Assuming the result contains a list of detected diseases and solutions
            setDetectedDiseases(result);
        } catch (error) {
            console.error('Error detecting disease:', error);
            setDetectedDiseases({ error: 'An error occurred while detecting disease.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            {/* File Uploader */}
            <div className="w-full m-2 max-w-5xl mb-8">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-900 border-dotted rounded-lg cursor-pointer bg-green-50 dark:bg-green-300 hover:bg-green-100 dark:hover:bg-green-300">
                    <div className="flex flex-col items-center justify-center p-4">
                        <svg className="w-8 h-8 mb-4 text-black-200 dark:text-black-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-black-200 dark:text-black-200"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-black-200 dark:text-black-200">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(event) => handleFileChange(event, 0)} />
                </label>
            </div>

            {/* Image Cards */}
            <div className="grid grid-cols-2 m-2 sm:grid-cols-3 gap-4 w-full max-w-5xl">
                {images.map((imageUrl, index) => (
                    <div key={index} className="relative h-[10em] border-2 border-green-900 border-dotted rounded-lg p-4 flex items-center justify-center bg-white">
                        {imageUrl ? (
                            <img src={imageUrl} alt={`Uploaded Image ${index + 1}`} className="w-full h-full object-cover" />
                        ) : (
                            <label htmlFor={`file-upload-${index}`} className="w-full h-full flex flex-col items-center justify-center">
                                <p className="text-gray-500">Upload Image {index + 1}</p>
                            </label>
                        )}
                    </div>
                ))}
            </div>

            {/* Crop Selection Dropdown */}
            <div className="w-full max-w-5xl my-4">
                <label htmlFor="crop-select" className="block mb-2 text-sm font-medium text-gray-700">Select Crop Type</label>
                <select
                    id="crop-select"
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="block w-full p-2.5 text-gray-700 border border-green-900 rounded-lg bg-white"
                >
                    <option value="" disabled>Select a crop</option>
                    <option value="wheat">Wheat</option>
                    <option value="corn">Corn</option>
                    <option value="rice">Rice</option>
                    <option value="soybean">Soybean</option>
                    {/* Add more crops as needed */}
                </select>
            </div>

            {/* Crop Area Input */}
            <div className="w-full max-w-5xl my-4">
                <label htmlFor="crop-area" className="block mb-2 text-sm font-medium text-gray-700">Enter Area Occupied by the Crop (in acres/hectares)</label>
                <input
                    id="crop-area"
                    type="text"
                    value={cropArea}
                    onChange={(e) => setCropArea(e.target.value)}
                    placeholder="Enter area"
                    className="block w-full p-2.5 text-gray-700 border border-green-900 rounded-lg bg-white"
                />
            </div>

            {/* Find Disease Button */}
            <button
                onClick={handleFindDisease}
                className="bg-green-700 text-gray-100 py-3 px-6 rounded-lg mt-8 hover:bg-green-800 transition duration-300 text-lg font-semibold"
                // disabled={loading || !selectedCrop || !cropArea} // Disable button if loading or fields are empty
            >
                {loading ? 'Detecting...' : 'Detect Disease'}
            </button>

            {/* Display Detected Diseases and Solutions */}
            {detectedDiseases && (
                <div className="w-full max-w-5xl mt-8 p-4 bg-white border-2 border-green-900 rounded-lg">
                    {detectedDiseases?.error ? (
                        <p className="text-red-500">{detectedDiseases.error}</p>
                    ) : (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Detected Diseases for {selectedCrop}</h3>
                            <ul className="space-y-4">
                                {detectedDiseases?.map((disease, index) => (
                                    <li key={index} className="p-4 border-2 border-green-900 rounded-lg">
                                        <h4 className="text-lg font-medium text-green-700">{disease.name}</h4>
                                        <p className="text-sm text-gray-700 mt-2">{disease.description}</p>
                                        <p className="text-sm text-gray-700 mt-2"><strong>Solution:</strong> {disease.solution}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FileUploader;
