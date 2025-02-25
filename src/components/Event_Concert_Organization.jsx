import React from 'react';

export default function Event_Concert_Organization() {
    const listItems = [
        {
            name: "Concept Development",
            description: "We shape ideas into unforgettable experiences"
        },
        {
            name: "Venue Selection & Setup",
            description: "Finding the perfect location and designing immersive setups"
        },
        {
            name: "Artist & Talent Management",
            description: "Booking top performers, speakers, and entertainment"
        },

        {
            name: "Marketing & Promotion",
            description: "Maximizing audience reach with strategic promotions"
        },
        {
            name: "On-Ground Coordination",
            description: "Managing logistics, security, and guest experience"
        }
    ];
    return (
        <div className="flex flex-col items-center p-6 shadowIn text-white ">
            <h1 className="text-4xl font-bold text-center mb-6">
                Event & Concert Organization
            </h1>
            <div className="flex flex-col w-full justify-center items-center md:flex-row" data-aos="zoom-out-up" data-aos-duration="1000">
                <dive className="w-[90%] p-2 md:p-10 md:w-[40%] h-full text-xl bg-center text-justify m-5 mb-6 ">
                    <p className="backdrop-blur-sm md:p-5 rounded-md" >
                        At Mahadev Studios, we bring your vision to life with world-class event and concert management. Whether it's a grand music concert, corporate event, cultural fest, or a private gathering, our experienced team ensures a seamless experience from planning to execution.
                    </p>
                </dive>
                <div className=' w-[90%] md:w-[40%] m-2 rounded-md' data-aos="zoom-out-up" data-aos-duration="1000">
                    <img src="/Gallery/326a831f.jpg" className='rounded-md object-cover' alt="" />
                </div>
            </div>
            <section className="relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/Gallery/326a831f.jpg')" }}>

                <div className="flex flex-col md:flex-row  my-4 justify-around w-full">

                    <div className="flex flex-col items-center mb-4 md:mb-0">
                        <h2 data-aos="zoom-out-up" data-aos-duration="1000" className="text-3xl font-semibold mb-2 ">What We Offer</h2>
                        <div className="flex flex-col md:flex-row">
                            <div className="list-disc list-inside text-xl flex justify-center items-center flex-wrap">

                                {
                                    listItems.map((item, i) => {
                                        return (
                                            <div data-aos="zoom-out-up" data-aos-duration="1000" key={i} className="flex flex-col backdrop-blur-md p-5 m-3 h-32 cursor-pointer border rounded-md w-[90%] md:w-[30rem]  hover:scale-105 transform transition-transform duration-300">
                                                <span className='font-semibold'>{item.name} –</span>
                                                <span className='text-sm'>{item.description}</span>
                                            </div>

                                        )
                                    })
                                }


                            </div>

                            {/* <div className="">
                            <img src="/Gallery/2c4e41ac.jpg" alt="" />
                        </div> */}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}