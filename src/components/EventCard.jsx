import Link from 'next/link'
import React from 'react'

export default function EventCard({ work }) {
    return (

        <div className="relative m-4 flex w-80 aspect-square flex-col rounded-xl bg-gray-800 bg-clip-border text-white shadow-md hover:shadow-lg hover:shadow-gray-500/40 cursor-pointer transition-all transform hover:scale-105 duration-300">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={work.thumbnail} className='object-cover h-full ' alt="" />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                    {work.title}
                </h5>
            </div>
            <div className="p-6 pt-0">
                <Link href={{ pathname: `/our-work/${work.title}`, query: { _id: `${work._id}` } }} className="select-none border rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md ">
                    Read More
                </Link>
            </div>
        </div>
    )
}