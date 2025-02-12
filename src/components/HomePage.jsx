"use client"
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <section className="trelative h-[60vh] md:h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-center cursor-pointer bg-[url('/78939881.jpg')] p-6">

            <img
                src="/MahadevStudios.png"
                alt="Recording Studio"
                className="size-[10rem] lg:size-[20rem] animate-bounce"
                style={{
                    animation: 'moveUpDown 3s ease-in-out infinite'
                }}
            />

        </section>


    );
};

export default HomePage;