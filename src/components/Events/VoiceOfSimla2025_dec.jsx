'use client'
import React from 'react'
import Link from 'next/link'

const title = "Voice of Shimla — Winter Carnival Talent Competition 2025"
const chiefGuest = "Shiv Pratap Shukla (Governor of Himachal Pradesh)"
const finaleDate = "31 December 2025"

const winners = [
    {
        position: "1st",
        medal: "🥇",
        name: "Saurav Attri",
        prize: "₹50,000",
        bg: "from-yellow-500/15 to-yellow-600/5",
        border: "border-yellow-400/30",
        text: "text-yellow-400",
        ring: "ring-yellow-400/30",
    },
    {
        position: "2nd",
        medal: "🥈",
        name: "Poonam Pandit",
        prize: "₹30,000",
        bg: "from-gray-400/15 to-gray-500/5",
        border: "border-gray-400/30",
        text: "text-gray-300",
        ring: "ring-gray-400/30",
    },
    {
        position: "3rd",
        medal: "🥉",
        name: "Subhash Prince",
        prize: "₹20,000",
        bg: "from-orange-600/15 to-orange-700/5",
        border: "border-orange-500/30",
        text: "text-orange-400",
        ring: "ring-orange-400/30",
    },
]

const timeline = [
    { step: "01", label: "Auditions", venue: "Gaiety Theatre, Shimla", detail: "Open auditions welcoming talent from across the region." },
    { step: "02", label: "Top 15 Shortlisted", venue: "Selection Round", detail: "Rigorous judging to identify the finest voices." },
    { step: "03", label: "Public Performances", venue: "Winter Carnival Stage", detail: "Top 15 performed before thousands of locals and tourists." },
    { step: "04", label: "Grand Finale", venue: "Main Stage · 31 Dec 2025", detail: "A massive celebration of talent, culture, and entertainment." },
]

/* Image placeholders — swap src values once real images are available */
const gallery = [
    { src: '/simla1st.jpeg', label: "The Gaiety Theatre" },
    { src: '/simla2nd.jpeg', label: "Top Performances" },
    { src: '/simla3rd.jpeg', label: "Grand Finale Stage" },
]

