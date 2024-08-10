import React from 'react';
import searchleaf from '../../../images/Leaf-with-Disease.png';
import findSol from '../../../images/l4.jpeg';
import uploadimg from '../../../images/1st.jpg';
import outputimg from '../../../images/4rh.png';

const HomeMainSection = () => {
    return (
        <main className="flex-grow border-green-50 rounded-md">
            <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100 flex-grow m-[2em] border-2 border-green-50 rounded-md">
                <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
                    How Our Model Works
                </h2>
                <div className="flex flex-col m-3 md:flex-row justify-center items-center gap-8">
                    {/* Stage 1 */}
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[22em] max-w-xs">
                        <img
                            src={uploadimg?.src}
                            alt="Stage 1"
                            className="mb-4 w-[9em] h-[9em] rounded-full border-2 border-green-300 object-cover"
                        />
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
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[22em] max-w-xs">
                        <img
                            src={searchleaf?.src}
                            alt="Stage 2"
                            className="mb-4 w-[9em] h-[9em] rounded-full border-2 border-green-300 object-cover"
                        />
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
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[22em] max-w-xs">
                        <img
                            src={findSol?.src}
                            alt="Stage 3"
                            className="mb-4 w-[9em] h-[9em] rounded-full border-2 border-green-300 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-green-900">Find Solution</h3>
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
                    <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[40em] h-[22em] max-w-xs">
                        <img
                            src={outputimg?.src}
                            alt="Stage 4"
                            className="mb-4 w-[9em] h-[9em] rounded-full border-2 border-green-300 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-green-900">Output to User</h3>
                        <p className="text-green-700 text-center">
                            The platform delivers quick analysis and treatment suggestions, enabling immediate action to protect crops.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomeMainSection;
