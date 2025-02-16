"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "@/components/serviceCard";
import WhyChooseUs from "@/components/WhyChooseUs";

import OurTopWorks from "@/components/OurTopWorks";
import ContactUs from "@/components/ContactUs";
import OurTeam from "@/components/OurTeam";
import Aboutsection from "@/components/Aboutsection";
import OurTopPerformer from "@/components/OurTopPerformer";
import Event_Concert_Organization from "@/components/Event_Concert_Organization";
export default function Home() {



  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className="w-[100%] ">
      {/* Hero section */}
      <section className="relative h-[60vh] md:h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-center cursor-pointer bg-[url('/7893988.jpg')] p-6" style={{ boxShadow: 'inset 0 -200px 100px -100px black' }}>
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
      <Aboutsection />



      {/* Our services */}

      <div className="bg-[url('/6923253v.jpg')] md:bg-[url('/6923253.jpg')] w-[100%] shadowIn pt-10" >
        <div data-aos="zoom-out-up" data-aos-duration="1000" className="flex justify-center items-center ">
          <h1 className='text-4xl font-bold border md:text-5xl text-neutral-300 my-10 md:mt-0 p-2 md:p-4 bg-black/30 backdrop-blur-md rounded-lg'>
            Our Expertise & Services
          </h1>
        </div>
        <Services />
      </div>

      {/* Our Team */}
      <OurTeam />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* Event_Concert_Organization */}
      <Event_Concert_Organization />

      {/* Our Best Preformer */}
      <OurTopPerformer />

      {/* Our Top Works  */}
      <OurTopWorks />

      {/* contact us */}
      <ContactUs />


    </div>
  );
}
