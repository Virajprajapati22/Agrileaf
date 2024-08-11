import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-700 m-[2em] border-2 border-green-600 rounded-[16px] p-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col lg:flex-row lg:gap-x-12">
                        <Link href="/" className="text-sm font-semibold leading-6 text-gray-100">Home</Link>
                        <Link href="/solutions" className="text-sm font-semibold leading-6 text-gray-100">Solutions</Link>
                        <Link href="/aboutus" className="text-sm font-semibold leading-6 text-gray-100">About Us</Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-gray-100">Contact Us</Link>
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
