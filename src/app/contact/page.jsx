import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function ContactPage() {
    return (
        <div className='min-h-screen w-full flex justify-center items-center flex-col '>
            <div className="w-full bg-[url('/ytktykk7.jpg')] bg-cover h-[60vh] flex justify-center items-center" style={{ boxShadow: 'inset 0 -200px 100px -100px black' }}>
                <h1 className='text-3xl md:text-8xl p-5 backdrop-blur-md rounded-md text-white font-bold border'>Get In Touch</h1>
            </div>

            <div className="w-[90%] md:w-[80%] flex flex-col items-center mt-10 space-y-6">
                <div className="bg-gradient-to-b  p-6 md:p-12">
                    <div className="max-w-5xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg text-center">
                        <h2 className="text-2xl font-semibold text-white">Have some Questions?</h2>
                        <div className="flex flex-row">
                            <div className="p-4">

                                <p className="text-gray-300 mt-2">We’d love to hear from you</p>
                                <p className="text-gray-400 mt-1">Facing issues or have queries? Our team is here to help.</p>

                                <button className="mt-4 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
                                    Contact Us
                                </button>
                            </div>
                            <div className="flex flex-col  justify-between mt-6 text-gray-300 text-left">
                                <div className="flex items-center gap-2">
                                    <MdPhone className="text-purple-700 text-xl" />
                                    <span>+91 98765 43210 (24/7 Support)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdEmail className="text-purple-700 text-xl" />
                                    <span>support@crossapp.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdLocationOn className="text-purple-700 text-xl" />
                                    <span>No-10, Cross Street, Chandigarh, India</span>
                                </div>
                            </div>
                        </div>


                        <hr className="my-6 border-gray-600" />

                        <p className="text-gray-300">Join us </p>
                        <div className="flex justify-center gap-4 mt-4 text-gray-400 text-2xl">
                            <FaFacebook className=" cursor-pointer" />
                            <FaTwitter className=" cursor-pointer" />
                            <FaInstagram className=" cursor-pointer" />
                            <FaLinkedin className=" cursor-pointer" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}