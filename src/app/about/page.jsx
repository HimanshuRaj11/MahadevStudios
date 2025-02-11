'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function page() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='w-[100%]'>
            <section className="relative w-full h-[55vh] md:h-[70vh] flex items-center justify-center text-center p-6">
                <Image
                    src="/6190833.jpg"
                    alt="Mahadev Studios"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 opacity-100 w-full"
                />
                <div className="w-full h-full z-10 flex justify-center items-center">
                    <h1 className='text-5xl md:text-8xl kanit-extrabold p-10 rounded-lg backdrop-blur-md text-neutral-300 '>ABOUT US</h1>
                </div>

            </section>
            {/*  */}
            <div className="w-full flex flex-col justify-center items-center pt-11 md:flex-row sm:px-3 md:px-11 bg-[url('/dark22.jpg')]">
                <div className=" w-full md:w-[45%] flex justify-center items-center ">
                    <img src="/about.jpg" className='object-cover m-2 w-[90%] md:h-[50vh] rounded-lg' alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="relative z-20 w-full md:w-[50%] p-2 sm:p-6">

                    <div className="cursor-pointer group overflow-hidden shadow-xl shadow-neutral-900 p-5 duration-1000 hover:duration-1000 relative w-full backdrop-blur-md rounded-xl">
                        <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                        <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" ></div>
                        <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                        <div className="group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
                        <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44" ></div>
                        <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"   ></div>
                        <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4" ></div>
                        <div className="w-full h-full sm:p-3  opacity-50 rounded-xl flex-col flex justify-center" >
                            <span className="text-white font-bold text-3xl  italic">About Mahadev Studios</span>
                            <p className="text-white justify-center">
                                Mahadev Studios, founded in 2010 in Shimla, is a premier production house specializing in high-quality documentaries, short films, jingles, advertisements, and more. With over 20 years of experience in the National TV industry, we have built a reputation for excellence, working on projects that highlight government welfare initiatives, societal transformation, and impactful public policies. Our team of 15-20 highly skilled professionals, with vast experience in the National TV industry, are not just seasoned experts but also dedicated storytellers. We ensure every production is crafted with passion and precision, giving life to each project. At Mahadev Studios, our goal is to create visual narratives that deeply resonate with the audience, driving awareness and participation. Choose us for unparalleled creativity, professionalism, and results.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
