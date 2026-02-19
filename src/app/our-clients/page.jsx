"use client"
import React, { useEffect, useRef, useState } from 'react'
import { OurClient } from '@/lib/Data/OurClients'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* ── Reusable section ─────────────────────────────────────── */
function ClientSection({ title, clients, accentColor = "orange" }) {
    const accent = {
        orange: {
            badge: "bg-orange-500/10 text-orange-400 ring-1 ring-orange-400/30",
            line: "from-transparent via-orange-500/60 to-transparent",
            dot: "bg-orange-400",
            hover: "hover:border-orange-400/40 hover:shadow-orange-500/10",
            count: "text-orange-400",
        },
        sky: {
            badge: "bg-sky-500/10 text-sky-400 ring-1 ring-sky-400/30",
            line: "from-transparent via-sky-500/60 to-transparent",
            dot: "bg-sky-400",
            hover: "hover:border-sky-400/40 hover:shadow-sky-500/10",
            count: "text-sky-400",
        },
    }[accentColor]

    return (
        <section className="mb-24">
            {/* Section heading */}
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                className="flex flex-col items-center mb-12 gap-3"
            >
                <span className={`text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${accent.badge}`}>
                    Our Clients
                </span>
                <h2 className="capitalize text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight text-center">
                    {title}
                </h2>
                {/* Decorative divider */}
                <div className={`h-px w-48 bg-gradient-to-r ${accent.line} mt-2`} />
                <p className={`text-sm font-semibold ${accent.count}`}>
                    {clients.length} {clients.length === 1 ? 'client' : 'clients'}
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {clients.map((client, index) => (
                    <ClientCard
                        key={index}
                        client={client}
                        index={index}
                        accent={accent}
                    />
                ))}
            </div>
        </section>
    )
}

/* ── Card ─────────────────────────────────────────────────── */
function ClientCard({ client, index, accent }) {
    const [imgError, setImgError] = useState(false)

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={Math.min(index * 60, 400)}
            className={`group relative flex flex-col gap-4 bg-white/[0.03] border border-white/10
        rounded-2xl p-5 cursor-pointer
        transition-all duration-300
        hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-xl
        ${accent.hover}`}
        >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="flex items-center gap-4">
                {/* Logo / Fallback avatar */}
                {client.logo && !imgError ? (
                    <img
                        src={client.logo}
                        alt={client.name}
                        onError={() => setImgError(true)}
                        className="w-14 h-14 shrink-0 rounded-xl object-cover ring-1 ring-white/10
              group-hover:ring-white/20 transition-all duration-300"
                    />
                ) : (
                    <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center
            bg-white/5 ring-1 ring-white/10 text-xl font-bold text-white/40`}>
                        {client.name?.charAt(0) ?? "?"}
                    </div>
                )}

                {/* Name */}
                <h3 className="text-base font-bold text-white leading-snug line-clamp-2 flex-1">
                    {client.name}
                </h3>
            </div>

            {/* Description */}
            {client.description && (
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {client.description}
                </p>
            )}

            {/* Active indicator */}
            <span className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${accent.dot}
        opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
    )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Page() {
    const media_organizations = OurClient.media_organizations
    const government_departments = OurClient.government_departments_himachal_pradesh

    useEffect(() => {
        AOS.init({ once: true, easing: 'ease-out-cubic' })
    }, [])

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Page hero */}
            <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-center mb-20"
            >
                <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    Our <span className="text-orange-400">Clients</span>
                </h1>
                <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
                    Trusted by leading media organizations and government bodies across Himachal Pradesh.
                </p>
            </div>

            <ClientSection
                title="Media Organizations"
                clients={media_organizations}
                accentColor="orange"
            />

            <ClientSection
                title="Government Departments"
                clients={government_departments}
                accentColor="sky"
            />

        </main>
    )
}