"use client"
import React, { useEffect, useState } from 'react'
import { crew } from '@/components/OurTopPerformer'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'
import Anjali_Nanak from '@/components/Crew/Anjali_Nanak'
import NehaDixitProfile from '@/components/Crew/Neha_Dixit'
import Subhash from '@/components/Crew/Subhash'

const socialConfig = [
    {
        key: 'instagram',
        icon: <FaInstagram className="w-4 h-4" />,
        label: 'Instagram',
        color: 'hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400',
    },
    {
        key: 'youtube',
        icon: <FaYoutube className="w-4 h-4" />,
        label: 'YouTube',
        color: 'hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-400',
        // fix the original bug: was prepending "/" to the youtube URL
        hrefFn: (val) => val,
    },
    {
        key: 'facebook',
        icon: <FaFacebook className="w-4 h-4" />,
        label: 'Facebook',
        color: 'hover:bg-blue-500/10 hover:border-blue-400/40 hover:text-blue-400',
    },
]

const profileMap = {
    Neha_Dixit: <NehaDixitProfile />,
    Anjali_Nanak: <Anjali_Nanak />,
    Subhash: <Subhash />,
}

/* ── Skeleton while loading ── */
function Skeleton() {
    return (
        <div className="min-h-screen bg-slate-950 pt-24 flex flex-col lg:flex-row gap-6
      max-w-6xl mx-auto px-4 sm:px-8 animate-pulse">
            <div className="w-full lg:w-72 shrink-0 h-96 rounded-2xl bg-white/5" />
            <div className="flex-1 rounded-2xl bg-white/5" />
        </div>
    )
}

export default function ProfilePage() {
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const { searchParams } = new URL(window.location.href)
        const id = searchParams.get('id')
        const found = crew.find(item => item.id === id)
        setPageData(found ?? null)
        setLoading(false)
    }, [])

    if (loading) return <Skeleton />

    if (!pageData) return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4 text-center px-6 pt-20">
            <p className="text-5xl">🎤</p>
            <h1 className="text-2xl font-bold text-white">Artist not found</h1>
            <p className="text-gray-400 text-sm">The profile you're looking for doesn't exist.</p>
            <Link href="/" className="mt-4 px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm
        hover:bg-orange-400 transition-colors duration-200">
                ← Back to Home
            </Link>
        </div>
    )

    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Hero glow ── */}
            <div className="absolute top-0 left-0 right-0 h-80 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 pb-20
        flex flex-col lg:flex-row gap-8 items-start">

                {/* ══ LEFT: Artist Card ══════════════════════════════════ */}
                <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-24">
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">

                        {/* Top colour band */}
                        <div className="h-20 bg-gradient-to-br from-orange-500/20 to-transparent relative">
                            <div className="absolute inset-0 opacity-[0.06]"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
                                    backgroundSize: '20px 20px',
                                }} />
                        </div>

                        {/* Avatar — overlaps the band */}
                        <div className="flex flex-col items-center -mt-12 px-6 pb-6 gap-4">
                            <div className="relative">
                                <img
                                    src={pageData.image}
                                    alt={pageData.name}
                                    className="w-24 h-24 rounded-full object-cover object-center
                    ring-4 ring-slate-950 shadow-2xl"
                                />
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5
                  rounded-full text-[10px] font-black uppercase tracking-wider
                  bg-orange-500 text-white shadow-lg whitespace-nowrap">
                                    {pageData.cast}
                                </span>
                            </div>

                            {/* Name */}
                            <div className="text-center">
                                <h2 className="text-xl font-extrabold text-white">{pageData.name}</h2>
                                <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wider">Mahadev Studios</p>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10" />

                            {/* Socials */}
                            <div className="w-full flex flex-col gap-2">
                                {socialConfig.map(({ key, icon, label, color, hrefFn }) => {
                                    const val = pageData[key]
                                    if (!val) return null
                                    const href = hrefFn ? hrefFn(val) : val
                                    return (
                                        <Link
                                            key={key}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl w-full
                        bg-white/5 border border-white/10 text-gray-400 text-sm font-semibold
                        transition-all duration-200 ${color}`}
                                        >
                                            {icon}
                                            {label}
                                            <span className="ml-auto text-xs opacity-50">↗</span>
                                        </Link>
                                    )
                                })}
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10" />

                            {/* Book CTA */}
                            <Link
                                href="mailto:mahadevproductionsshimla@gmail.com"
                                className="w-full text-center py-2.5 rounded-xl bg-orange-500 text-white font-bold text-sm
                  hover:bg-orange-400 active:scale-95 transition-all duration-200
                  shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                            >
                                Book {pageData.name.split(' ')[0]}
                            </Link>

                            {/* Back link */}
                            <Link href="/"
                                className="text-xs text-gray-600 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1 group">
                                <span className="group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* ══ RIGHT: Profile content ════════════════════════════ */}
                <main className="flex-1 min-w-0">
                    {profileMap[pageData.id] ?? (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-3xl mb-3">🎵</p>
                            <p className="font-semibold">Profile content coming soon.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}