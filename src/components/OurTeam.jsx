import React from 'react'

export default function OurTeam() {
    return (
        <div className="w-[100%] flex flex-col items-center justify-center shadowIn py-3 px-6 md:px-16 ">
            <h1 className="text-4xl text-center my-5 text-white font-bold">Our Team</h1>

            <div className="w-full flex flex-col md:flex-row justify-center items-center relative">
                <div className="flex justify-center m-3 items-center bg-cover w-[80%] md:w-[45%] rounded-lg overflow-hidden" data-aos="zoom-out-up" data-aos-duration="1000">
                    <img src="/Gallery/5L4A9185.JPG" className=" size-[15rem] object-cover" alt="" />
                    <img src="/Gallery/15_2178afb2.jpg" className=" size-[15rem] object-cover" alt="" />
                </div>
                <div className="p-5 m-3 rounded-md backdrop-blur-sm cursor-pointer shadow-lg w-[90%] md:w-[40%] text-justify" data-aos="zoom-out-up" data-aos-duration="1000">
                    <p className="inline text-shadow text-white text-lg ">
                        <span className="font-bold text-lg">Our team of 15-20 highly skilled professionals – </span> brings years of experience in the national TV industry, specializing in directing, cinematography, editing, and creative strategy. With a passion for storytelling and a commitment to excellence, we work seamlessly together to craft visually stunning and impactful productions. Our experts collaborate closely, ensuring a perfect blend of technical precision and creative vision, making every project a masterpiece. From concept to final edit, we bring innovation, expertise, and dedication to every frame.
                    </p>
                </div>
            </div>


        </div>
    )
}
