"use client"
import React from 'react'
import { BsFillCameraReelsFill } from "react-icons/bs"
import { FaRocket } from 'react-icons/fa'
import { MdFax } from "react-icons/md"
import { PiSpeakerSimpleHighFill } from "react-icons/pi"
import { GiTakeMyMoney } from "react-icons/gi"
import Link from 'next/link'

const Tags = [
    { icon: <FaRocket className="text-xl text-orange-400" />, tag: "20+ Years of Industry Experience", detail: "Two decades of mastering the craft." },
    { icon: <BsFillCameraReelsFill className="text-xl text-orange-400" />, tag: "Expertise in Film & TV Productions", detail: "National-level quality, every project." },
    { icon: <MdFax className="text-xl text-orange-400" />, tag: "Passionate Storytellers with a Vision", detail: "We don't just film — we tell stories." },
    { icon: <PiSpeakerSimpleHighFill className="text-xl text-orange-400" />, tag: "Commitment to Excellence & Client Satisfaction", detail: "Your vision, delivered without compromise." },
    { icon: <GiTakeMyMoney className="text-xl text-orange-400" />, tag: "High-Quality Production at Competitive Rates", detail: "Premium output, sensible pricing." },
]

export default function WhyChooseUs() {
    return (
        <div className="w-full px-4 sm:px-8 lg:px-16 py-20">

            {/* Heading */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-14">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Edge</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Why Choose <span className="text-orange-400">Us?</span>
                </h2>
                <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {Tags.map((item, i) => (
                    <div
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={Math.min(i * 80, 320)}
                        className="group flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/10
              cursor-pointer transition-all duration-300
              hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.06]"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-400/20
              flex items-center justify-center transition-colors duration-200 group-hover:bg-orange-500/20">
                            {item.icon}
                        </div>
                        <h3 className="text-white font-bold text-base leading-snug group-hover:text-orange-100 transition-colors">
                            {item.tag}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                ))}

                {/* CTA card */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="400"
                    className="flex flex-col justify-center items-center gap-4 p-6 rounded-2xl
            bg-orange-500/10 border border-orange-400/25 text-center"
                >
                    <p className="text-white font-bold text-base">Ready to work together?</p>
                    <Link href="/contact"
                        className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm
              hover:bg-orange-400 active:scale-95 transition-all duration-200
              shadow-[0_0_20px_rgba(249,115,22,0.35)]">
                        Let's Talk →
                    </Link>
                </div>
            </div>
        </div>
    )
}