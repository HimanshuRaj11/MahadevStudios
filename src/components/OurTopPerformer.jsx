// "use client"
import React from 'react'
import CrewCard from './CrewCard'
import Link from 'next/link'

export const crew = [
    {
        id: "Neha_Dixit",
        name: "Neha Dixit",
        instagram: "https://www.instagram.com/rhythmsmystic8?igsh=c3VmYzFqbWQxdjZ2",
        youtube: "https://www.youtube.com/@MahadevStudios",
        image: "/neha.jpg",
        cast: "Singer"
    },
    {
        id: "Subhash",
        name: "Subhash prince",
        instagram: "https://www.instagram.com/_.voice_of_shimla._._/",
        youtube: "https://www.youtube.com/@MahadevStudios",
        image: "/Subhash.jpg",
        cast: "Singer"
    },
    {
        id: "Anjali_Nanak",
        name: "Anjali Nanak",
        instagram: "https://www.instagram.com/_.voice_of_shimla._._/",
        youtube: "https://www.youtube.com/@MahadevStudios",
        image: "/anjali.jpg",
        cast: "Singer"
    },
]
export default function OurTopPerformer() {
    return (
        <div className="shadowIn">
            <div className="flex justify-center items-center">
                <h1 className='text-4xl text-white font-bold' data-aos="zoom-out-up" data-aos-duration="1000">Our Top Singers</h1>
            </div>
            <div className="">
                <div className="flex w-full flex-wrap justify-center items-center">
                    {
                        crew.map((crew, i) => {
                            return (
                                <Link href={{ pathname: `/${crew.id}`, query: { id: `${crew.id}` } }} key={i} className="m-5 " data-aos="zoom-out-up" data-aos-duration="1000">
                                    <CrewCard crew={crew} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
