import { OurClient } from '@/lib/Data/OurClients';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default function OurClients() {
    const media_organizations = OurClient.media_organizations;
    const government_departments = OurClient.government_departments_himachal_pradesh;
    return (
        <div className=" pt-20 p-4 shadowIn">

            <div className="">
                <div className="flex w-full justify-center flex-col items-center">
                    <h1 className='capitalize text-4xl text-white font-bold mb-2 underline'>Our Clients</h1>
                    <h1 className='capitalize text-2xl text-white font-semibold'>media organizations</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    {media_organizations.slice(0, 4).map((org, index) => {
                        return (
                            <div data-aos="fade-up" data-aos-duration="1000" key={index} className=" backdrop-blur-md border shadow-md cursor-pointer rounded-lg p-6 m-4 w-full md:w-1/3 lg:w-1/4">
                                <h2 className="text-xl text-white font-bold mb-2">{org.name}</h2>
                                <p className="text-gray-200">{org.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="">
                <div className="flex w-full justify-center items-center">
                    <h1 className='capitalize text-2xl text-white font-semibold'>government departments</h1>
                </div>
                <div className="flex flex-wrap justify-center">

                    {government_departments.slice(0, 4).map((dept, index) => {
                        return (

                            <div data-aos="fade-up" data-aos-duration="1000" key={index} className=" backdrop-blur-md border shadow-md cursor-pointer rounded-lg p-6 m-4 w-full md:w-1/3 lg:w-1/4">
                                <h2 className="text-xl text-white font-bold mb-2">{dept.name}</h2>
                                <p className="text-gray-200">{dept.description}</p>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <Link href={'/our-clients'} className="border rounded-sm bg-slate-700 hover:bg-slate-800 text-white font-semibold p-2 flex items-center">
                    View More <FaArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
    )
}
