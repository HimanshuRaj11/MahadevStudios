import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

export default function CrewCard({ crew }) {
    return (
        <div className="group relative w-64 flex flex-col items-center gap-4 p-6 rounded-2xl
      bg-white/[0.03] border border-white/10 cursor-pointer
      transition-all duration-300 hover:-translate-y-1
      hover:border-orange-400/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-orange-950/20">

            {/* Avatar */}
            <div className="relative">
                <img
                    src={crew.image}
                    alt={crew.name}
                    className="w-24 h-24 rounded-full object-cover object-center ring-2 ring-white/10
            group-hover:ring-orange-400/40 transition-all duration-300"
                />
                {/* Online dot */}
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-orange-400
          border-2 border-slate-950" />
            </div>

            {/* Info */}
            <div className="text-center">
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-orange-100 transition-colors">
                    {crew.name}
                </h3>
                <span className="mt-1 inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider
          bg-orange-500/10 text-orange-400 border border-orange-400/20">
                    {crew.cast}
                </span>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
                <Link
                    href={crew.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-xl flex items-center justify-center
            bg-white/5 border border-white/10 text-gray-400
            hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400
            transition-all duration-200"
                >
                    <FaInstagram className="w-4 h-4" />
                </Link>
                <Link
                    href={crew.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-xl flex items-center justify-center
            bg-white/5 border border-white/10 text-gray-400
            hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-400
            transition-all duration-200"
                >
                    <FaYoutube className="w-4 h-4" />
                </Link>
            </div>

            {/* View more */}
            <Link
                href={{ pathname: `artists/${crew.id}`, query: { id: crew.id } }}
                className="w-full text-center py-2 rounded-xl border border-white/10 text-sm font-semibold
          text-gray-400 hover:border-orange-400/40 hover:text-orange-400 transition-all duration-200"
                onClick={e => e.stopPropagation()}
            >
                View Profile →
            </Link>
        </div>
    )
}