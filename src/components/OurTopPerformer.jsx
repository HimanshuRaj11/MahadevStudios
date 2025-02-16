import React from 'react'
import CrewCard from './CrewCard'

export default function OurTopPerformer() {
    const crew = [
        {
            name: "",
            instagram: "",
            phone: "",
            image: "",
            address: "",
        },
        {
            name: "",
            instagram: "",
            phone: "",
            image: "",
            address: "",
        },
        {
            name: "Anjali Nanak",
            instagram: "",
            phone: "",
            image: "",
            address: "",
        },
    ]
    return (
        <div className="shadowIn">
            <div className="flex justify-center items-center">
                <h1 className='text-4xl text-white font-bold' data-aos="zoom-out-up" data-aos-duration="1000">Out Best Performers</h1>
            </div>
            <div className="">
                <div className="flex w-full flex-wrap justify-center items-center">
                    {
                        crew.map((cerw, i) => {
                            return (
                                <div key={i} className="m-5 " data-aos="zoom-out-up" data-aos-duration="1000">
                                    <CrewCard />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
