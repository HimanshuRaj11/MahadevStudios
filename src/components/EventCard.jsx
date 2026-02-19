import { PlayCircleIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function EventCard({ work, index = 0 }) {
    const [imgErr, setImgErr] = useState(false)

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={Math.min(index * 60, 360)}
            className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl
        overflow-hidden cursor-pointer transition-all duration-300
        hover:-translate-y-1 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-orange-950/30"
        >

            {/* ── Thumbnail ── */}
            <div className="relative w-full aspect-video overflow-hidden">
                {!imgErr ? (
                    <img
                        src={work.thumbnail}
                        alt={work.title}
                        onError={() => setImgErr(true)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    /* Fallback placeholder */
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                        <span className="text-4xl">🎬</span>
                    </div>
                )}

                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                {work.category && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase
            tracking-wider bg-orange-500/90 text-white backdrop-blur-sm shadow-lg">
                        {work.category}
                    </span>
                )}

                {/* Play icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href={{ pathname: `/our-work/${work.title}`, query: { _id: `${work._id}` } }}>
                        <div className="w-12 h-12 rounded-full bg-orange-500/90 flex items-center justify-center
            shadow-xl shadow-orange-900/50 scale-75 group-hover:scale-100 transition-transform duration-300">
                            <PlayCircleIcon />
                        </div>
                    </Link>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                <h5 className="text-white font-bold text-base leading-snug line-clamp-2 flex-1
          group-hover:text-orange-100 transition-colors duration-200">
                    {work.title}
                </h5>

                {work.description && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {work.description}
                    </p>
                )}

                {/* Footer row */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    {work.year && (
                        <span className="text-xs text-gray-500 font-medium">{work.year}</span>
                    )}
                    <Link
                        href={{ pathname: `/our-work/${work.title}`, query: { _id: `${work._id}` } }}
                        className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400
              hover:text-orange-300 transition-colors duration-200 group/link"
                    >
                        View Project
                        <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}