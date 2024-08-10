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
        </main>
    )
}

export default HomeMain2Section