import React from 'react'

export default function Aboutsection() {
    return (
        <div className="relative w-full px-4 sm:px-8 lg:px-24 py-20 flex flex-col items-center">

            {/* Section label */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-14">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Who <span className="text-orange-400">We Are</span>
                </h2>
                <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl w-full">

                {/* Image */}
                <div className="md:w-1/2 w-full" data-aos="fade-right" data-aos-duration="800">
                    <div className="relative">
                        <img
                            src="/service/fec219a.jpg"
                            alt="Mahadev Studios team at work"
                            className="rounded-2xl shadow-2xl w-full object-cover ring-1 ring-white/10"
                        />
                        {/* Floating stat */}
                        <div className="absolute -bottom-5 -right-4 bg-orange-500 text-white rounded-2xl px-5 py-3
              shadow-xl shadow-orange-900/40">
                            <p className="text-2xl font-black leading-none">14+</p>
                            <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mt-0.5">Years of Experience</p>
                        </div>
                        {/* Corner accent */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-400/40 rounded-tl-2xl pointer-events-none" />
                    </div>
                </div>

                {/* Text */}
                <div className="md:w-1/2 w-full text-white" data-aos="fade-left" data-aos-duration="800">
                    <p className="text-gray-300 text-base leading-relaxed mb-5">
                        Founded in <span className="font-bold text-white">2012 in Shimla</span>, Mahadev Studios is a
                        renowned film production house known for producing high-quality documentaries, short films,
                        ad films, web series, music videos, album songs, and advertisements.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed mb-8">
                        With <span className="font-bold text-white">14+ years</span> of combined experience in the
                        National TV industry, we have established ourselves as storytelling experts, crafting
                        impactful visual content that resonates deeply with audiences across India.
                    </p>

                    {/* Mini stats row */}
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { v: '500+', l: 'Projects' },
                            { v: '15–20', l: 'Professionals' },
                            { v: '50+', l: 'Govt. Partners' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center
                hover:border-orange-400/30 transition-colors duration-200">
                                <p className="text-2xl font-black text-orange-400">{s.v}</p>
                                <p className="text-gray-500 text-xs font-semibold mt-1">{s.l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}