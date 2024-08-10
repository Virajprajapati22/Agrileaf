import Link from 'next/link';
import React from 'react';
import logo from '../../images/arileaf_logo.svg'

const Header = () => {
    return (
        <header className="bg-green-700 m-[2em] border-2 border-green-900 rounded-[16px]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only space-grotesk-bold">Your Company</span>
                        <img className="h-12 w-auto" src={logo.src} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="/" className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">Home</Link>
                    <Link href="/products" className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">Products</Link>
                    <Link href="/aboutus" className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">About Us</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">Log in or Sign up <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;