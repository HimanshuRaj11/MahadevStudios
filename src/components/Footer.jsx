import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (

        <footer className="py-8 px-6 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300">
            <nav className="mb-6">
                <ul className="flex flex-wrap justify-center space-x-8">
                    <li><Link href="#home" className="hover:text-white transition duration-300 ease-in-out">Home</Link></li>
                    <li><Link href="#about" className="hover:text-white transition duration-300 ease-in-out">About</Link></li>
                    <li><Link href="#services" className="hover:text-white transition duration-300 ease-in-out">Services</Link></li>
                    <li><Link href="#contact" className="hover:text-white transition duration-300 ease-in-out">Contact</Link></li>
                    <li><Link href="#events" className="hover:text-white transition duration-300 ease-in-out">Events</Link></li>
                </ul>
            </nav>
            <div className="mb-6 flex-wrap flex justify-center space-x-6">
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition duration-300 ease-in-out">
                    <FaFacebook />
                    <span>Facebook</span>
                </Link>
                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition duration-300 ease-in-out">
                    <FaInstagram />
                    <span>Instagram</span>
                </Link>
                <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition duration-300 ease-in-out">
                    <FaYoutube />
                    <span>YouTube</span>
                </Link>
            </div>
            <p className="text-sm">&copy; 2025 Mahadev Studios. All Rights Reserved.</p>
        </footer>
    );
}