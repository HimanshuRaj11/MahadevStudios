import { OurWork } from '@/lib/Data/OurWork'
import React from 'react'
import EventCard from './EventCard'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

export default function OurTopWorks() {
    return (
        <div className="shadowIn flex flex-col">
            <div className="flex justify-center items-center">
                <h1 className="font-bold text-white text-4xl " data-aos="zoom-out-up" data-aos-duration="1000">Our Top Works </h1>
            </div>
            <div className="flex flex-wrap justify-center items-center py-10 px-4">
                {
                    OurWork.map((work, i) => {
                        return (
                            <div key={i} className="" data-aos="zoom-out-up" data-aos-duration="1000">
                                <EventCard work={work} />
                            </div>
                        )
                    })
                }

            </div>


            <div className="flex justify-center items-center mb-4">
                <Link href={'/our-work'} className="border rounded-sm bg-slate-700 hover:bg-slate-800 text-white font-semibold p-2 flex items-center">
                    View More <FaArrowRight className="ml-2" />
                </Link>
            </div>
        </div>

    )
}
