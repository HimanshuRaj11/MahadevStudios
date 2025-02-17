import React from 'react'

export default function Aboutsection() {
    return (
        <div className="w-full px-3 flex flex-col justify-center shadowIn items-center md:px-24 py-10" >
            <div className="">
                <h1 className='text-4xl font-bold md:text-5xl p-10 text-neutral-300 '>ABOUT US</h1>
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
                        <p>
                            We made the Movies for, <strong>The Panchayati Raj Department of Himachal Pradesh</strong> ,  It has <strong> proudly won two National Awards </strong> for a film created to highlight the initiatives and contributions of the department.
                        </p>

                    </div>
                </div>
            </div>

        </div>

    )
}
