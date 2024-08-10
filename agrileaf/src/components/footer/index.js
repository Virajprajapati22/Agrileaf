import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-700 m-[2em] border-2 border-green-900 rounded-[16px] p-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col lg:flex-row lg:gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-100">Home</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-100">Products</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-100">About Us</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-100">Contact Us</a>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <p className="text-sm text-gray-100">&copy; 2024 AgriLeaf. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
