import { Card, CardContent } from "@/components/ui/card";
import { FaFilm, FaVideo, FaBullhorn, FaGavel, FaBuilding } from "react-icons/fa";
import { MdMovie, MdMusicVideo } from "react-icons/md";

const services = [
    {
        image: "/service/64ec5333.jpg",
        icon: <FaFilm size={32} className="text-yellow-500" />,
        title: "Documentary Films",
        description: "We specialize in high-quality, research-driven documentaries that capture real stories and social transformations with cinematic brilliance.",
    },
    {
        image: "/service/04233fb.jpg",
        icon: <FaVideo size={32} className="text-yellow-500" />,
        title: "Short Films",
        description: "From concept to execution, our short films deliver powerful storytelling, crafted to inspire, inform, and entertain.",
    },
    {
        image: "/service/67e47576.jpg",
        icon: <FaBullhorn size={32} className="text-yellow-500" />,
        title: "Advertisements & Commercials",
        description: "We produce engaging TV and digital ads that captivate audiences and leave a lasting impact on your brand.",
    },
    {
        image: "/service/760aafe2.jpg",
        icon: <FaGavel size={32} className="text-yellow-500" />,
        title: "Government & Public Policy Films",
        description: "With expertise in government welfare initiatives, we create films that drive awareness, participation, and social change.",
    },
    {
        image: "/service/3ba8bb7b.jpg",
        icon: <FaBuilding size={32} className="text-yellow-500" />,
        title: "Corporate & Event Films",
        description: "From corporate promos to event coverage, we ensure every moment is beautifully captured and professionally presented.",
    },
    {
        image: "/service/4079880d.jpg",
        icon: <MdMovie size={32} className="text-yellow-500" />,
        title: "Web Series",
        description: "Crafting immersive and engaging episodic content that captivates audiences with compelling narratives, high production value, and innovative storytelling.",
    },
    {
        image: "/service/6da0ac2e.jpg",
        icon: <MdMusicVideo size={32} className="text-yellow-500" />,
        title: "Music Videos",
        description: "Producing visually stunning and creatively directed music videos that enhance the artistic expression of musicians while resonating with diverse audiences.",
    },
];

export default function Services() {
    return (
        <div className="flex gap-6 justify-center px-10 py-5 flex-wrap">
            {services.map((service, index) => (
                <div data-aos="zoom-out-up" data-aos-duration="1000" key={index} className="">
                    <Card className="bg-transparent bg-cover bg-center w-72 text-white p-2 cursor-pointer rounded-xl border border-gray-700 hover:shadow-2xl  hover:scale-105 transform transition-transform duration-300">
                        <img src={service.image} className="rounded-md w-72 h-48 object-cover" alt="" />
                        <CardContent className="flex m-1 flex-col items-start gap-4 h-[16rem]">
                            <div className="p-3 bg-yellow-900/20 rounded-full">{service.icon}</div>
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                            <p className="text-sm text-gray-300 text-justify text-shadow">{service.description}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}