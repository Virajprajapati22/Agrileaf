import React, { useState } from 'react';
import FileUploader from '../fileUploads';

const CropImageUpload = () => {
    const [images, setImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).slice(0, 5);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages(newImages);
    };

    const handleFindDisease = () => {
        // Add your disease detection logic here
        console.log('Finding disease...');
    };

    return (
        <div className="bg-white m-[2em] p-6 border-2 border-green-900 bg-[#e1f8e6] rounded-[16px] shadow-lg">
            
            <FileUploader />
            {/* <div className="flex flex-col items-center">
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="mb-4 p-2 border-2 border-green-700 rounded-[8px] bg-green-50"
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-32 flex items-center justify-center bg-green-100 border-2 border-green-700 rounded-[8px] overflow-hidden">
                            <img src={image} alt={`Crop ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
                {images.length > 0 && (
                    <button
                        onClick={handleFindDisease}
                        className="bg-green-700 text-gray-100 py-2 px-4 rounded-[8px] hover:bg-green-800 transition duration-300"
                    >
                        Find Disease
                    </button>
                )}
            </div> */}
        </div>
    );
};

export default CropImageUpload;
