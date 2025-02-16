"use client"

import React, { useEffect, useState } from 'react';
import { crew } from '@/components/OurTopPerformer';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import Anjali_Nanak from '@/components/Crew/Anjali_Nanak';
import NehaDixitProfile from '@/components/Crew/Neha_Dixit';

export default function ProfilePage() {
    const [pageId, setPageid] = useState(null);

    useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const id = searchParams.get('id');
        const crewdata = crew.find(item => item.id == id)
        setPageid(crewdata);
    }, [])


    return (

        <div className="w-full flex md:flex-row  md:justify-center flex-col min-h-screen mt-20">

            {/* card */}
            <div className=" w-[80%] flex flex-col justify-center items-center md:w-[30%] h-[20rem] m-4 mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden ">
                <div className="flex justify-center items-center p-2">
                    <img
                        className="w-32 h-32 rounded-full border-4 border-gray-300"
                        src={pageId?.image}
                        alt="User Profile"
                    />
                </div>
                <div className="p-2">
                    <h2 className="text-center text-2xl font-semibold text-gray-100">{pageId?.name}</h2>

                    <div className="mt-4 flex flex-col">
                        {pageId?.instagram && (
                            <Link href={`${pageId?.instagram}`} target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-gray-200">
                                    <FaInstagram className="inline-block mr-2" />
                                    Instagram
                                </p>
                            </Link>
                        )}
                        {pageId?.youtube && (
                            <Link href={`/${pageId?.youtube}`} target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-gray-200">
                                    <FaYoutube className="inline-block mr-2" />
                                    YouTube
                                </p>
                            </Link>
                        )}
                        {pageId?.facebook && (
                            <Link href={`${pageId?.facebook}`} target="_blank" rel="noopener noreferrer">
                                <p className="text-center text-gray-200">
                                    <FaFacebook className="inline-block mr-2" />
                                    Facebook
                                </p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>


            {/* discriptions */}

            <div className=" w-full md:w-[60%] p-4 ">
                {
                    pageId?.id == "Neha_Dixit" && (
                        <NehaDixitProfile />
                    )

                }
                {
                    pageId?.id == "Anjali_Nanak" && (
                        <Anjali_Nanak />
                    )

                }
            </div>

        </div>
    );
}