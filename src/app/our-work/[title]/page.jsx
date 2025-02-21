"use client"
import React, { useEffect, useState } from 'react'
import { OurWork } from '@/lib/Data/OurWork';
import ReactPlayer from 'react-player/youtube'

export default function Page() {
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const _id = parseInt(searchParams.get('_id'));
        const data = OurWork.find((item) => item._id === _id);
        setFilteredData(data);
    }, []);

    if (!filteredData) {
        return <div className="text-center text-red-500">Data not found</div>;
    }

    return (
        <div className="w-full mx-auto mt-20 p-2 md:p-10 lg:p-14 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">{filteredData.title}</h1>
            <div className="mb-4 my-5 flex justify-center items-center w-full">
                {
                    filteredData?.video_URL ?
                        <ReactPlayer url={filteredData.video_URL} className="w-[70%]" controls /> : ""
                }
                <div className="flex flex-col w-full justify-center items-center">

                    {
                        filteredData?.video1 ?
                            <video controls className="  w-[30rem] border m-4 object-cover shadowIn">
                                <source src={filteredData.video1} type="video/mp4" />
                            </video> : ""
                    }
                    {
                        filteredData?.video2 ?
                            <video controls className="w-[25rem] border m-4 object-cover shadowIn">
                                <source src={filteredData.video2} type="video/mp4" />
                            </video> : ""
                    }
                </div>

            </div>
            <p className="text-lg text-gray-100 w-[90%] md:w-[80%] lg:w-[60%] text-justify">{filteredData.description}</p>
        </div>
    )
}