"use client"
import React, { useEffect } from 'react'
import { OurClient } from '@/lib/Data/OurClients'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Page() {
    const media_organizations = OurClient.media_organizations;
    const government_departments = OurClient.government_departments_himachal_pradesh;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className=" pt-20 p-4">

            <div className="">
                <div className="flex w-full justify-center items-center">
                    <h1 className='capitalize text-4xl text-white font-bold'>media organizations</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    {media_organizations.map((org, index) => {
                        return (
                            <div data-aos="fade-up" data-aos-duration="1000" key={index} className="flex flex-row backdrop-blur-md border shadow-md cursor-pointer rounded-lg p-6 m-4 w-full md:w-1/3 lg:w-1/4">
                                {
                                    org.logo &&
                                    <img src={org.logo} alt="" className='size-20 m-2 rounded-md aspect-square object-cover' />
                                }
                                <div className="flex flex-col">
                                    <h2 className="text-xl text-white font-bold mb-2">{org.name}</h2>
                                    <p className="text-gray-200">{org.description}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
            <div className="">
                <div className="flex w-full justify-center items-center">
                    <h1 className='capitalize text-4xl text-white font-bold'>government departments</h1>
                </div>
                <div className="flex flex-wrap justify-center">

                    {government_departments.map((dept, index) => {
                        return (

                            <div data-aos="fade-up" data-aos-duration="1000" key={index} className="flex flex-row backdrop-blur-md border shadow-md cursor-pointer rounded-lg p-6 m-4 w-full md:w-1/3 lg:w-1/4">
                                {
                                    dept.logo &&
                                    <img src={dept.logo} alt="" className='size-20 m-2 rounded-md aspect-square object-cover' />
                                }
                                <div className="flex flex-col">
                                    <h2 className="text-xl text-white font-bold mb-2">{dept.name}</h2>
                                    <p className="text-gray-200">{dept.description}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
}