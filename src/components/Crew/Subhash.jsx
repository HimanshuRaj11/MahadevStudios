import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMicrophone, FaMusic } from 'react-icons/fa'

const genres = ["Classical Singing", "Film Music", "Folk Music", "Hindustani Classical"]

const reelUrl = "https://www.instagram.com/reel/DEFEmgZvbh_/?igsh=NGRsYjBwejR5d2Fj"

export default function Subhash() {
    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Hero ── */}
            <section className="relative w-full pt-28 pb-20 flex flex-col items-center overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
                        backgroundSize: '50px 50px',
                    }} />

                <div className="relative z-10 flex flex-col items-center gap-5 text-center px-6">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full ring-2 ring-orange-400/40 ring-offset-4 ring-offset-slate-950 overflow-hidden shadow-2xl">
                            <img src="/Subhash.jpg" alt="Subhash Prince" className="w-full h-full object-cover object-center" />
                        </div>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full
              text-[10px] font-black uppercase tracking-wider bg-orange-500 text-white shadow-lg whitespace-nowrap">
                            Singer
                        </span>
                    </div>

                    <div>
                        <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">Mahadev Studios Presents</p>
                        <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
                            Subhash <span className="text-orange-400">Prince</span>
                        </h1>
                        <p className="mt-3 text-gray-400 text-base max-w-md mx-auto leading-relaxed">
                            Classical vocalist · Film &amp; Folk music performer · Shimla
                        </p>
                    </div>

                    {/* Social row */}
                    <div className="flex gap-3 mt-1">
                        <Link href="https://www.instagram.com/_.voice_of_shimla._._/"
                            target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10
                text-gray-400 hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400 transition-all duration-200">
                            <FaInstagram className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.youtube.com/@MahadevStudios"
                            target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10
                text-gray-400 hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-400 transition-all duration-200">
                            <FaYoutube className="w-4 h-4" />
                        </Link>
                        <Link href="mailto:mahadevproductionsshimla@gmail.com" aria-label="Email"
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10
                text-gray-400 hover:bg-orange-500/10 hover:border-orange-400/40 hover:text-orange-400 transition-all duration-200">
                            <FaEnvelope className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Body ── */}
            <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-24 flex flex-col gap-8">

                {/* ── About + Genres ── */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Bio */}
                    <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                        <SectionLabel icon={<FaMicrophone className="w-3.5 h-3.5" />} text="About" />
                        <p className="text-gray-300 text-base leading-relaxed mt-4">
                            Hello, I'm <span className="font-bold text-white">Subhash Prince</span>. Since childhood, I have been
                            passionate about singing. Currently I am pursuing a degree in classical music — a lifelong dream —
                            under the guidance of my esteemed Guru,{' '}
                            <span className="text-orange-300 font-semibold">Shri Kamlesh Mukul ji</span>.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mt-4">
                            My interests span across various genres including classical singing, film music, and folk music.
                            I find immense joy in performing songs from all these traditions.
                        </p>
                        <p className="mt-4 text-base leading-relaxed">
                            <span className="text-white font-bold italic">
                                "Music is not just a hobby for me — it is my life's passion. There is nothing else that
                                captivates me as much as music does."
                            </span>
                        </p>
                    </div>

                    {/* Genres */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                        <SectionLabel icon={<FaMusic className="w-3.5 h-3.5" />} text="Music Genres" />
                        <div className="flex flex-col gap-2 mt-2">
                            {genres.map((g, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]
                  border border-white/5 text-gray-300 text-sm font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                    {g}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Performance ── */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                    <SectionLabel icon="🎬" text="Performance" />
                    <p className="text-gray-500 text-sm mt-4 mb-6">
                        Watch Subhash Prince perform live on Instagram.
                    </p>

                    {/* Reel embed attempt — Instagram doesn't allow iframe embeds on all reels,
              so we provide a rich preview card that links out */}
                    <div className="flex flex-col sm:flex-row items-center gap-6
            bg-gradient-to-br from-pink-500/8 to-purple-500/5
            border border-pink-400/15 rounded-2xl p-6">

                        {/* Instagram icon visual */}
                        <div className="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center
              bg-gradient-to-br from-pink-500 to-purple-600 shadow-xl shadow-pink-900/30">
                            <FaInstagram className="w-9 h-9 text-white" />
                        </div>

                        <div className="flex flex-col gap-2 text-center sm:text-left">
                            <p className="text-white font-bold text-base">Subhash Prince — Live Reel</p>
                            <p className="text-gray-500 text-sm">Watch the performance on Instagram</p>
                            <Link
                                href={reelUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 w-fit mx-auto sm:mx-0
                  px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600
                  text-white font-bold text-sm hover:opacity-90 active:scale-95
                  transition-all duration-200 shadow-lg shadow-pink-900/30 mt-1"
                            >
                                <FaInstagram className="w-3.5 h-3.5" />
                                Watch on Instagram ↗
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Booking CTA ── */}
                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20
          rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 mb-2">Bookings & Inquiries</p>
                        <h3 className="text-xl font-extrabold text-white">Want to book Subhash for your event?</h3>
                        <p className="text-gray-400 text-sm mt-1">Reach out directly — we respond within 24 hours.</p>
                    </div>
                    <div className="flex flex-col gap-3 shrink-0">
                        <Link href="mailto:mahadevproductionsshimla@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 text-white
                font-bold text-sm hover:bg-orange-400 active:scale-95 transition-all duration-200
                shadow-[0_0_20px_rgba(249,115,22,0.35)]">
                            <FaEnvelope className="w-3.5 h-3.5" />
                            Email Us
                        </Link>
                        <div className="flex flex-col gap-1">
                            {["8894401631", "7018313617"].map(num => (
                                <Link key={num} href={`tel:${num}`}
                                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10
                    text-gray-300 font-semibold text-sm hover:border-orange-400/40 hover:text-orange-300
                    transition-all duration-200">
                                    <FaPhone className="w-3 h-3" />
                                    {num}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back */}
                <Link href="/"
                    className="self-start inline-flex items-center gap-2 text-sm text-gray-500
            hover:text-orange-400 transition-colors duration-200 group">
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

function SectionLabel({ icon, text }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-orange-400 text-xs">{icon}</span>
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">{text}</h2>
        </div>
    )
}