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

            <div className="octa bg-gradient-to-b from-yellow-800 to-yellow-600 p-2 flex justify-center items-center absolute left-5 md:left-20 top-[30vh] md:top-16 size-[10rem] md:size-[12rem] lg:size-[18rem] ">
                <img
                    src="/MahadevStudios.png"
                    alt="Recording Studio"
                    className="size-[80%] "
                />
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl leading-14 absolute right-3 top-[8vh] md:top-[30vh] permanent-marker-regular font-semibold text-white w-[70%] lg:w-[40%] text-left p-5'>Crafting Impactful Visual Stories Since 2010</h1>


        </section>


    );
};

export default HomePage;