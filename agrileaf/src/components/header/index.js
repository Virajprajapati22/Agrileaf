"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from '../../images/arileaf_logo.svg';
import { useRouter } from 'next/navigation';

const Header = () => {

    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const storedUser = localStorage.getItem('agrileaf-userToken');
            if (!storedUser) {
                setIsLoggedIn(false);
            }
        };

        checkAuth();
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();

        setIsLoggedIn(false);
        router.push('/signup');
    }

    return (
        <header className="bg-green-700 m-[2em] border-2 border-green-600 rounded-[16px] sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-11 w-auto" src={logo.src} alt="AgriLeaf Logo" />
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
                    <Link href="/solutions" className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">Solutions</Link>
                    <Link href="/aboutus" className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">About Us</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {
                        !isLoggedIn ? (
                            <Link href="/signup" onC className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">{"Log in or Sign up"} <span aria-hidden="true">&rarr;</span></Link>
                        ) : (
                                <a href="#" onClick={handleLogout} className="space-grotesk-bold text-sm font-semibold leading-6 text-gray-100">{"Log Out"} <span aria-hidden="true">&rarr;</span></a>
                        )
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;
