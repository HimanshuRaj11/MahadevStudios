import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMicrophone } from 'react-icons/fa'

const indianArtists = ["Usha Uthup", "Lata Mangeshkar", "Asha Bhosle", "Shreya Ghoshal", "Sunidhi Chauhan", "Arijit Singh", "Sonu Nigam"]
const westernArtists = ["Ariana Grande", "Justin Bieber", "Charlie Puth", "Billie Eilish", "Dimash Kudaibergen", "BTS (Jungkook)"]
const hobbies = ["Cooking", "Dancing", "Painting", "Exploring new adventures"]

const reels = [
    { src: "https://www.instagram.com/reel/DEmdcvxPPul/embed", title: "Performance – Reel 1" },
    { src: "https://www.instagram.com/reel/DEB7IRXvW7B/embed", title: "Performance – Reel 2" },
]

export default function Anjali_Nanak() {
    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Hero ── */}
            <section className="relative w-full pt-28 pb-20 flex flex-col items-center overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />
                {/* Grid texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
                        backgroundSize: '50px 50px',
                    }} />

                <div className="relative z-10 flex flex-col items-center gap-5 text-center px-6">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full ring-2 ring-orange-400/40 ring-offset-4 ring-offset-slate-950 overflow-hidden shadow-2xl">
                            <img src="/anjali.jpg" alt="Anjali Nanak" className="w-full h-full object-cover object-center" />
                        </div>
                        {/* Live badge */}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full
              text-[10px] font-black uppercase tracking-wider bg-orange-500 text-white shadow-lg">
                            Artist
                        </span>
                    </div>

                    <div>
                        <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">Mahadev Studios Presents</p>
                        <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
                            Anjali <span className="text-orange-400">Nanak</span>
                        </h1>
                        <p className="mt-3 text-gray-400 text-base max-w-md mx-auto leading-relaxed">
                            Hindustani Classical vocalist · Masters student at HPU Shimla
                        </p>
                    </div>

                    {/* Social row */}
                    <div className="flex gap-3 mt-1">
                        <Link href="https://www.instagram.com/_.voice_of_shimla._._/" target="_blank" rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10
                text-gray-400 hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400 transition-all duration-200">
                            <FaInstagram className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.youtube.com/@MahadevStudios" target="_blank" rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10
                text-gray-400 hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-400 transition-all duration-200">
                            <FaYoutube className="w-4 h-4" />
                        </Link>
                        <Link href="mailto:mahadevproductionsshimla@gmail.com"
                            aria-label="Email"
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10
                text-gray-400 hover:bg-orange-500/10 hover:border-orange-400/40 hover:text-orange-400 transition-all duration-200">
                            <FaEnvelope className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Body ── */}
            <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-24 flex flex-col gap-10">

                {/* ── About + Hobbies ── */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Bio */}
                    <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                        <SectionLabel icon={<FaMicrophone className="w-3.5 h-3.5" />} text="About" />
                        <p className="text-gray-300 text-base leading-relaxed mt-4">
                            Hello! I am <span className="font-bold text-white">Anjali</span>, currently pursuing my Masters
                            in <span className="text-orange-300 font-semibold">Hindustani Classical Music</span> from HPU Shimla,
                            under the guidance of my esteemed Gurujans,{' '}
                            <span className="text-white font-medium">Dr. O.P. Koul</span> and{' '}
                            <span className="text-white font-medium">Dr. T.C. Koul</span>.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mt-4">
                            While my foundation is in Indian Classical Music, I have a deep appreciation for various other
                            genres including Western and Indian Pop. I enjoy singing songs that incorporate growls and yodeling,
                            and I thrive on performing and interacting with audiences both on and off stage.
                        </p>
                    </div>

                    {/* Hobbies */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                        <SectionLabel icon="✦" text="Hobbies" />
                        <div className="flex flex-col gap-2 mt-2">
                            {hobbies.map((h, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]
                  border border-white/5 text-gray-300 text-sm font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                    {h}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Inspirations ── */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                    <SectionLabel icon="♪" text="Musical Inspirations" />
                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        {[
                            { title: "Indian Artists", artists: indianArtists, accent: "orange" },
                            { title: "Western Artists", artists: westernArtists, accent: "sky" },
                        ].map(({ title, artists, accent }) => (
                            <div key={title}>
                                <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-4
                  ${accent === 'orange' ? 'text-orange-400' : 'text-sky-400'}`}>
                                    {title}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {artists.map(a => (
                                        <span key={a}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-200
                        ${accent === 'orange'
                                                    ? 'bg-orange-500/8 border-orange-400/20 text-orange-300 hover:bg-orange-500/15'
                                                    : 'bg-sky-500/8 border-sky-400/20 text-sky-300 hover:bg-sky-500/15'}`}>
                                            {a}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Performances ── */}
                <div>
                    <div className="mb-6">
                        <SectionLabel icon="🎬" text="Performances" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {reels.map((reel, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{reel.title}</p>
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                    <iframe
                                        src={reel.src}
                                        width="100%"
                                        height="480"
                                        frameBorder="0"
                                        allowFullScreen
                                        title={reel.title}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Booking CTA ── */}
                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20
          rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 mb-2">Bookings & Inquiries</p>
                        <h3 className="text-xl font-extrabold text-white">Want to book Anjali for your event?</h3>
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
                            {["8894548468", "7018313617"].map(num => (
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

                {/* Back link */}
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

/* Small label helper */
function SectionLabel({ icon, text }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-orange-400 text-xs">{icon}</span>
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">{text}</h2>
        </div>
    )
}