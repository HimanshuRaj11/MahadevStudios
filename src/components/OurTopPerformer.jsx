import React from 'react'
import CrewCard from './CrewCard'

export default function OurTopPerformer() {
    const crew = [
        {
            id: "Neha_Dixit",
            name: "Neha Dixit",
            instagram: "",
            image: "/neha.jpg",
            cast: "Singer"
        },
        {
            id: "Subhash",
            name: "Subhash",
            instagram: "",
            image: "/Subhash.jpg",
            cast: "Singer"
        },
        {
            id: "Anjali_Nanak",
            name: "Anjali Nanak",
            instagram: "",
            image: "/anjali.jpg",
            cast: "Singer"
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
                        crew.map((crew, i) => {
                            return (
                                <div key={i} className="m-5 " data-aos="zoom-out-up" data-aos-duration="1000">
                                    <CrewCard crew={crew} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
