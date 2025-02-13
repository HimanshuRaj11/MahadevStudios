"use client"
import React from 'react'
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaRocket } from 'react-icons/fa';
import { MdFax } from "react-icons/md";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
const Tags = [
    {
        icon: <FaRocket className="text-3xl text-white" />,
        tag: "20+ Years of Industry Experience"
    },
    {
        icon: <BsFillCameraReelsFill className="text-3xl text-white" />,
        tag: " Expertise in High-Quality Film & TV Productions"
    },
    {
        icon: <MdFax className="text-3xl text-white" />,
        tag: "Passionate Storytellers with a Vision"
    },
    {
        icon: <PiSpeakerSimpleHighFill className="text-3xl text-white" />,
        tag: "Commitment to Excellence & Client Satisfaction"
    },
    {
        icon: <GiTakeMyMoney className="text-3xl text-white" />,
        tag: "High-Quality Production at Competitive Rates"
    },
]
export default function WhyChooseUs() {
    return (
        <div className="flex flex-col py-5 px-5 md:px-24 shadowIn w-full ">
            <h1 className="text-white text-4xl font-bold"> Why Choose Us?</h1>

            <div className="flex flex-wrap m-5 justify-center items-center">
                {
                    Tags.map((tags, i) => {
                        return (
                            <div key={i} data-aos="zoom-out-up" data-aos-duration="1000" className="border w-[90%] md:w-[40%] cursor-pointer h-[5rem] backdrop-blur-md p-5 flex flex-row m-3 rounded-md justify-center items-center">
                                {tags.icon}
                                <h1 className="font-semibold text-lg  mx-3 text-white ">{tags.tag}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
