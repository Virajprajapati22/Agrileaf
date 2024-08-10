import React, { useState } from 'react';


let curIdx = 0;

const FileUploader = () => {
    const [images, setImages] = useState(Array(5).fill(null)); // State for 5 image slots

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

    console.log(images, "Images");
    

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
        </div>
    );
};

export default FileUploader;
