'use client'
import React from 'react'
import Link from 'next/link'

const thumbnail = "/Gallery/49_087746bd.jpg"
const video1 = "/video1.mp4"
const video2 = "/video2.mp4"
const title = "Voice of Shimla: A Stellar Showcase of Talent"

const stats = [
    { value: "2nd", label: "Season" },
    { value: "15K–20K", label: "Grand Finale Attendees" },
    { value: "1000s", label: "Audition Entries" },
    { value: "National", label: "Audience Reach" },
]

const highlights = [
    { icon: "🏔️", text: "Hosted at the iconic Ridge, Shimla during Winter Carnival" },
    { icon: "🎤", text: "Season 1 winner Neha Dixit went on to perform on Indian Idol" },
    { icon: "🌍", text: "Attracts talent from across India and international audiences" },
    { icon: "🎬", text: "World-class production and stage design by Mahadev Studios" },
]

export default function VoiceOfShimla() {
    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Cinematic Hero ── */}
            <section className="relative w-full h-[60vh] md:h-[75vh] flex items-end overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-transparent h-28" />

                <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pb-10 max-w-5xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-purple-500/15 text-purple-400 ring-1 ring-purple-400/25">
                            🎤 Singing Reality Show
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/25">
                            Season 2
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-white/10 text-gray-300 ring-1 ring-white/15">
                            Winter Carnival · Shimla
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                        Voice of <span className="text-purple-400">Shimla</span>
                    </h1>
                    <p className="text-gray-300 text-sm mt-2">
                        A Stellar Showcase of Talent · Organized by Mahadev Studios
                    </p>
                </div>
            </section>

            {/* ── Body ── */}
            <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-14 flex flex-col gap-10">

                {/* Back */}
                <Link href="/our-work"
                    className="self-start inline-flex items-center gap-2 text-sm text-gray-500
            hover:text-orange-400 transition-colors duration-200 group">
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    Back to Our Work
                </Link>

                {/* ── Stats bar ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {stats.map((s, i) => (
                        <div key={i}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-5 text-center
                hover:border-purple-400/30 transition-colors duration-200 group">
                            <p className="text-2xl sm:text-3xl font-black text-purple-400
                group-hover:scale-110 transition-transform duration-200">{s.value}</p>
                            <p className="text-gray-500 text-xs font-semibold mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* ── Videos ── */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-5">Event Footage</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[video1, video2].map((src, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Clip {i + 1}</p>
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                    <video
                                        src={src}
                                        controls
                                        className="w-full aspect-video object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Description ── */}
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col gap-6">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-2">About the Show</p>
                        <h2 className="text-2xl font-extrabold text-white">Himachal's Premier Musical Platform</h2>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="flex flex-col gap-5 text-gray-300 text-base leading-relaxed">
                        <p>
                            Organized by <span className="font-bold text-white">Mahadev Studios</span> during
                            Shimla's iconic Winter Carnival, <span className="font-bold text-white">Voice of Shimla</span> stands
                            as one of the most celebrated and successful singing reality platforms in the region.
                            Now proudly entering its <span className="text-purple-300 font-semibold">2nd season</span>, the show
                            has evolved into a grand musical spectacle that attracts attention not only from across
                            India but also from international audiences.
                        </p>
                        <p>
                            The competition reaches its peak with a magnificent Grand Finale hosted at the prestigious
                            <span className="text-white font-semibold"> Ridge, Shimla</span>, drawing an overwhelming crowd of
                            <span className="text-white font-semibold"> 15,000 to 20,000 attendees</span> during the height of
                            the tourist season. The electrifying atmosphere, combined with world-class production and stage
                            design, transforms the Winter Carnival into a musical celebration like no other.
                        </p>
                        <p>
                            Every year, thousands of audition entries pour in from aspiring singers across the country.
                            After a rigorous selection process, only the finest voices earn the opportunity to perform on
                            the Voice of Shimla stage — making it a true platform for discovering exceptional talent.
                        </p>
                    </div>

                    {/* Success story highlight */}
                    <div className="bg-purple-500/8 border border-purple-400/20 rounded-2xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30
              flex items-center justify-center text-lg shrink-0">🌟</div>
                        <div>
                            <p className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Success Story</p>
                            <p className="text-gray-300 text-base leading-relaxed">
                                The impact of Voice of Shimla extends far beyond the competition. Season 1 winner{' '}
                                <span className="text-white font-bold">Neha Dixit</span> gained nationwide recognition
                                after joining <span className="text-white font-semibold">Indian Idol</span> — highlighting
                                the show's credibility as a launchpad for rising stars in India's music industry.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed">
                        More than just a competition, Voice of Shimla represents passion, opportunity, and artistic
                        excellence — continuing to shine as one of the most cherished and influential musical events
                        in India's evolving entertainment landscape.
                    </p>

                    {/* Pull quote */}
                    <blockquote className="border-l-2 border-purple-400 pl-5 py-1">
                        <p className="text-white font-semibold text-lg italic leading-relaxed">
                            "A platform where dreams take the stage — and the most extraordinary voices find their moment."
                        </p>
                    </blockquote>
                </article>

                {/* ── Highlights ── */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-5">Event Highlights</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((h, i) => (
                            <div key={i}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10
                  hover:border-purple-400/25 hover:-translate-y-0.5 transition-all duration-200">
                                <span className="text-xl shrink-0">{h.icon}</span>
                                <p className="text-gray-300 text-sm leading-relaxed">{h.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20
          rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 mb-2">Organize Your Event</p>
                        <h3 className="text-xl font-extrabold text-white">Want us to produce your next event?</h3>
                        <p className="text-gray-400 text-sm mt-1">Mahadev Studios handles everything — from concept to curtain call.</p>
                    </div>
                    <div className="flex gap-3 shrink-0 flex-wrap">
                        <a href="mailto:mahadevproductionsshimla@gmail.com"
                            className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm
                hover:bg-orange-400 active:scale-95 transition-all duration-200
                shadow-[0_0_20px_rgba(249,115,22,0.35)]">
                            Contact Us →
                        </a>
                        <Link href="/our-work"
                            className="px-6 py-2.5 rounded-full border border-white/15 text-gray-300 font-bold text-sm
                hover:border-orange-400/40 hover:text-orange-300 transition-all duration-200">
                            More Work
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}