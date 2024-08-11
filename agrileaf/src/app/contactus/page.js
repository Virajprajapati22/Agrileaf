import React from "react";
import './styles.css'

const ContactUs = () => {
    return (
        <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-md border border-black">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block w-full h-12 p-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-base sm:text-lg placeholder-custom"
                            placeholder="Your Name"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full h-12 p-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-base sm:text-lg placeholder-custom"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <div className="mt-1">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full h-12 p-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-base sm:text-lg placeholder-custom"
                            placeholder="+1234567890"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            autoComplete="subject"
                            className="block w-full h-12 p-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-base sm:text-lg placeholder-custom"
                            placeholder="Subject"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-base sm:text-lg placeholder-custom"
                            placeholder="Write your message here"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactUs;
