"use client"
import React, { useEffect, useState } from 'react'
import { OurWork } from '@/lib/Data/OurWork'
import Link from 'next/link'

/* ── Skeleton loader ── */
function Skeleton() {
    return (
        <div className="min-h-screen w-full bg-slate-950 pt-24 px-4 sm:px-8 lg:px-16 animate-pulse">
            <div className="max-w-5xl mx-auto flex flex-col gap-6">
                <div className="h-8 w-1/2 mx-auto bg-white/10 rounded-lg" />
                <div className="h-4 w-1/4 mx-auto bg-white/5 rounded-full" />
                <div className="w-full aspect-video bg-white/5 rounded-2xl" />
                <div className="space-y-3 pt-4">
                    <div className="h-4 bg-white/5 rounded w-full" />
                    <div className="h-4 bg-white/5 rounded w-5/6" />
                    <div className="h-4 bg-white/5 rounded w-4/6" />
                </div>
            </div>
        </div>
    )
}

export default function WorkDetailPage() {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState('loading') // loading | found | notfound

    useEffect(() => {
        const { searchParams } = new URL(window.location.href)
        const _id = parseInt(searchParams.get('_id'))
        const found = OurWork.find(item => item._id === _id)
        if (found) { setData(found); setStatus('found') }
        else setStatus('notfound')
    }, [])

    /* Related: same category, exclude current, max 3 */
    const related = data
        ? OurWork.filter(w => w._id !== data._id && w.category === data.category).slice(0, 3)
        : []

    /* ── States ── */
    if (status === 'loading') return <Skeleton />

    if (status === 'notfound') return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4 text-center px-6">
            <p className="text-6xl">🎬</p>
            <h1 className="text-2xl font-bold text-white">Project not found</h1>
            <p className="text-gray-400 max-w-sm">
                The project you're looking for doesn't exist or has been removed.
            </p>
            <Link
                href="/our-work"
                className="mt-4 px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm
          hover:bg-orange-400 active:scale-95 transition-all duration-200"
            >
                ← Back to Our Work
            </Link>
        </div>
    )

    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Dynamic component (MissionSankalp, WowHimachal, VoiceOfShimla, etc.) ── */}
            {data.component}

            {/* ── Related projects ── */}
            {related.length > 0 && (
                <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-24">

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                    {/* Heading row */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                        <h2 className="text-xl font-extrabold text-white">
                            More in <span className="text-orange-400">{data.category}</span>
                        </h2>
                        <Link
                            href="/our-work"
                            className="text-sm font-semibold text-gray-500 hover:text-orange-400
                transition-colors duration-200 flex items-center gap-1 group whitespace-nowrap"
                        >
                            View all
                            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                        </Link>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {related.map((w, i) => (
                            <Link
                                key={i}
                                href={{ pathname: `/our-work/${w.title}`, query: { _id: w._id } }}
                                className="group relative rounded-2xl overflow-hidden border border-white/10
                  hover:border-orange-400/30 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-950/20"
                            >
                                {/* Thumbnail */}
                                {w.thumbnail ? (
                                    <img
                                        src={w.thumbnail}
                                        alt={w.title}
                                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full aspect-video bg-slate-800/60 flex items-center justify-center text-3xl">
                                        🎬
                                    </div>
                                )}

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Category badge */}
                                {w.category && (
                                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full
                    text-[10px] font-bold uppercase tracking-wider
                    bg-orange-500/80 text-white backdrop-blur-sm">
                                        {w.category}
                                    </span>
                                )}

                                {/* Play button on hover */}
                                <div className="absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-full bg-orange-500/90 flex items-center justify-center
                    shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    {w.year && (
                                        <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-1">
                                            {w.year}
                                        </p>
                                    )}
                                    <p className="text-white text-sm font-bold line-clamp-2 leading-snug">
                                        {w.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}