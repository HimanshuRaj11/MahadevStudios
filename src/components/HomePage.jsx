"use client"
import { useEffect } from 'react';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Homecard from './Homecard';

const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center cursor-pointer p-6">
                <div className="w-full h-full absolute flex justify-center items-center">
                    <img
                        src="/ms.jpg"
                        alt="Recording Studio"
                        className="size-[35rem] md:size-[40rem] inset-0 z-20 opacity-100 animate-bounce"
                        style={{
                            animation: 'moveUpDown 3s ease-in-out infinite'
                        }}
                    />
                </div>


                <Image
                    src="/7893988.jpg"
                    alt="Recording Studio"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-10 opacity-100"
                />

                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className="absolute left-5 bottom-16 z-20 max-w-2xl">

                    <Homecard />
                </div>
            </section>

        </div>
    );
};

export default HomePage;