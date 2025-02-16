import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

export default function ContactUs() {
    return (
        <div className=" flex justify-center items-center shadowIn">
            <div className="w-[90%] md:w-[80%] flex flex-col items-center mt-10 space-y-6">
                <div className="bg-gradient-to-b  p-6 md:p-12">
                    <div className="max-w-5xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg text-center">
                        <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
                        <div className="flex flex-col md:flex-row">
                            <div className="p-4">

                                <p className="text-gray-300 mt-2">We’d love to hear from you</p>
                                <p className="text-gray-400 mt-1">Facing issues or have queries? Our team is here to help.</p>

                                <Link href="mailto:mahadevproductionsshimla@gmail.com">
                                    <button className="mt-4 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col   mt-6 text-gray-300 ">

                                <div className="flex  gap-2 mt-2">
                                    <Link href="tel:+918894548468" className='flex'>
                                        <MdPhone className="text-purple-700 text-2xl" />
                                        <span>+91 88945 48468</span>
                                    </Link>
                                    <Link href="tel:+917018313617" className='flex'>
                                        <MdPhone className="text-purple-700 text-2xl" />
                                        <span>+91 70183 13617</span>
                                    </Link>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <MdEmail className="text-purple-700 text-xl" />
                                    <span className='text-left'>mahadevproductionsshimla@gmail.com</span>
                                </div>
                                <div className="flex  gap-2 mt-2">
                                    <MdLocationOn className="text-purple-700 text-5xl lg:text-xl" />
                                    <span className='text-left'>Flat no.1, Block-26 A, phase-3, Sector-5, New Shimla, Shimla-171009 Himachal Pradesh, India</span>
                                </div>
                            </div>
                        </div>


                        <hr className="my-6 border-gray-600" />

                        <p className="text-gray-300">Join us </p>
                        <div className="flex justify-center gap-4 mt-4 text-gray-400 text-2xl">
                            <Link href="https://www.facebook.com/wowhimachal" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="cursor-pointer" />
                            </Link>

                            {/* <Link href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="cursor-pointer" />
                            </Link> */}

                            <Link href="https://www.instagram.com/wowhimachal" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="cursor-pointer" />
                            </Link>
                            <Link href="https://www.youtube.com/@MahadevStudios" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="cursor-pointer" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
