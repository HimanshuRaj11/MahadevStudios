'use client'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { OurWork } from '@/lib/Data/OurWork'
import EventCard from '@/components/EventCard'

/* Collect unique categories from data, fallback gracefully */
function getCategories(works) {
    const cats = works.map(w => w.category).filter(Boolean)
    return ['All', ...Array.from(new Set(cats))]
}

export default function OurWorkPage() {
    const [active, setActive] = useState('All')
    const categories = getCategories(OurWork)

    const filtered = active === 'All'
        ? OurWork
        : OurWork.filter(w => w.category === active)

    useEffect(() => {
        AOS.init({ once: true, easing: 'ease-out-cubic', offset: 50 })
    }, [])

    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Hero ── */}
            <section className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                <img
                    src="/octdes10.jpg"
                    alt="Our Work"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-transparent" />

                <div data-aos="fade-up" data-aos-duration="900" className="relative z-10 text-center px-6">
                    <p className="text-orange-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                        Mahadev Studios
                    </p>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                        Our <span className="text-orange-400">Work</span>
                    </h1>
                    <p className="mt-5 text-gray-300 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        From documentaries to ad films — stories that leave a lasting impression.
                    </p>
                </div>
            </section>

            {/* ── Filter tabs (only shown if categories exist) ── */}
            {categories.length > 1 && (
                <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="sticky top-16 z-30 flex justify-center gap-2 flex-wrap px-4 py-4
            bg-slate-950/80 backdrop-blur-xl border-b border-white/5"
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${active === cat
                                    ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            {/* ── Grid ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">

                {/* Count */}
                <p
                    data-aos="fade-up"
                    className="text-gray-500 text-sm mb-8 text-center"
                >
                    Showing <span className="text-orange-400 font-bold">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
                    {active !== 'All' && <> in <span className="text-white font-semibold">{active}</span></>}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.map((work, i) => (
                        <EventCard
                            key={work._id ?? i}
                            work={work}
                            index={i}
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-24 text-gray-500">
                        <p className="text-5xl mb-4">🎬</p>
                        <p className="text-lg font-semibold">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    )
}