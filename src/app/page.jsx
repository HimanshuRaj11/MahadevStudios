"use client"
import CrewCard from "@/components/CrewCard";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "@/components/serviceCard";
export default function Home() {
  const crew = [
    {
      name: "",
      instagram: "",
      phone: "",
      image: "",
      address: "",
    },
    {
      name: "",
      instagram: "",
      phone: "",
      image: "",
      address: "",
    },
    {
      name: "",
      instagram: "",
      phone: "",
      image: "",
      address: "",
    },
  ]


  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className="w-[100%] ">
      {/* Hero section */}
      <section className="trelative h-[60vh] md:h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-center cursor-pointer bg-[url('/7893988.jpg')] p-6" style={{ boxShadow: 'inset 0 -200px 100px -100px black' }}>
        <img
          src="/MahadevStudios.png"
          alt="Recording Studio"
          className="size-[12rem] lg:size-[20rem] animate-bounce"
          style={{
            animation: 'moveUpDown 3s ease-in-out infinite'
          }}
        />
      </section>

      {/* about section */}
      <div className="w-full px-3 flex flex-col justify-center shadowIn items-center md:px-24 py-10" >
        <div className="">
          <h1 className='text-3xl md:text-5xl kanit-extrabold p-10 text-neutral-300 '>ABOUT US</h1>
        </div>

        {/* --- */}
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="md:w-1/2 md:px-0" data-aos="zoom-out-up" data-aos-duration="1000">
            <img src="/Gallery/IMG_7728.JPG" alt="Background Image" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-[48%] w-full md:ml-8 text-white" data-aos="zoom-out-up" data-aos-duration="1000">
            <h1 className="text-4xl font-bold mb-4 pl-5">Who We Are?</h1>
            <div className="p-5 text-justify">

              <p className="text-lg leading-relaxed inline">
                Founded in 2010 in Shimla, <span className="font-bold text-lg">Mahadev Studios</span> is a renowned film production house known for producing high-quality documentaries, short films, add films,web series,music videos and albums songs ,advertisements, and more.
              </p>
              <br />

              <p className="inline text-justify">
                With <span className="font-bold text-lg">20+ years</span> of experience in the National TV industry, we have established ourselves as storytelling experts, crafting impactful visual content that resonates with audiences.
              </p>

            </div>
          </div>
        </div>

      </div>




      {/* Our services */}

      <div className="bg-[url('/6923253v.jpg')] md:bg-[url('/6923253.jpg')] w-[100%] shadowIn pt-10" >
        <div data-aos="zoom-out-up" data-aos-duration="1000" className="flex justify-center items-center ">
          <h1 className='text-3xl border md:text-5xl text-neutral-300 my-10 md:mt-0 p-2 md:p-4 bg-black/30 backdrop-blur-md rounded-lg'>
            Our Expertise & Services
          </h1>
        </div>
        <Services />
      </div>

      {/* Our Team */}
      <div className="w-[100%] flex flex-col items-center justify-center shadowIn py-3 px-16 ">
        <h1 className="text-4xl text-center my-5 text-white font-bold">Our Team</h1>

        <div className="w-full flex justify-center items-center relative">
          <div className="flex justify-center m-3 items-center bg-cover w-[45%] rounded-lg overflow-hidden" data-aos="zoom-out-up" data-aos-duration="1000">
            <img src="/Gallery/5L4A9185.JPG" className="rounded-lg size-[100%] object-cover" alt="" />
          </div>
          <div className="p-5 m-3 rounded-md backdrop-blur-sm cursor-pointer shadow-lg w-[40%] text-justify" data-aos="zoom-out-up" data-aos-duration="1000">
            <p className="inline text-shadow text-white text-lg ">
              <h1 className="font-bold text-lg">15-20 Highly Skilled Professionals – </h1>With years of experience in the National TV industry, our team consists of directors, cinematographers, editors, and creative strategists dedicated to delivering top-notch productions.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center items-center">
          {
            crew.map((cerw, i) => {
              return (
                <div key={i} className="m-5 " data-aos="zoom-out-up" data-aos-duration="1000">
                  <CrewCard />
                </div>
              )
            })
          }
        </div>
      </div>


    </div>
  );
}
