'use client'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import Image from 'next/image'

const imageFiles = [
    "0fa47954.jpg", "5L4A0990.JPG", "5L4A2384.JPG", "5L4A2583.JPG",
    "5L4A5572.JPG", "5L4A8168.JPG", "5L4A8379.JPG", "5L4A9185.JPG",
    "5L4A9745.JPG", "185f1da.jpg", "326a831f.jpg", "6402ca28.jpg",
    "72569e4f.jpg", "DJI_0497.JPG", "DJI_0506.JPG", "DJI_0668.JPG",
    "DJI_0681.JPG", "DJI_0718.JPG", "e5278bb.jpg", "GOPR0855.JPG",
    "GOPR0863.JPG", "IMG_7728.JPG"
]

const stats = [
    { value: "14+", label: "Years of Excellence" },
    { value: "20+", label: "Expert Professionals" },
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Govt. Collaborations" },
]

const services = [
    "Documentaries", "Short Films", "Ad Films", "Web Series",
    "Music Videos", "Album Songs", "Advertisements", "Corporate Films",
]

/* ── Lightbox ── */
function Lightbox({ images, startIndex, onClose }) {
    const [current, setCurrent] = useState(startIndex)

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % images.length)
            if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + images.length) % images.length)
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center overflow-hidden"
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl font-light transition-colors z-10"
                aria-label="Close"
            >✕</button>

            {/* Prev */}
            <button
                onClick={e => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length) }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
          text-white flex items-center justify-center text-xl transition-all z-10"
                aria-label="Previous"
            >‹</button>

            {/* Image */}
            <img
                src={`/Gallery/${images[current]}`}
                alt="Gallery"
                onClick={e => e.stopPropagation()}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />

            {/* Next */}
            <button
                onClick={e => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length) }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
          text-white flex items-center justify-center text-xl transition-all z-10"
                aria-label="Next"
            >›</button>

            {/* Counter */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                {current + 1} / {images.length}
            </p>
        </div>
    )
}

/* ── Page ── */
export default function AboutPage() {
    const [lightbox, setLightbox] = useState(null) // null | index

    useEffect(() => {
        AOS.init({ once: true, easing: 'ease-out-cubic', offset: 60 })
    }, [])

    return (
        <div className="w-full bg-slate-950 overflow-x-hidden">

            {/* ══ HERO ═══════════════════════════════════════════════════ */}
            <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                {/* BG image */}
                <img
                    src="/6190833.jpg"
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-transparent" />

                {/* Text */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="relative z-10 text-center px-6"
                >
                    <p className="text-orange-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                        Mahadev Studios
                    </p>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                        About <span className="text-orange-400">Us</span>
                    </h1>
                    <p className="mt-5 text-gray-300 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Crafting visual stories that inspire, inform, and endure since 2010.
                    </p>
                    {/* Scroll cue */}
                    <div className="mt-12 flex flex-col items-center gap-1 text-white/30 animate-bounce">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <span className="text-lg">↓</span>
                    </div>
                </div>
            </section>

            {/* ══ STATS ══════════════════════════════════════════════════ */}
            <section className="relative z-10 -mt-10 px-4 sm:px-8 lg:px-16">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
                >
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-7 text-center
                hover:bg-white/[0.07] hover:border-orange-400/30 transition-all duration-300 group"
                        >
                            <p className="text-4xl font-black text-orange-400 group-hover:scale-110 transition-transform duration-300">
                                {s.value}
                            </p>
                            <p className="text-gray-400 text-sm mt-1 font-medium">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ STORY ══════════════════════════════════════════════════ */}
            <section className="px-4 sm:px-8 lg:px-16 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image stack */}
                    <div data-aos="fade-right" data-aos-duration="900" className="relative">
                        <img
                            src="/Gallery/5L4A2324.JPG"
                            alt="Mahadev Studios team"
                            className="w-full h-[50vh] lg:h-[60vh] object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
                        />
                        {/* Floating badge */}
                        <div className="absolute -bottom-5 -right-5 bg-orange-500 text-white rounded-2xl px-6 py-4 shadow-xl shadow-orange-900/40">
                            <p className="text-3xl font-black">14+</p>
                            <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Years of Trust</p>
                        </div>
                        {/* Corner accent */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-orange-400/40 rounded-tl-2xl pointer-events-none" />
                    </div>

                    {/* Text */}
                    <div data-aos="fade-left" data-aos-duration="900" className="flex flex-col gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                                Our Story
                            </span>
                            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white leading-snug">
                                Telling Stories That <br />
                                <span className="text-orange-400">Matter Most</span>
                            </h2>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-base">
                            Mahadev Studios, founded in 2012 in Shimla, is a premier film production house
                            specializing in high-quality documentaries, short films, web series, music videos,
                            and advertisements. With over 20 years of combined experience in the national TV
                            industry, we've built a reputation for excellence.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-base">
                            Our team of 15–20 highly skilled professionals are not just seasoned experts but
                            dedicated storytellers. We work on projects that highlight government welfare
                            initiatives, societal transformation, and impactful public policies — ensuring
                            every production is crafted with passion and precision.
                        </p>

                        {/* Service tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {services.map((s, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10
                    text-gray-300 hover:border-orange-400/40 hover:text-orange-300 transition-colors duration-200"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                            <Link
                                href="/our-work"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-orange-500 text-white
                  font-bold text-sm hover:bg-orange-400 active:scale-95 transition-all duration-200
                  shadow-[0_0_24px_rgba(249,115,22,0.35)] hover:shadow-[0_0_36px_rgba(249,115,22,0.5)]"
                            >
                                View Our Work
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ GALLERY ════════════════════════════════════════════════ */}
            <section className="px-4 sm:px-8 lg:px-16 pb-24">
                {/* Heading */}
                <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                        Portfolio
                    </span>
                    <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
                        Our Gallery
                    </h2>
                    <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                    <p className="mt-4 text-gray-400 max-w-lg mx-auto text-sm">
                        A glimpse into our creative world — click any image to explore.
                    </p>
                </div>

                {/* Masonry-style grid */}
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3 max-w-7xl mx-auto">
                    {imageFiles.map((image, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={Math.min(i * 40, 300)}
                            onClick={() => setLightbox(i)}
                            className="break-inside-avoid overflow-hidden rounded-xl cursor-zoom-in group relative"
                        >
                            <Image
                                height={100}
                                width={100}
                                src={`/Gallery/${image}`}
                                alt={`Gallery ${i + 1}`}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex items-end p-3">
                                <span className="text-white text-xs font-semibold bg-orange-500/80 rounded-full px-3 py-1">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {lightbox !== null && (
                <Lightbox
                    images={imageFiles}
                    startIndex={lightbox}
                    onClose={() => setLightbox(null)}
                />
            )}
        </div>
    )
}