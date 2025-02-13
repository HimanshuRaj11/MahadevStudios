import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
export default function CrewCard() {
    return (
        <div className="w-[18rem] h-[22rem] rounded-md flex flex-col justify-around items-center backdrop-blur-sm border  hover:scale-105 transform transition-transform duration-300 hover:shadow-md cursor-pointer">
            <div className="flex justify-between m-2 flex-col items-center w-full">
                <img src="/Gallery/5L4A2583.JPG" className=' aspect-square rounded-full w-[40%] object-center object-cover' alt="" />
                <h1 className='font-semibold text-3xl text-white'>John Doe</h1>
                <h1 className='font-semibold text-xl text-white'>Singer</h1>
            </div>
            <div className="flex flex-col w-[90%] bg-gray-500 bg-transparent p-2 justify-start items-start m-3 rounded-sm text-white">
                <span className="flex items-center"><FaPhone className="mr-2" /> Phone.no: (123) 456-7890</span>
                <span className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Address: 123 Main St, Anytown, USA</span>
                <span className="flex items-center"><FaInstagram className="mr-2" /> Instagram: @johndoe</span>
            </div>
        </div>
    );
}