export default function VoiceOfSimla2025() {
    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Hero ── */}
            <section className="relative w-full pt-28 pb-20 flex flex-col items-center overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(168,85,247,0.14) 0%, transparent 70%)' }} />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
                        backgroundSize: '50px 50px',
                    }} />

                <div className="relative z-10 flex flex-col items-center gap-5 text-center px-6 max-w-3xl">
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-purple-500/15 text-purple-400 ring-1 ring-purple-400/25">🎤 Season 3</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-white/8 text-gray-300 ring-1 ring-white/15">Winter Carnival · Shimla</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/25">31 Dec 2025</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                        Voice of <span className="text-purple-400">Shimla</span>
                    </h1>
                    <p className="text-gray-400 text-base max-w-xl leading-relaxed">
                        Winter Carnival Talent Competition 2025 — organized by Mahadev Studios in collaboration with MC Shimla
                    </p>

                    {/* Chief guest pill */}
                    <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full
            px-5 py-2.5 mt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Chief Guest</span>
                        <span className="w-px h-4 bg-white/10" />
                        <span className="text-white text-sm font-semibold">{chiefGuest}</span>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-24 flex flex-col gap-10">

                {/* Back */}
                <Link href="/our-work"
                    className="self-start inline-flex items-center gap-2 text-sm text-gray-500
            hover:text-orange-400 transition-colors duration-200 group">
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    Back to Our Work
                </Link>

                {/* ── Gallery ── */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-5">Event Gallery</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {gallery.map((img, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]
                  flex items-center justify-center">
                                    {img.src ? (
                                        <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-gray-600">
                                            <span className="text-3xl">🖼️</span>
                                            <p className="text-xs font-semibold text-center px-4">{img.label}</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs text-gray-500 font-medium text-center">{img.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Winners podium ── */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-5">Competition Winners</p>

                    {/* 1st place — full width hero card */}
                    <div className={`bg-gradient-to-br ${winners[0].bg} border ${winners[0].border}
            rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 mb-5`}>
                        <div className={`w-20 h-20 rounded-2xl bg-yellow-400/10 border ${winners[0].ring}
              flex items-center justify-center text-4xl shrink-0`}>
                            🥇
                        </div>
                        <div className="text-center sm:text-left flex-1">
                            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${winners[0].text} mb-1`}>
                                1st Place · Champion
                            </p>
                            <h3 className="text-3xl font-black text-white">{winners[0].name}</h3>
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Prize Money</p>
                            <p className={`text-3xl font-black ${winners[0].text}`}>{winners[0].prize}</p>
                        </div>
                    </div>

                    {/* 2nd and 3rd */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {winners.slice(1).map((w) => (
                            <div key={w.position}
                                className={`bg-gradient-to-br ${w.bg} border ${w.border}
                  rounded-2xl p-6 flex items-center gap-5`}>
                                <div className={`w-14 h-14 rounded-xl bg-white/5 border ${w.ring}
                  flex items-center justify-center text-2xl shrink-0`}>
                                    {w.medal}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className={`text-xs font-bold uppercase tracking-wider ${w.text} mb-0.5`}>
                                        {w.position} Place
                                    </p>
                                    <h3 className="text-white font-extrabold text-lg truncate">{w.name}</h3>
                                </div>
                                <p className={`text-xl font-black ${w.text} shrink-0`}>{w.prize}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Description ── */}
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-2">About the Event</p>
                        <h2 className="text-2xl font-extrabold text-white">From Auditions to Grand Finale</h2>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex flex-col gap-5 text-gray-300 text-base leading-relaxed">
                        <p>
                            We organised this grand talent competition in collaboration with{' '}
                            <span className="text-white font-semibold">MC Shimla</span> during the prestigious
                            Winter Carnival. The journey began with auditions held at the historic{' '}
                            <span className="text-purple-300 font-semibold">Gaiety Theatre</span>, where
                            participants from different regions showcased their talents.
                        </p>
                        <p>
                            After a rigorous selection process, the{' '}
                            <span className="text-white font-semibold">Top 15 contestants</span> were shortlisted
                            and provided a grand platform to perform in front of the entire Shimla public —
                            witnessed by both local residents and a large number of tourists visiting during
                            the Winter Carnival festivities.
                        </p>
                        <p>
                            The competition reached its peak with the grand finale on{' '}
                            <span className="text-white font-semibold">31st December 2025</span> on the main
                            stage of the Winter Carnival — celebrating talent, culture, and entertainment on a massive scale.
                        </p>
                        <p>
                            The top 3 winners were awarded prize money of{' '}
                            <span className="text-yellow-400 font-bold">₹50,000</span>,{' '}
                            <span className="text-gray-300 font-bold">₹30,000</span>, and{' '}
                            <span className="text-orange-400 font-bold">₹20,000</span> respectively —
                            recognizing their outstanding performances and dedication.
                        </p>
                    </div>
                </article>

                {/* ── Event timeline ── */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-6">Event Journey</p>
                    <div className="flex flex-col gap-0">
                        {timeline.map((t, i) => (
                            <div key={i} className="flex gap-5 group">
                                {/* Line + dot */}
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/40
                    flex items-center justify-center text-xs font-black text-purple-400 shrink-0">
                                        {t.step}
                                    </div>
                                    {i < timeline.length - 1 && (
                                        <div className="w-px flex-1 bg-white/10 my-1" />
                                    )}
                                </div>
                                {/* Content */}
                                <div className={`pb-8 ${i === timeline.length - 1 ? 'pb-0' : ''}`}>
                                    <p className="text-white font-bold text-base leading-none mb-1">{t.label}</p>
                                    <p className="text-purple-400 text-xs font-semibold mb-1">{t.venue}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{t.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20
          rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 mb-2">Organize Your Event</p>
                        <h3 className="text-xl font-extrabold text-white">Want us to produce your next talent show?</h3>
                        <p className="text-gray-400 text-sm mt-1">Mahadev Studios handles everything — auditions to grand finale.</p>
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