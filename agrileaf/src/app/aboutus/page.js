import React from 'react';
import darshan from '../../images/Darshan_Gami.jpg'
import viraj from '../../images/Viraj_Prajapati.jpg'
import krishn from '../../images/krishn.jpg'
import parth from '../../images/parth.jpg'

const AboutUs = () => {
    return (
        <section className="bg-white m-[2em] p-6 rounded-[16px] shadow-md border-2 border-green-900 flex items-center justify-center">
        <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4"><b>About Us</b></h2>
            <p className="text-gray-700 leading-6">
                AgriLeaf was founded with a mission to make plant care accessible and effective for everyone. 
                Whether you’re managing a large farm or tending to a small garden, our tools and resources 
                are designed to help you achieve healthier, more productive plants.
            </p>
        </div>
        </section>
    );
}

const ProfileCard = ({ name, role, imgSrc, contact, email}) => {
    return (
        <div className="relative flex flex-col text-black bg-white shadow-md bg-clip-border rounded-xl w-64 h-[22eem] m-[1em]">
            <div className="relative mx-4 mt-4 overflow-hidden bg-white shadow-lg rounded-full h-40 w-40 self-center">
                <img className="rounded-full object-cover h-full w-full" src={imgSrc} alt={`${name} profile picture`} />
            </div>
            <div className="p-5 text-center">
                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
                    {name}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-black">
                    {role}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-black">
                    {contact}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-black">
                    {email}
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
                    role="DAIICT | M.Tech (ICT) ML"
                    contact="+91 9510470074"
                    imgSrc={viraj.src}
                    email = "202311069@daiict.ac.in"
                />
                <ProfileCard 
                    name="Darshan Gami" 
                    role="DAIICT | B.Tech (ICT)"
                    contact="+91 7990405434"
                    imgSrc={darshan.src} 
                    email="202201205@daiict.ac.in"
                />
                <ProfileCard 
                    name="Parth Borad" 
                    role="DAIICT | M.Tech (ICT) ML"
                    contact="+91 7573074175"
                    imgSrc={parth.src}
                    email="202311033@daiict.ac.in"
                />
                <ProfileCard 
                    name="Krishn Navadiya" 
                    contact="+91 9824659110"
                    role="DAIICT | MScIT"
                    imgSrc={krishn.src}
                    email="202412052@daiict.ac.in"
                />
            </div>
            {/* <ContactInfo /> */}
        </div>
    );
}

const ContactInfo = () => {
    return (
        <section className="bg-white m-[2em] p-3 rounded-[16px] shadow-md border-2 border-green-900 flex items-center justify-center">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4"><b>Contact Information</b></h2>
                <p className="text-gray-700 leading-6"><strong>Phone :</strong> +1 (123) 456-7890</p>
                <p className="text-gray-700 leading-6"><strong>Email :</strong> contact@agrileaf.com</p>
                <p className="text-gray-700 leading-6"><strong>Address :</strong> 123 Green Lane, Farmville, GA 12345, USA</p>
            </div>
        </section>
    );
}

export default AboutPage;
