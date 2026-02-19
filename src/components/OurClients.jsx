import { OurClient } from '@/lib/Data/OurClients'
import Link from 'next/link'
import React, { useState } from 'react'

function ClientCard({ client, index }) {
    const [imgErr, setImgErr] = useState(false)

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={Math.min(index * 70, 280)}
            className="group flex items-center gap-4 p-5 rounded-2xl
        bg-white/[0.03] border border-white/10 cursor-pointer
        transition-all duration-300 hover:-translate-y-1
        hover:border-orange-400/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-orange-950/20"
        >
            {/* Logo / Fallback */}
            {client.logo && !imgErr ? (
                <img
                    src={client.logo}
                    alt={client.name}
                    onError={() => setImgErr(true)}
                    className="w-14 h-14 shrink-0 rounded-xl object-cover ring-1 ring-white/10
            group-hover:ring-orange-400/30 transition-all duration-300"
                />
            ) : (
                <div className="w-14 h-14 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10
          flex items-center justify-center text-xl font-black text-white/30">
                    {client.name?.charAt(0) ?? '?'}
                </div>
            )}

            {/* Text */}
            <div className="min-w-0">
                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2
          group-hover:text-orange-100 transition-colors duration-200">
                    {client.name}
                </h3>
                {client.description && (
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mt-1">
                        {client.description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default function OurClients() {
    const media_organizations = OurClient.media_organizations
    const government_departments = OurClient.government_departments_himachal_pradesh

    const sections = [
        { label: "Media Organizations", data: media_organizations, accent: "orange" },
        { label: "Government Departments", data: government_departments, accent: "sky" },
    ]

    return (
        <div className="relative w-full px-4 sm:px-8 lg:px-16 py-20">

            {/* Section heading */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-14">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Who We've Worked With</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Our <span className="text-orange-400">Clients</span>
                </h2>
                <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {sections.map(({ label, data, accent }) => (
                    <div key={label}>
                        {/* Sub-heading */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className={`w-1.5 h-5 rounded-full ${accent === 'orange' ? 'bg-orange-400' : 'bg-sky-400'}`} />
                            <h3 className={`text-sm font-bold uppercase tracking-[0.2em]
                ${accent === 'orange' ? 'text-orange-400' : 'text-sky-400'}`}>
                                {label}
                            </h3>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full
                ${accent === 'orange'
                                    ? 'bg-orange-500/10 text-orange-400 ring-1 ring-orange-400/25'
                                    : 'bg-sky-500/10 text-sky-400 ring-1 ring-sky-400/25'}`}>
                                {data.length}
                            </span>
                        </div>

                        {/* Grid — show 4 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {data.slice(0, 4).map((client, i) => (
                                <ClientCard key={i} client={client} index={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* View all CTA */}
            <div data-aos="fade-up" className="flex justify-center mt-12">
                <Link
                    href="/our-clients"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
            border border-white/20 text-white font-bold text-sm
            hover:bg-white/10 hover:border-orange-400/40 hover:text-orange-300
            active:scale-95 transition-all duration-200"
                >
                    View All Clients →
                </Link>
            </div>
        </div>
    )
}