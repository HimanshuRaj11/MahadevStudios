"use client"
import React, { useEffect, useState } from 'react'
import { OurWork } from '@/lib/Data/OurWork'
import ReactPlayer from 'react-player/youtube'
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

/* ── Local video player ── */
function LocalVideo({ src, label }) {
    return (
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            {label && (
                <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
                </div>
            )}
            <video controls className="w-full max-h-[70vh] object-contain bg-black">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default function WorkDetailPage() {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState('loading') // loading | found | notfound
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        const { searchParams } = new URL(window.location.href)
        const _id = parseInt(searchParams.get('_id'))
        const found = OurWork.find(item => item._id === _id)
        if (found) { setData(found); setStatus('found') }
        else setStatus('notfound')
    }, [])

    /* Suggest nearby works */
    const related = data
        ? OurWork.filter(w => w._id !== data._id && w.category === data.category).slice(0, 3)
        : []

    if (status === 'loading') return <Skeleton />

    if (status === 'notfound') return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4 text-center px-6">
            <p className="text-6xl">🎬</p>
            <h1 className="text-2xl font-bold text-white">Project not found</h1>
            <p className="text-gray-400">The project you're looking for doesn't exist or has been removed.</p>
            <Link href="/our-work"
                className="mt-4 px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm
          hover:bg-orange-400 transition-colors duration-200">
                ← Back to Our Work
            </Link>
        </div>
    )

    const hasYouTube = !!data.video_URL
    const localVideos = [data.video1, data.video2].filter(Boolean)
    const hasAnyVideo = hasYouTube || localVideos.length > 0

    return (
        <div className="min-h-screen w-full bg-slate-950">

            {/* ── Hero banner (thumbnail bg) ── */}
            {data.thumbnail && (
                <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
                    <img
                        src={data.thumbnail}
                        alt={data.title}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 to-transparent" />
                </div>
            )}

            <div className={`max-w-4xl mx-auto px-4 sm:px-8 lg:px-0 pb-24 ${data.thumbnail ? '-mt-32 relative z-10' : 'pt-28'}`}>

                {/* ── Back link ── */}
                <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400
            transition-colors duration-200 mb-8 group"
                >
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    Back to Our Work
                </Link>

                {/* ── Meta ── */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    {data.category && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/30">
                            {data.category}
                        </span>
                    )}
                    {data.year && (
                        <span className="text-xs text-gray-500 font-medium">{data.year}</span>
                    )}
                </div>

                {/* ── Title ── */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
                    {data.title}
                </h1>

                {/* ── Video section ── */}
                {hasAnyVideo && (
                    <div className="flex flex-col gap-6 mb-10">

                        {/* YouTube embed */}
                        {hasYouTube && (
                            <div className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60
                border border-white/10 bg-black aspect-video">
                                <ReactPlayer
                                    url={data.video_URL}
                                    width="100%"
                                    height="100%"
                                    controls
                                    playing={playing}
                                    onPlay={() => setPlaying(true)}
                                    onPause={() => setPlaying(false)}
                                    config={{
                                        youtube: {
                                            playerVars: { modestbranding: 1, rel: 0 }
                                        }
                                    }}
                                />
                            </div>
                        )}

                        {/* Local videos */}
                        {localVideos.map((src, i) => (
                            <LocalVideo
                                key={i}
                                src={src}
                                label={localVideos.length > 1 ? `Clip ${i + 1}` : undefined}
                            />
                        ))}
                    </div>
                )}

                {/* ── Description ── */}
                {data.description && (
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 mb-12">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-4">
                            About this project
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                            {data.description}
                        </p>
                    </div>
                )}

                {/* ── Divider ── */}
                {related.length > 0 && (
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
                )}

                {/* ── Related projects ── */}
                {related.length > 0 && (
                    <div>
                        <h2 className="text-xl font-extrabold text-white mb-6">
                            More in <span className="text-orange-400">{data.category}</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {related.map((w, i) => (
                                <Link
                                    key={i}
                                    href={{ pathname: `/our-work/${w.title}`, query: { _id: w._id } }}
                                    className="group relative rounded-xl overflow-hidden border border-white/10
                    hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {w.thumbnail ? (
                                        <img
                                            src={w.thumbnail}
                                            alt={w.title}
                                            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full aspect-video bg-slate-800 flex items-center justify-center text-3xl">🎬</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold line-clamp-2">
                                        {w.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}