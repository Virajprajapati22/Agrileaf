import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const FileUploader = () => {
    const [images, setImages] = useState(Array(6).fill(null));
    const [selectedCrop, setSelectedCrop] = useState('');
    const [cropArea, setCropArea] = useState('');
    const [detectedDiseases, setDetectedDiseases] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [markdown, setMarkDown] = useState(null);

    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
                const updatedImages = [...images];
                updatedImages[index] = base64String;
                setImages(updatedImages);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFindDisease = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = {
                cropType: selectedCrop,
                cropArea: cropArea,
                files: images.filter(i => i !== null)
            };

            const response = await fetch('http://localhost:8000/detect-disease/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setDetectedDiseases(result?.predictions);
            setMarkDown(result?.solution || '');
            setShowModal(true);
        } catch (error) {
            console.error('Error detecting disease:', error);
            setDetectedDiseases({ error: 'An error occurred while detecting disease.' });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex flex-col items-center w-full">
            {/* File Uploader */}
            <h2 className="space-grotesk-bold text-xl font-bold text-green-700 mb-4">Upload Crops Images</h2>
            <div className="w-full m-2 max-w-5xl mb-8">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[9em] border-2 border-green-900 border-dotted rounded-lg cursor-pointer bg-green-50 hover:bg-green-100">
                    <div className="flex flex-col items-center justify-center p-4">
                        <svg className="w-8 h-8 mb-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-600"><span className="font-semibold">Click to upload</span></p>
                        <p className="text-xs text-gray-600">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(event) => handleFileChange(event, images.findIndex(image => image === null))} />
                </label>
            </div>

            {/* Image Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-5xl mb-8">
                {images.map((imageUrl, index) => (
                    <div key={index} className="relative h-40 border-2 border-green-900 border-dotted rounded-lg p-4 flex items-center justify-center bg-white">
                        {imageUrl ? (
                            <img src={`data:image/png;base64,${imageUrl}`} alt={`Uploaded Image ${index + 1}`} className="w-full h-full object-cover" />
                        ) : (
                            <label htmlFor={`file-upload-${index}`} className="w-full h-full flex flex-col items-center justify-center">
                                <p className="text-gray-500">Upload Image {index + 1}</p>
                            </label>
                        )}
                    </div>
                ))}
            </div>

            {/* Crop Selection Dropdown */}
            <div className="w-full max-w-5xl mb-4">
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
                </select>
            </div>

            {/* Crop Area Input */}
            <div className="w-full max-w-5xl mb-4">
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
                data-modal-target="select-modal"
                onClick={handleFindDisease}
                className="bg-green-700 text-white py-3 px-6 rounded-lg mt-8 hover:bg-green-800 transition duration-300 text-lg font-semibold"
                disabled={loading || !selectedCrop || !cropArea}
            >
                {loading ? 'Detecting...' : 'Detect Disease'}
            </button>

            {/* Display Modal */}
            {showModal && (
                <div
                    id="select-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-8 max-w-[80%] max-h-[80%] overflow-y-auto bg-green-50 rounded-lg shadow-lg">
                        <div className="relative h-[70vh] bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-between p-4 border-b border-green-900 rounded-t bg-green-200">
                                <h3 className="text-xl font-semibold text-gray-900">Diseases</h3>
                                <button
                                    type="button"
                                    className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 inline-flex justify-center items-center"
                                    onClick={handleCloseModal}
                                >
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 overflow-y-auto bg-green-50">
                                <p className="text-gray-700 mb-4">Solutions for Your Specific Crop Diseases:</p>
                                <div className="max-h-[60vh] overflow-y-auto">
                                    {markdown && (
                                        <div className="text-gray-900 bg-white p-4 border border-green-900 rounded-lg overflow-x-hidden">
                                            <ReactMarkdown>{markdown}</ReactMarkdown>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
