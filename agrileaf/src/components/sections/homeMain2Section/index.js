import React from 'react'

const HomeMain2Section = () => {
    return (
        <main className="flex-grow m-[2em] border-2 border-green-50 rounded-md">
            <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white ">
                <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
                    Why AgriLeaf?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Accurate Disease Detection</h3>
                        <p className="text-green-700">
                            Our AI-powered system is trained on a Authentic dataset, ensuring high accuracy in detecting plant diseases from images.
                        </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">User-Friendly Experience</h3>
                        <p className="text-green-700">
                            Our platform is designed to be easy to use, whether you’re a seasoned farmer or a home gardener. Get started in just a few clicks!
                        </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Comprehensive Support</h3>
                        <p className="text-green-700">
                            Have questions or need assistance? Our support team is here to help you every step of the way, from diagnosis to treatment.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomeMain2Section