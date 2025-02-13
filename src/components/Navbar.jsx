"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menu = [
        {
            Label: "Home",
            link: "/",
        },
        {
            Label: "About",
            link: "/about",
        },

        {
            Label: "Our Works",
            link: "/our-work",
        },
        {
            Label: "Contact",
            link: "/contact",
        },
    ]

    return (
        <nav className="fixed backdrop-blur-md w-[100%] top-0 z-50 shadow-lg">
            <div className="w-[100%] flex flex-wrap items-center justify-between p-2">
                <Link href="/" className="flex items-center">
                    <img src={`/MahadevStudios.png`} className="size-16" alt="Mahadev Studios" />
                </Link>
                <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded={isOpen}>
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <FaTimes className="w-5 h-5" aria-hidden="true" /> : <FaBars className="w-5 h-5" aria-hidden="true" />}
                </button>
                <div className={`${isOpen ? 'block animate-slide-in' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {
                            menu.map((item, i) => {
                                const isActive = pathname === item.link
                                return (
                                    <li key={i}>
                                        <Link href={item.link} className={`block py-2 px-3 ${isActive ? "text-orange-400 border bg-slate-950 " : ""} hover:text-orange-400 text-lg font-bold rounded text-gray-200`}>{item.Label}</Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}