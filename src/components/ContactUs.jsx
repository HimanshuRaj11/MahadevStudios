import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

const contactDetails = [
    {
        icon: <MdPhone className="w-5 h-5" />,
        label: "Phone",
        items: [
            { text: "+91 70183 13617", href: "tel:+917018313617" },
            { text: "+91 88944 01631", href: "tel:+918894401631" },
        ]
    },
    {
        icon: <MdEmail className="w-5 h-5" />,
        label: "Email",
        items: [{ text: "mahadevproductionsshimla@gmail.com", href: "mailto:mahadevproductionsshimla@gmail.com" }]
    },
    {
        icon: <MdLocationOn className="w-5 h-5" />,
        label: "Address",
        items: [{ text: "Flat no.1, Block-26 A, Phase-3, Sector-5, New Shimla – 171009, HP, India", href: "https://maps.google.com/?q=New+Shimla+Sector+5" }]
    },
]

const socials = [
    { icon: <FaFacebook className="w-4 h-4" />, href: "https://www.facebook.com/wowhimachal", label: "Facebook", color: "hover:bg-blue-500/10 hover:border-blue-400/40 hover:text-blue-400" },
    { icon: <FaInstagram className="w-4 h-4" />, href: "https://www.instagram.com/wowhimachal", label: "Instagram", color: "hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400" },
    { icon: <FaYoutube className="w-4 h-4" />, href: "https://www.youtube.com/@MahadevStudios", label: "YouTube", color: "hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-400" },
]

export default function ContactUs() {
    return (
        <div className="relative w-full px-4 sm:px-8 lg:px-16 py-20">

            {/* Heading */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-14">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Reach Out</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Contact <span className="text-orange-400">Us</span>
                </h2>
                <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>

            {/* Card */}
            <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden"
            >
                <div className="grid md:grid-cols-2">

                    {/* Left: CTA */}
                    <div className="p-8 md:p-10 flex flex-col justify-between gap-8
            bg-gradient-to-br from-orange-500/10 to-transparent border-b md:border-b-0 md:border-r border-white/10">
                        <div>
                            <h3 className="text-2xl font-extrabold text-white mb-3">We'd Love to Hear From You</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Facing issues or have a project in mind? Our team is here to help you bring your vision to life.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                  bg-orange-500 text-white font-bold text-sm
                  hover:bg-orange-400 active:scale-95 transition-all duration-200
                  shadow-[0_0_24px_rgba(249,115,22,0.35)]"
                            >
                                Send a Message →
                            </Link>
                            <Link
                                href="mailto:mahadevproductionsshimla@gmail.com"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                  border border-white/15 text-gray-300 font-bold text-sm
                  hover:border-orange-400/40 hover:text-orange-300 transition-all duration-200"
                            >
                                Email Directly
                            </Link>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">Follow Us</p>
                            <div className="flex gap-3">
                                {socials.map(s => (
                                    <Link
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className={`w-9 h-9 rounded-xl flex items-center justify-center
                      bg-white/5 border border-white/10 text-gray-400
                      transition-all duration-200 ${s.color}`}
                                    >
                                        {s.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact details */}
                    <div className="p-8 md:p-10 flex flex-col gap-6">
                        {contactDetails.map((detail, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-9 h-9 shrink-0 rounded-lg bg-orange-500/10 border border-orange-400/20
                  flex items-center justify-center text-orange-400 mt-0.5">
                                    {detail.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{detail.label}</p>
                                    {detail.items.map((item, j) => (
                                        item.href ? (
                                            <Link
                                                key={j}
                                                href={item.href}
                                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                                rel="noopener noreferrer"
                                                className="block text-white text-sm font-semibold hover:text-orange-300
                          transition-colors duration-200 break-all"
                                            >
                                                {item.text}
                                            </Link>
                                        ) : (
                                            <p key={j} className="text-white text-sm font-semibold">{item.text}</p>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}