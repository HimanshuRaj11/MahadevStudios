import React from 'react'
import CrewCard from './CrewCard'
import Link from 'next/link'

export const crew = [
    {
        id: "Neha_Dixit",
        name: "Neha Dixit",
        instagram: "https://www.instagram.com/rhythmsmystic8?igsh=c3VmYzFqbWQxdjZ2",
        youtube: "https://www.youtube.com/@MahadevStudios",
        image: "/neha.jpg",
        cast: "Singer"
    },
    {
        id: "Subhash",
        name: "Subhash Prince",
        instagram: "https://www.instagram.com/_.voice_of_shimla._._/",
        youtube: "https://www.youtube.com/@MahadevStudios",
        image: "/Subhash.jpg",
        cast: "Singer"
    },
    {
        id: "Anjali_Nanak",
        name: "Anjali Nanak",
        instagram: "https://www.instagram.com/_.voice_of_shimla._._/",
        youtube: "https://www.youtube.com/@MahadevStudios",
        image: "/anjali.jpg",
        cast: "Singer"
    },
]

export default function OurTopPerformer() {
    return (
        <div className="relative w-full px-4 sm:px-8 lg:px-16 py-20">

            {/* Heading */}
            <div data-aos="fade-up" data-aos-duration="700" className="text-center mb-14">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Featured Artists</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Our Top <span className="text-orange-400">Singers</span>
                </h2>
                <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                {crew.map((member, i) => (
                    <Link
                        href={{ pathname: `artists/${member.id}`, query: { id: member.id } }}
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={i * 100}
                    >
                        <CrewCard crew={member} />
                    </Link>
                ))}
            </div>
        </div>
    )
}