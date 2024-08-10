import React from 'react';

const HomePageComponent = () => {
    return (
        <main className="flex-grow m-[2em] border-2 border-green-900 rounded-md">
            <section className="text-center py-16 px-4 sm:px-8 lg:px-16 bg-green-50">
                <h1 className="text-3xl font-bold text-green-900 mb-4">
                    Welcome to AgriLeaf
                </h1>
                <p className="text-lg text-green-700 mb-6">
                    AgriLeaf is your trusted source for sustainable agricultural solutions.
                    Our mission is to empower farmers with innovative tools and knowledge
                    to enhance productivity while preserving the environment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">Sustainable Farming</h2>
                        <p className="text-green-700">
                            Explore our resources on sustainable farming techniques that
                            help you maximize yields while minimizing environmental impact.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">AgriTech Innovations</h2>
                        <p className="text-green-700">
                            Stay updated with the latest agricultural technologies designed to
                            enhance efficiency and productivity on your farm.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">Community Support</h2>
                        <p className="text-green-700">
                            Join our community of farmers and agricultural experts to share
                            insights, ask questions, and grow together.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePageComponent;
