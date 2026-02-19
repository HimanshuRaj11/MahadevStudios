import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Works", href: "/our-work" },
    { label: "Our Clients", href: "/our-clients" },
    { label: "Contact", href: "/contact" },
]

const socials = [
    {
        icon: <FaFacebook className="w-4 h-4" />,
        label: "Facebook",
        href: "https://www.facebook.com/wowhimachal",
        color: "hover:bg-blue-500/10 hover:border-blue-400/40 hover:text-blue-400",
    },
    {
        icon: <FaInstagram className="w-4 h-4" />,
        label: "Instagram",
        href: "https://www.instagram.com/wowhimachal",
        color: "hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400",
    },
    {
        icon: <FaInstagram className="w-4 h-4" />,
        label: "Instagram",
        href: "https://www.instagram.com/rhythmsmystic8",
        color: "hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-400",
    },
    {
        icon: <FaYoutube className="w-4 h-4" />,
        label: "YouTube",
        href: "https://www.youtube.com/@MahadevStudios",
        color: "hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-400",
    },
]

const contactItems = [
    {
        icon: <MdPhone className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" />,
        content: (
            <div className="flex flex-col gap-0.5">
                <Link href="tel:+917018313617" className="hover:text-orange-300 transition-colors duration-200 text-sm">+91 70183 13617</Link>
                <Link href="tel:+918894401631" className="hover:text-orange-300 transition-colors duration-200 text-sm">+91 88944 01631</Link>
            </div>
        )
    },
    {
        icon: <MdEmail className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" />,
        content: (
            <Link href="mailto:mahadevproductionsshimla@gmail.com"
                className="hover:text-orange-300 transition-colors duration-200 text-sm break-all">
                mahadevproductionsshimla@gmail.com
            </Link>
        )
    },
    {
        icon: <MdLocationOn className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" />,
        content: (
            <Link href="https://maps.google.com/?q=New+Shimla+Sector+5"
                target="_blank" rel="noopener noreferrer"
                className="hover:text-orange-300 transition-colors duration-200 text-sm leading-relaxed">
                Flat no.1, Block-26 A, Phase-3, Sector-5,<br />
                New Shimla – 171009, HP, India
            </Link>
        )
    },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative bg-slate-950 border-t border-white/10 overflow-hidden">

            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px
        bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

            {/* Main grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* ── Brand ── */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <Link href="/">
                            <img
                                src="/MahadevStudios.png"
                                alt="Mahadev Studios"
                                className="h-12 object-contain"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Award-winning film production house based in Shimla, Himachal Pradesh.
                            Crafting visual stories since 2012 — documentaries, ad films, web series, music videos, and more.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3 mt-1">
                            {socials.map((s, i) => (
                                <Link
                                    key={s.label + i}
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

                    {/* ── Navigation ── */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-orange-300 transition-colors duration-200
                      flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400
                      transition-colors duration-200" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Contact ── */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                            Get In Touch
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {contactItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    {item.icon}
                                    {item.content}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center
          justify-between gap-3 text-gray-600 text-xs">
                    <p>&copy; {year} Mahadev Studios. All Rights Reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Made with
                        <span className="text-orange-400">♥</span>
                        in Shimla, Himachal Pradesh
                    </p>
                </div>
            </div>
        </footer>
    )
}