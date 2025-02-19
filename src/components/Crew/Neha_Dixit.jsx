import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaMusic, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

const NehaDixitProfile = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 text-white">
            <h1 className="text-3xl font-bold mb-4">Neha Dixit: Rising Singing Sensation</h1>

            <h2 className="text-xl font-semibold mb-2">
                Rising Singing Star | Indian Idol Sensation | Global Performer
            </h2>

            <p className="mb-4">
                Neha Dixit, a celebrated musical prodigy and a household name post her remarkable journey on Indian Idol, has emerged as a phenomenon in the world of music. With her melodious voice and magnetic stage presence, Neha has captured the hearts of millions and carved a unique identity in the industry.
            </p>

            <p className="mb-4">
                After garnering national acclaim on Indian Idol, Neha’s star power skyrocketed, earning her widespread recognition and adoration. Her enthralling performances have graced some of the most prestigious platforms across the globe, showcasing her versatility and passion for music.
            </p>

            <h3 className="text-lg font-semibold mb-2">Notable Achievements & Performances</h3>
            <ul className="list-disc list-inside mb-4">
                <li><strong>International Rampur Lavi Festival</strong>: Mesmerized audiences with her soulful renditions in an international festival.</li>
                <li><strong>International Summer Festival, Shimla</strong>: Delivered an electrifying performance, leaving an indelible mark on the vibrant cultural scene.</li>
                <li><strong>Singing Concert at Gaiety Theatre, Shimla</strong>: A spellbinding musical evening at one of India’s most iconic cultural venues.</li>
                <li><strong>Concert at Rashtrapati Niwas, Mashobra</strong>: A prestigious event that further cemented her status as a sought-after artist.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Digital & Social Media Presence</h3>
            <p className="mb-4">
                Neha’s undeniable talent has translated into an impressive online following, with a social reach exceeding 20 million. Her journey has been amplified by her association with leading entertainment giants such as Sony Entertainment Television & T-Series, where her captivating performances have been featured as reels on their official platforms. These reels have garnered millions of views, reflecting her widespread popularity and the universal appeal of her soulful voice. Her presence on these platforms highlights her growing prominence in the music industry and her ability to connect with a global audience.
            </p>

            <h3 className="text-lg font-semibold mb-2">Why Book Neha Dixit?</h3>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Exceptional Talent</strong>: Neha’s vocal range and emotive style make her a standout performer in any genre.</li>
                <li><strong>Engaging Performer</strong>: Her dynamic stage presence captivates audiences of all demographics.</li>
                <li><strong>Global Recognition</strong>: From national platforms to international festivals, Neha’s performances resonate with music lovers worldwide.</li>
                <li><strong>Proven Success</strong>: With a trail of stellar performances and millions of fans, Neha is a guaranteed crowd-puller.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Book Neha Dixit for Your Event</h3>
            <p className="mb-4">
                Whether it’s a grand concert, a cultural fest, or an exclusive private event, Neha Dixit promises an unforgettable musical experience. Her ability to connect with her audience, combined with her unparalleled talent, ensures every performance is a resounding success.
            </p>



            <div className="max-w-4xl mx-auto p-6 space-y-6">
                <Card className="shadow-lg p-6 rounded-2xl bg-gray-800">
                    <h2 className="text-2xl font-bold text-center text-white">Ms. Neha Dixit - Celebrated Vocalist</h2>
                    <p className="text-gray-200 mt-2 text-center">
                        Recommended by the Hon’ble Chief Minister of Himachal Pradesh for state events, Ms. Dixit boasts a massive fan base exceeding 50 million.
                    </p>
                </Card>

                <Card className="shadow-lg p-6 rounded-2xl bg-gray-800">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <FaMusic className="mr-2 text-indigo-600" /> Notable Performances
                    </h3>
                    <ul className="list-disc list-inside text-gray-200 space-y-2">
                        <li>Rampur Lavi Festival</li>
                        <li>Rashtrapati Niwas, Mashobra</li>
                        <li>Star Night in Nalagarh</li>
                        <li>Shimla Winter Carnival</li>
                        <li>Manali Winter Carnival</li>
                        <li>Gaitey Theatre, Shimla</li>
                        <li>Holi celebrations in Palampur</li>
                    </ul>
                </Card>

                {/* <Card className="shadow-lg p-6 rounded-2xl bg-white">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-green-600" /> Upcoming Performance
                    </h3>
                    <p className="text-gray-700">Ms. Dixit is set to perform at the vibrant <span className="font-bold">Holi celebrations in Palampur</span>, bringing an electrifying energy to the festival.</p>
                </Card> */}

                <Card className="shadow-lg p-6 rounded-2xl bg-gray-800">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <FaRupeeSign className="mr-2 text-yellow-600" /> Performance Fee
                    </h3>
                    <p className="text-gray-200">The standard performance fee is <span className="font-bold">Rs 1,50,000</span>, inclusive of the band.</p>
                    <p className="text-gray-200">The fee is negotiable to suit the event’s requirements. Travel and accommodation expenses will be covered by our company.</p>
                </Card>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Performance of Neha Dixit </h2>
                    <div className="flex flex-col space-y-4">
                        <iframe
                            src="https://www.instagram.com/reel/DFPkeKDpGvP/?igsh=OXVrYWR4eTcwYmV0"
                            width="400"
                            height="480"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                            title="Instagram Reel 1"
                        ></iframe>
                        <iframe
                            src="https://www.instagram.com/reel/DDbHC13v4F6/?igsh=MTl6bXlvcW92dDg2YQ%3D%3D"
                            width="400"
                            height="480"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                            title="Instagram Reel 2"
                        ></iframe>
                        <iframe
                            src="https://www.instagram.com/reel/C99FAO_RlUW/?igsh=cGd6NTJoOHRsZGs1"
                            width="400"
                            height="480"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                            title="Instagram Reel 2"
                        ></iframe>
                        <iframe
                            src="https://www.instagram.com/reel/DE1o0qtx4Wi/?igsh=ejZsZWZ5MGRmMDNo"
                            width="400"
                            height="480"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                            title="Instagram Reel 2"
                        ></iframe>
                    </div>
                </section>
                {/* 
                <div className="text-center">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg shadow-md">
                        Contact for Booking
                    </Button>
                </div> */}
                <p className="font-bold mb-2">For Bookings and Inquiries:</p>
                <ul className="list-none mb-4">
                    <li>📧 Email: <a href="mailto:mahadevproductionsshimla@gmail.com" className="text-blue-500">mahadevproductionsshimla@gmail.com</a></li>
                    <li>📞 Contact: <a href="tel:8894548468" className="text-blue-500">8894548468</a>, <a href="tel:7018313617" className="text-blue-500">7018313617</a></li>
                </ul>

                <p>
                    Let Neha Dixit illuminate your event with her mesmerizing voice and star power.
                </p>
            </div>
        </div>
    );
};

export default NehaDixitProfile;


