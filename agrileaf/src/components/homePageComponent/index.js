import React from 'react'
const HomePageComponent = () => {
    return (
        <main className="flex-grow m-[2em] border-2 border-green-50 rounded-md">
            {/* Welcome Section */}
            <section className="text-center py-16 px-4 sm:px-8 lg:px-16 bg-green-50">
                <h1 className="text-3xl font-bold text-green-900 mb-4">
                    Welcome to AgriLeaf
                </h1>
                <p className="text-lg text-green-700 mb-6">
                    At AgriLeaf, we empower farmers and gardeners with advanced tools for detecting and treating plant diseases. 
                    Our AI-driven platform identifies diseases from leaf images and provides optimal solutions to keep crops healthy and thriving.
                </p>
            </section>
        </main>
    );
};

export default HomePageComponent;
