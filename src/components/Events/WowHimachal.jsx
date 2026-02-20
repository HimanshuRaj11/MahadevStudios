'use client'
import React from 'react'
import Link from 'next/link'

const thumbnail = "/work2.png"
const title = "Wow Himachal | Tales From The Himalayan Girls"
const video_URL = "https://youtu.be/nGXpOWUSgjE?si=jQFwJEVNMGuGMdAt"

function getEmbedURL(url) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0]
    return `https://www.youtube.com/embed/${videoId}`
}

const themes = [
    { icon: "🏔️", label: "Himalayan Landscapes", detail: "Sweeping vistas and the serene beauty of mountain life" },
    { icon: "🛕", label: "Spiritual Heritage", detail: "Temple bells, devotional chants, and sacred valleys" },
    { icon: "🎶", label: "Folk Culture", detail: "Traditional music, colorful festivals, and oral folklore" },
    { icon: "👩‍🦱", label: "Himalayan Women", detail: "Extraordinary women carrying forward ancient traditions" },
    { icon: "🌅", label: "Dev Bhoomi", detail: "The 'Land of Gods' — purity in landscape and people" },
    { icon: "🎬", label: "Cinematic Storytelling", detail: "Visually immersive and emotionally resonant production" },
]

export default function WowHimachal() {
    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Cinematic Hero ── */}
            <section className="relative w-full h-[65vh] md:h-[78vh] flex items-end overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Layered overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-transparent h-28" />

                {/* Text anchored to bottom */}
                <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pb-12 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/25">
                            🏔️ Documentary Series
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/25">
                            Mahadev Studios
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-white/8 text-gray-300 ring-1 ring-white/15">
                            Wow Himachal
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                        Tales From The <span className="text-emerald-400">Himalayan Girls</span>
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
                        A cinematic celebration of Himachal Pradesh — its landscapes, spirituality, and the remarkable women who define its soul.
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

                {/* ── Video ── */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">Watch the Film</p>
                    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black aspect-video">
                        <iframe
                            src={getEmbedURL(video_URL)}
                            title={title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* ── Description ── */}
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col gap-6">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">About This Film</p>
                        <h2 className="text-2xl font-extrabold text-white">Into the Heart of the Himalayas</h2>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="flex flex-col gap-5 text-gray-300 text-base leading-relaxed">
                        <p>
                            <span className="font-bold text-white">Wow Himachal | Tales From The Himalayan Girls</span> is
                            a cinematic exploration of Shimla and the rich cultural soul of Himachal Pradesh. Crafted with
                            emotional depth and visual elegance, this film invites viewers into the heart of the Himalayas —
                            where nature, tradition, and spirituality coexist in harmony.
                        </p>

                        <p>
                            The journey begins with the serene beauty of an early Shimla morning — crisp mountain air,
                            golden sunlight brushing colonial architecture, and the quiet rhythm of local life awakening
                            in the hills.
                        </p>

                        <p>
                            Through powerful visuals and storytelling, the film highlights Himachal's historical depth,
                            spiritual heritage, and vibrant traditions. Ancient temples, devotional chants, folk music,
                            and colorful festivals blend together to showcase the timeless cultural identity of the region.
                        </p>

                        {/* Dev Bhoomi callout */}
                        <div className="bg-emerald-500/8 border border-emerald-400/20 rounded-2xl p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/25
                flex items-center justify-center text-lg shrink-0">🛕</div>
                            <div>
                                <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Dev Bhoomi</p>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Known as <span className="text-white font-semibold">"Dev Bhoomi" — the Land of Gods</span>,
                                    Himachal Pradesh reflects purity in its landscapes and innocence in its people. The documentary
                                    captures this spiritual aura — from temple bells echoing in the valleys to the majestic silence
                                    of the Himalayan peaks.
                                </p>
                            </div>
                        </div>

                        <p>
                            More than a travel story, this film introduces a new series dedicated to uncovering remarkable
                            stories of Himachal — its folklore, evolving modern identity, and extraordinary women who carry
                            forward its traditions with strength and grace.
                        </p>
                    </div>

                    {/* Pull quote */}
                    <blockquote className="border-l-2 border-emerald-400 pl-5 py-1">
                        <p className="text-white font-semibold text-lg italic leading-relaxed">
                            "A celebration of Himachal's timeless beauty and cultural richness — through a visually
                            immersive and emotionally resonant experience."
                        </p>
                        <p className="text-gray-500 text-sm mt-2">— Mahadev Studios</p>
                    </blockquote>
                </article>

                {/* ── Themes grid ── */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">Themes Explored</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {themes.map((t, i) => (
                            <div key={i}
                                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10
                  hover:border-emerald-400/25 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                                <span className="text-2xl shrink-0">{t.icon}</span>
                                <div>
                                    <p className="text-white font-bold text-sm mb-1 group-hover:text-emerald-100 transition-colors">
                                        {t.label}
                                    </p>
                                    <p className="text-gray-500 text-xs leading-relaxed">{t.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Series note ── */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-400/20
            flex items-center justify-center text-xl shrink-0">🎬</div>
                    <div>
                        <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Part of a Series</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            This film is the first entry in the <span className="text-white font-semibold">Wow Himachal</span> series —
                            an ongoing documentary project by Mahadev Studios dedicated to the stories, people, and landscapes
                            of Himachal Pradesh.
                        </p>
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20
          rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 mb-2">Commission a Film</p>
                        <h3 className="text-xl font-extrabold text-white">Want a documentary like this?</h3>
                        <p className="text-gray-400 text-sm mt-1">Mahadev Studios crafts stories that resonate — from concept to screen.</p>
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