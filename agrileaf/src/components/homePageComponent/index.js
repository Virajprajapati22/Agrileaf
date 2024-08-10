import React from 'react'
const HomePageComponent = () => {
    return (
        <main className="flex-grow m-[2em] border-2 border-green-900 rounded-md">
            {/* Welcome Section */}
            <section className="text-center py-16 px-4 sm:px-8 lg:px-16 bg-green-50">
                <h1 className="text-3xl font-bold text-green-900 mb-4">
                    Welcome to AgriLeaf
                </h1>
                <p className="text-lg text-green-700 mb-6">
                    At AgriLeaf, we empower farmers and gardeners with advanced tools for detecting and treating plant diseases. 
                    Our AI-driven platform identifies diseases from leaf images and provides optimal solutions to keep crops healthy and thriving.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">Sustainable Farming</h2>
                        <p className="text-green-700">
                            Explore our resources on sustainable farming techniques that help you maximize yields while minimizing environmental impact.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">AgriTech Innovations</h2>
                        <p className="text-green-700">
                            Stay updated with the latest agricultural technologies designed to enhance efficiency and productivity on your farm.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">Community Support</h2>
                        <p className="text-green-700">
                            Join our community of farmers and agricultural experts to share insights, ask questions, and grow together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose AgriLeaf Section */}
            <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
                <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
                    Why Choose AgriLeaf?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Expertise and Experience</h3>
                        <p className="text-green-700">
                            Our team consists of experts with years of experience in agriculture and technology, ensuring you receive the best solutions.
                        </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Cutting-Edge Technology</h3>
                        <p className="text-green-700">
                            We use the latest AI-driven technology to provide accurate disease detection and actionable insights.
                        </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Comprehensive Support</h3>
                        <p className="text-green-700">
                            Our support team is always available to help you with any questions or issues you might encounter.
                        </p>
                    </div>
                </div>
            </section>

            {/* How Our Model Works Section */}
            <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
                <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
                    How Our Model Works
                </h2>
                <div className="flex flex-col m-3 md:flex-row justify-center items-center gap-8">
                    {/* Stage 1 */}
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[25em] max-w-xs">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                            1
                        </div>
                        <img src="https://via.placeholder.com/100" alt="Stage 1" className="mb-4 rounded-full border-2 border-green-300"/>
                        <h3 className="text-lg font-semibold text-green-900">Image Upload</h3>
                        <p className="text-green-700 text-center">
                            Users can quickly upload images of plant leaves via a simple, user-friendly interface.
                        </p>
                    </div>
                    {/* Arrow between stages */}
                    <div className="hidden md:block">
                        <svg className="w-12 h-12 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h14" />
                        </svg>
                    </div>
                    {/* Stage 2 */}
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[25em] max-w-xs">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                            2
                        </div>
                        <img src="https://via.placeholder.com/100" alt="Stage 2" className="mb-4 rounded-full border-2 border-green-300"/>
                        <h3 className="text-lg font-semibold text-green-900">Find Disease</h3>
                        <p className="text-green-700 text-center">
                            Advanced AI analyzes the image, comparing it with a disease database to identify plant diseases.
                        </p>
                    </div>
                    {/* Arrow between stages */}
                    <div className="hidden md:block">
                        <svg className="w-12 h-12 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h14" />
                        </svg>
                    </div>
                    {/* Stage 3 */}
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[25em] max-w-xs">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                            3
                        </div>
                        <img src="https://via.placeholder.com/100" alt="Stage 3" className="mb-4 rounded-full border-2 border-green-300"/>
                        <h3 className="text-lg font-semibold text-green-900">Find    Solution</h3>
                        <p className="text-green-700 text-center">
                            AgriLeaf provides customized treatment options, including conventional and organic choices, for the identified disease.
                        </p>
                    </div>
                    {/* Arrow between stages */}
                    <div className="hidden md:block">
                        <svg className="w-12 h-12 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h14" />
                        </svg>
                    </div>
                    {/* Stage 4 */}
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[25em] max-w-xs">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                            4
                        </div>
                        <img src="https://via.placeholder.com/100" alt="Stage 4" className="mb-4 rounded-full border-2 border-green-300"/>
                        <h3 className="text-lg font-semibold text-green-900">Output to User</h3>
                        <p className="text-green-700 text-center">
                            The platform delivers quick analysis and treatment suggestions, enabling immediate action to protect crops.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePageComponent;
