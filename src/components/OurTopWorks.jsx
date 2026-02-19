import { OurWork } from '@/lib/Data/OurWork'
import React from 'react'
import EventCard from './EventCard'
import Link from 'next/link'

export default function OurTopWorks() {
    // Show only first 8 on homepage
    const topWorks = OurWork.slice(0, 8)

    return (
        <div className="w-full px-4 sm:px-8 lg:px-12 py-20">

            {/* Heading */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-14">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Our Top <span className="text-orange-400">Works</span>
                </h2>
                <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
                {topWorks.map((work, i) => (
                    <EventCard key={work._id ?? i} work={work} index={i} />
                ))}
            </div>

            {/* View more */}
            <div data-aos="fade-up" className="flex justify-center mt-12">
                <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
            border border-white/20 text-white font-bold text-sm
            hover:bg-white/10 hover:border-orange-400/40 hover:text-orange-300
            active:scale-95 transition-all duration-200"
                >
                    View All Works →
                </Link>
            </div>
        </div>
    )
}