import Link from 'next/link'
import React from 'react'

const listItems = [
    { name: "Concept Development", description: "We shape ideas into unforgettable experiences from the ground up." },
    { name: "Venue Selection & Setup", description: "Finding the perfect location and designing truly immersive setups." },
    { name: "Artist & Talent Management", description: "Booking top performers, speakers, and entertainment acts." },
    { name: "Marketing & Promotion", description: "Maximizing audience reach with targeted strategic promotions." },
    { name: "On-Ground Coordination", description: "Managing logistics, security, and a seamless guest experience." },
]

export default function Event_Concert_Organization() {
    return (
        <div className="w-full px-4 sm:px-8 lg:px-16 py-20">

            {/* Heading */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-14">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Live Experiences</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Event & Concert <span className="text-orange-400">Organization</span>
                </h2>
                <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>

            {/* Intro row */}
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto mb-16">
                <div data-aos="fade-right" data-aos-duration="800" className="md:w-1/2 w-full">
                    <div className="relative">
                        <img
                            src="/Gallery/326a831f.jpg"
                            alt="Event Organization"
                            className="w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                        />
                        <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-orange-400/40 rounded-tr-2xl pointer-events-none" />
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="800" className="md:w-1/2 w-full flex flex-col gap-5">
                    <p className="text-gray-300 text-base leading-relaxed">
                        At Mahadev Studios, we bring your vision to life with world-class event and concert management.
                        Whether it's a grand music concert, corporate event, cultural fest, or a private gathering,
                        our experienced team ensures a seamless experience from planning to execution.
                    </p>
                    <Link href="/contact"
                        className="inline-flex items-center gap-2 w-fit px-7 py-3 rounded-full bg-orange-500 text-white
              font-bold text-sm hover:bg-orange-400 active:scale-95 transition-all duration-200
              shadow-[0_0_24px_rgba(249,115,22,0.35)]">
                        Plan Your Event →
                    </Link>
                </div>
            </div>

            {/* What we offer grid */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-white">What We Offer</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {listItems.map((item, i) => (
                    <div
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={Math.min(i * 80, 320)}
                        className="group flex flex-col gap-2 p-6 rounded-2xl bg-white/[0.03] border border-white/10
              cursor-pointer transition-all duration-300
              hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.06]"
                    >
                        <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center
              text-white text-xs font-black shrink-0 mb-1">
                            {i + 1}
                        </div>
                        <h4 className="text-white font-bold text-base group-hover:text-orange-100 transition-colors">
                            {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}