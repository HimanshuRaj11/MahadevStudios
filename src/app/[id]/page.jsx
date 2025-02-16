"use client"

import React, { useEffect, useState } from 'react';
import { crew } from '@/components/OurTopPerformer';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function ProfilePage() {
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const id = searchParams.get('id');
        const data = crew.find((item) => item.id === id);
        setFilteredData(data);
    }, [])


    return (

        <div className="w-full flex md:flex-row  md:justify-center flex-col min-h-screen mt-20">

            {/* card */}
            <div className=" w-[80%] md:w-[30%] h-[20rem] m-4 mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden ">
                <div className="flex justify-center items-center p-6">
                    <img
                        className="w-32 h-32 rounded-full border-4 border-gray-300"
                        src={filteredData?.image}
                        alt="User Profile"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-center text-2xl font-semibold text-gray-100">{filteredData?.name}</h2>

                    <div className="mt-4 flex flex-col">
                        {filteredData?.instagram && (
                            <Link href={`${filteredData?.instagram}`} target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-gray-200">
                                    <FaInstagram className="inline-block mr-2" />
                                    Instagram:
                                </p>
                            </Link>
                        )}
                        {filteredData?.youtube && (
                            <Link href={`/${filteredData?.youtube}`} target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-gray-200">
                                    <FaYoutube className="inline-block mr-2" />
                                    YouTube:
                                </p>
                            </Link>
                        )}
                        {filteredData?.facebook && (
                            <Link href={`${filteredData?.facebook}`} target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-gray-200">
                                    <FaFacebook className="inline-block mr-2" />
                                    Facebook:
                                </p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>


            {/* discriptions */}

            <div className=" w-full md:w-[60%] p-4 bg-white">

            </div>

        </div>
    );
}