"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const menu = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Our Works", link: "/our-work" },
    { label: "Our Client", link: "/our-clients" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    /* Close menu on route change */
    useEffect(() => { setIsOpen(false) }, [pathname])

    /* Shrink nav on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            {/* ── Overlay (mobile) ── */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                aria-hidden="true"
            />

            {/* ── Nav bar ── */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
                        ? 'bg-slate-950/80 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.5)] py-1'
                        : 'bg-gradient-to-b from-slate-950/70 to-transparent backdrop-blur-md py-2'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">

                        {/* ── Logo ── */}
                        <Link href="/" className="flex items-center group shrink-0">
                            <img
                                src="/MahadevStudios.png"
                                alt="Mahadev Studios"
                                className="h-10 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>

                        {/* ── Desktop menu ── */}
                        <ul className="hidden md:flex items-center gap-1">
                            {menu.map((item) => {
                                const isActive = pathname === item.link
                                return (
                                    <li key={item.link}>
                                        <Link
                                            href={item.link}
                                            className={`relative px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-colors duration-200 group
                        ${isActive
                                                    ? 'text-orange-400'
                                                    : 'text-gray-300 hover:text-orange-400'
                                                }`}
                                        >
                                            {item.label}

                                            {/* Active pill */}
                                            <span
                                                className={`absolute inset-0 rounded-md bg-orange-400/10 ring-1 ring-orange-400/30
                          transition-all duration-200
                          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                                            />

                                            {/* Active underline dot */}
                                            {isActive && (
                                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1 h-1 rounded-full bg-orange-400" />
                                            )}
                                        </Link>
                                    </li>
                                )
                            })}

                            {/* CTA button */}
                            <li className="ml-3">
                                <Link
                                    href="/contact"
                                    className="px-5 py-2 text-sm font-bold rounded-full bg-orange-500 text-white
                    hover:bg-orange-400 active:scale-95 transition-all duration-200
                    shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_28px_rgba(249,115,22,0.5)]"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* ── Hamburger (mobile) ── */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg
                text-gray-300 hover:text-orange-400 hover:bg-white/10
                transition-all duration-200 active:scale-90"
                        >
                            {isOpen
                                ? <FaTimes className="w-5 h-5" aria-hidden="true" />
                                : <FaBars className="w-5 h-5" aria-hidden="true" />
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Mobile slide-in drawer ── */}
            <aside
                className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw]
          bg-slate-950/95 backdrop-blur-2xl border-l border-white/10
          flex flex-col pt-20 px-6 pb-8 gap-2
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                aria-label="Mobile navigation"
            >
                {/* Close button inside drawer */}
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
            rounded-full text-gray-400 hover:text-orange-400 hover:bg-white/10
            transition-all duration-200"
                >
                    <FaTimes className="w-4 h-4" />
                </button>

                {/* Logo in drawer */}
                <Link href="/" onClick={() => setIsOpen(false)} className="mb-6">
                    <img src="/MahadevStudios.png" alt="Mahadev Studios" className="h-8 object-contain" />
                </Link>

                {/* Menu items */}
                <nav className="flex flex-col gap-1">
                    {menu.map((item, i) => {
                        const isActive = pathname === item.link
                        return (
                            <Link
                                key={item.link}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold
                  transition-all duration-300
                  ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                  ${isActive
                                        ? 'text-orange-400 bg-orange-400/10 ring-1 ring-orange-400/25'
                                        : 'text-gray-300 hover:text-orange-400 hover:bg-white/5'
                                    }`}
                            >
                                {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                )}
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* CTA in drawer */}
                <div className="mt-auto">
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center px-5 py-3 rounded-full bg-orange-500 text-white
              font-bold text-sm hover:bg-orange-400 transition-colors duration-200
              shadow-[0_0_24px_rgba(249,115,22,0.35)]"
                    >
                        Contact Us
                    </Link>
                </div>
            </aside>
        </>
    )
}