import React from 'react';
import darshan from '../../images/Darshan_Gami.jpg'
import viraj from '../../images/Viraj_Prajapati.jpg'
import krishn from '../../images/krishn.jpg'
import parth from '../../images/parth.jpg'

const AboutUs = () => {
    return (
        <section className="bg-white m-[2em] p-6 rounded-[16px] shadow-md border-2 border-green-900">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Us</h2>
                <p className="text-gray-700 leading-6">
                    AgriLeaf was founded with a mission to make plant care accessible and effective for everyone. 
                    Whether you’re managing a large farm or tending to a small garden, our tools and resources 
                    are designed to help you achieve healthier, more productive plants.
                </p>
            </div>
        </section>
    );
}

const ProfileCard = ({ name, role, imgSrc, contact }) => {
    return (
        <div className="relative flex flex-col text-black bg-white shadow-md bg-clip-border rounded-xl w-64 h-[22rem] m-[1em]">
            <div className="relative mx-4 mt-4 overflow-hidden bg-white shadow-lg rounded-full h-40 w-40 self-center">
                <img className="rounded-full object-cover h-full w-full" src={imgSrc} alt={`${name} profile picture`} />
            </div>
            <div className="p-4 text-center">
                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
                    {name}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-black">
                    {role}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-black">
                    {contact}
                </p>
            </div>
            <div className="flex justify-center p-4 pt-2 gap-7">
                <a href="#facebook"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-black">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#twitter"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-black">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#instagram"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-black">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}


const AboutPage = () => {
    return (
        <div>
            <AboutUs />
            <div className="flex justify-center flex-wrap">
                <ProfileCard 
                    name="Viraj Prajapati" 
                    role="DAIICTian"
                    contact="+91 9510470074"
                    imgSrc={viraj.src}
                />
                <ProfileCard 
                    name="Darshan Gami" 
                    role="DAIICTian"
                    contact="+91 7990405434"
                    imgSrc={darshan.src}
                />
                <ProfileCard 
                    name="Parth Borad" 
                    role="DAIICTian"
                    contact="+91 7573074175"
                    imgSrc={parth.src}
                />
                <ProfileCard 
                    name="Krishn Navadiya" 
                    contact="+91 9824659110"
                    role="DAIICTian"
                    imgSrc={krishn.src}
                />
            </div>
            <ContactInfo />
        </div>
    );
}

const ContactInfo = () => {
    return (
        <section className="bg-white m-[2em] p-6 rounded-[16px] shadow-md border-2 border-green-900">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-6"><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p className="text-gray-700 leading-6"><strong>Email:</strong> contact@agrileaf.com</p>
                <p className="text-gray-700 leading-6"><strong>Address:</strong> 123 Green Lane, Farmville, GA 12345, USA</p>
            </div>
        </section>
    );
}

export default AboutPage;
