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
import OurClients from '@/components/OurClients';
export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className="w-[100%] ">
      {/* Hero section */}
      <section className="relative mt-12 sm:mt-0 bg-center bg-cover bg-no-repeat flex items-center justify-center text-center cursor-pointer" style={{ boxShadow: 'inset 0 -200px 100px -100px black' }}>
        <video autoPlay loop muted className="  w-full object-cover shadowIn">
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </section>

      {/* about section */}
      <section className="relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
        <Aboutsection />
      </section>

      {/* Our services */}
      <section className="relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/Gallery/5L4A8168.JPG')" }}>

        <div className="bg-[url('/6923253v.jpg')] md:bg-[url('/6923253.jpg')] w-[100%] shadowIn pt-10" >
          <div data-aos="zoom-out-up" data-aos-duration="1000" className="flex justify-center items-center ">
            <h1 className='text-4xl font-bold border md:text-5xl text-neutral-300 my-10 md:mt-0 p-2 md:p-4 bg-black/30 backdrop-blur-md rounded-lg'>
              Our Expertise & Services
            </h1>
          </div>
          <Services />
        </div>
      </section>

      {/* Our Team */}
      <section className="relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/team-bg.jpg')" }}>
        <OurTeam />
      </section>

      {/* Why Choose Us? */}
      <WhyChooseUs />


      {/* Our Top Works  */}
      <OurTopWorks />

      {/* Our Clients */}
      <section className="relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/Gallery/IMG_7728.JPG')" }}>
        <OurClients />
      </section>

      {/* Event_Concert_Organization */}
      <Event_Concert_Organization />


      {/* Our Best Performer */}
      <section className="relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/performer-bg.jpg')" }}>
        <OurTopPerformer />
      </section>

      {/* contact us */}
      <section className="relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/contact-bg.jpg')" }}>
        <ContactUs />
      </section>

    </div>
  );
}