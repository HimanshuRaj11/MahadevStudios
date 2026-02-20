'use client'
import React from 'react'
import Link from 'next/link'

const thumbnail = "/work3.png"
const title = "Mission संकल्प by Arushi Thakur | Mahadev Studios | World Environment Day"
const video_URL = "https://www.youtube.com/watch?v=i-bkAAovE2U"

const pledges = [
    "Always dispose of waste in designated bins.",
    "Maintain cleanliness in natural and public spaces.",
    "Reduce the use of single-use plastics.",
]

function getEmbedURL(url) {
    if (url.includes("youtu.be")) return `https://www.youtube.com/embed/${url.split("youtu.be/")[1].split("?")[0]}`
    if (url.includes("watch?v=")) return `https://www.youtube.com/embed/${url.split("watch?v=")[1].split("&")[0]}`
    return url
}

export default function MissionSankalp() {
    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Hero ── */}
            <section className="relative w-full h-[60vh] md:h-[72vh] flex items-end overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-transparent h-28" />

                {/* Hero text sits at the bottom */}
                <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pb-10">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                bg-green-500/15 text-green-400 ring-1 ring-green-400/25">
                                🌿 Environment
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/25">
                                Mahadev Studios
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Mission <span className="text-green-400">संकल्प</span>
                        </h1>
                        <p className="text-gray-300 text-sm mt-2">by Arushi Thakur · World Environment Day</p>
                    </div>
                </div>
            </section>

            {/* ── Body ── */}
            <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-14 flex flex-col gap-10">

                {/* Back */}
                <Link href="/our-work"
                    className="self-start inline-flex items-center gap-2 text-sm text-gray-500
            hover:text-orange-400 transition-colors duration-200 group">
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    Back to Our Work
                </Link>

                {/* ── Video ── */}
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black aspect-video">
                    <iframe
                        src={getEmbedURL(video_URL)}
                        title={title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* ── Description ── */}
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col gap-6">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-2">About This Film</p>
                        <h2 className="text-2xl font-extrabold text-white">The Story Behind the Campaign</h2>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="flex flex-col gap-5 text-gray-300 text-base leading-relaxed">

                        <p>
                            <span className="font-bold text-white">Mission संकल्प</span>, led by Arushi Thakur and
                            presented by Mahadev Studios on the occasion of World Environment Day, is a heartfelt visual
                            narrative that celebrates the pristine beauty of Himachal Pradesh while delivering a powerful
                            message on environmental responsibility.
                        </p>

                        <p>
                            The film begins with Arushi taking viewers to a place deeply personal to her — a serene mountain
                            escape she often visits with her beloved companion, Max. Surrounded by untouched landscapes and
                            fresh Himalayan air, the setting reflects the emotional bond between humans and nature.
                        </p>

                        <p>
                            However, beneath this beauty lies a growing concern. The video sheds light on deforestation,
                            pollution, and ecological imbalance threatening these fragile ecosystems. It raises a
                            thought-provoking question — will future generations be able to witness this same natural purity?
                        </p>

                        <p>
                            Through simple yet impactful storytelling, Arushi delivers a wake-up call, urging society to
                            adopt environmentally conscious habits. Demonstrating responsible waste disposal alongside Max,
                            she promotes cleanliness and respect for nature in everyday life.
                        </p>
                    </div>

                    {/* Pledge section */}
                    <div className="bg-green-500/8 border border-green-400/20 rounded-2xl p-6">
                        <p className="text-green-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            🌱 The Sustainability Pledge
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-5">
                            As Miss Himachal 2014, Arushi takes a public sustainability pledge, encouraging citizens
                            to join her in three fundamental commitments:
                        </p>
                        <div className="flex flex-col gap-3">
                            {pledges.map((pledge, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 border border-green-400/30
                    text-green-400 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <p className="text-gray-300 text-sm leading-relaxed">{pledge}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 text-gray-300 text-base leading-relaxed">
                        <p>
                            The film also promotes sustainable lifestyle choices — such as carrying reusable water bottles —
                            proving that small daily actions can collectively create a massive environmental impact.
                        </p>
                        <p>
                            Drawing a subtle connection to the COVID-19 pandemic, the video emphasizes that hygiene,
                            sustainability, and environmental care are deeply interconnected in building a healthier world.
                        </p>
                    </div>

                    {/* Pull quote */}
                    <blockquote className="border-l-2 border-orange-400 pl-5 py-1">
                        <p className="text-white font-semibold text-lg italic leading-relaxed">
                            "Mission संकल्प is not just a campaign — it is a call to action. A reminder that protecting
                            our planet begins with individual responsibility. The pledge has been taken — will you join it?"
                        </p>
                    </blockquote>

                </article>

                {/* ── CTA ── */}
                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20
          rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 mb-2">Commission a Film</p>
                        <h3 className="text-xl font-extrabold text-white">Want a production like this?</h3>
                        <p className="text-gray-400 text-sm mt-1">Reach out to Mahadev Studios — we respond within 24 hours.</p>
                    </div>
                    <div className="flex gap-3 shrink-0">
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