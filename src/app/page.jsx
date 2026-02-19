"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Services from "@/components/serviceCard"
import WhyChooseUs from "@/components/WhyChooseUs"
import OurTopWorks from "@/components/OurTopWorks"
import ContactUs from "@/components/ContactUs"
import OurTeam from "@/components/OurTeam"
import Aboutsection from "@/components/Aboutsection"
import OurTopPerformer from "@/components/OurTopPerformer"
import Event_Concert_Organization from "@/components/Event_Concert_Organization"
import OurClients from '@/components/OurClients'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, easing: 'ease-out-cubic', offset: 50 })
  }, [])

  return (
    <div className="w-full bg-slate-950 overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        {/* layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-transparent h-28" />

        {/* Hero text */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-5"
          data-aos="fade-up" data-aos-duration="1000">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.35em]">
            Mahadev Studios — Shimla
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-tight tracking-tight">
            Stories That <br />
            <span className="text-orange-400">Move People</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
            Award-winning film production from the heart of Himachal Pradesh. Documentaries, ad films, web series, and more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link href="/our-work"
              className="px-7 py-3 rounded-full bg-orange-500 text-white font-bold text-sm
                hover:bg-orange-400 active:scale-95 transition-all duration-200
                shadow-[0_0_28px_rgba(249,115,22,0.4)]">
              View Our Work →
            </Link>
            <Link href="/contact"
              className="px-7 py-3 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20
                hover:bg-white/20 active:scale-95 transition-all duration-200 backdrop-blur-sm">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
          text-white/30 animate-bounce text-xs uppercase tracking-widest">
          <span>Scroll</span>
          <span className="text-base">↓</span>
        </div>
      </section>

      {/* ── About ── */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-fixed bg-cover bg-center opacity-10 pointer-events-none" />
        <Aboutsection />
      </section>

      {/* ── Services ── */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/6923253.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative pt-16 pb-8">
          <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-12 px-4">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Our Expertise <span className="text-orange-400">&amp; Services</span>
            </h2>
            <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
          </div>
          <Services />
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/team-bg.jpg')] bg-fixed bg-cover bg-center opacity-10 pointer-events-none" />
        <OurTeam />
      </section>

      {/* ── Why Choose Us ── */}
      <WhyChooseUs />

      {/* ── Top Works ── */}
      <OurTopWorks />

      {/* ── Clients ── */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/Gallery/IMG_7728.JPG')] bg-fixed bg-cover bg-center opacity-10 pointer-events-none" />
        <OurClients />
      </section>

      {/* ── Events ── */}
      <Event_Concert_Organization />

      {/* ── Performers ── */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/performer-bg.jpg')] bg-fixed bg-cover bg-center opacity-10 pointer-events-none" />
        <OurTopPerformer />
      </section>

      {/* ── Contact ── */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-fixed bg-cover bg-center opacity-10 pointer-events-none" />
        <ContactUs />
      </section>

    </div>
  )
}