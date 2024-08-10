"use client";
import React, { useState } from 'react';
// import logo from '../../images/arileaf_logo.svg';

const SignInForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <section className="h-screen flex items-center justify-center bg-green">
            <div className="w-full max-w-md p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
                {/* Logo */}
                {/* <div className="text-center mb-8">
                    <img src={logo} alt="AgriLeaf Logo" className="mx-auto h-12 w-auto" />
                </div> */}
                
                <h2 className="text-2xl font-bold mb-6 text-center">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                
                <form>
                    {isSignUp && (
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 h-8 p-2 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                                placeholder="Full Name"
                            />
                        </div>
                    )}

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 h-8 p-2 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                            placeholder="Email address"
                            required
                        />
                    </div>

                    {isSignUp && (
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="mt-1 h-8 p-2 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                                placeholder="Phone Number"
                            />
                        </div>
                    )}

                    {isSignUp && (
                        <div className="mb-6">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                id="address"
                                className="mt-1 h-8 p-2 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                                placeholder="Address"
                            />
                        </div>
                    )}

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 h-8 p-2 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm font-medium text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-primary hover:text-primary-dark">Forgot password?</a>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-green-100 font-medium py-2 px-4 rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                        <p className="mt-4 text-sm">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                            <button
                                type="button"
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="ml-2 text-primary hover:text-primary-dark"
                            >
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SignInForm;
