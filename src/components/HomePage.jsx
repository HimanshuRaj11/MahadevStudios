"use client"
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <section className="top-10 md:top-2 relative h-[70vh] md:h-screen bg-contain bg-no-repeat flex items-center justify-center text-center cursor-pointer bg-[url('/homebg2.jpg')] md:bg-[url('/homebg1.jpg')] p-6 mb-4">
            <img
                src="/MahadevStudios.png"
                alt="Recording Studio"
                className="size-[10rem] absolute left-5 md:left-20 top-[30vh] md:top-5  lg:size-[25rem] "
            />
            <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-6xl absolute right-3 top-20 md:top-[30vh] permanent-marker-regular font-semibold text-white w-[80%] md:w-[50%] p-5'>Crafting Impactful Visual Stories Since 2010</h1>


        </section>


    );
};

export default HomePage;