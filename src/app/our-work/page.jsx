import EventCard from '@/components/EventCard'
import React from 'react'
import { OurWork } from '@/lib/Data/OurWork'

export default function page() {
    return (
        <div className='min-h-screen w-[100%] pb-4'>
            <div className="h-[60vh] bg-cover bg-[url('/octdes10.jpg')] flex justify-center items-center" style={{ boxShadow: 'inset 0 -200px 100px -100px black' }}>
                <h1 className=' text-3xl md:text-8xl p-5 backdrop-blur-md rounded-md text-white font-bold border'>Our Work</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center py-10">
                {
                    OurWork.map((work, i) => {
                        return (
                            <EventCard key={i} work={work} />
                        )
                    })
                }

            </div>
        </div>
    )
}
