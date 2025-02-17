import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function CrewCard({ crew }) {
    return (
        <div className="w-[18rem] h-[18rem] rounded-lg flex flex-col justify-around items-center backdrop-blur-sm border  hover:scale-105 transform transition-transform duration-300 hover:shadow-md cursor-pointer">
            <div className="flex justify-between m-2 flex-col items-center w-full">
                <img src={crew.image} className=' aspect-square rounded-full w-[40%] object-center object-cover' alt="" />
                <h1 className='font-semibold text-3xl text-white'>{crew.name}</h1>
                <h1 className='font-semibold text-xl text-white'>{crew.cast} </h1>
                <Link href={{ pathname: `/${crew.id}`, query: { id: `${crew.id}` } }} className='bg-gray-800 rounded-md border text-white p-2 m-2 flex items-center'>
                    View More <FaArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
    );
}