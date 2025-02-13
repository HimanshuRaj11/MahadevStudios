import { Card, CardContent } from "@/components/ui/card";
import { FaFilm, FaVideo, FaBullhorn, FaGavel, FaBuilding } from "react-icons/fa";

const services = [
    {
        icon: <FaFilm size={32} className="text-yellow-500" />,
        title: "Documentary Films",
        description: "We specialize in high-quality, research-driven documentaries that capture real stories and social transformations with cinematic brilliance.",
    },
    {
        icon: <FaVideo size={32} className="text-yellow-500" />,
        title: "Short Films",
        description: "From concept to execution, our short films deliver powerful storytelling, crafted to inspire, inform, and entertain.",
    },
    {
        icon: <FaBullhorn size={32} className="text-yellow-500" />,
        title: "Advertisements & Commercials",
        description: "We produce engaging TV and digital ads that captivate audiences and leave a lasting impact on your brand.",
    },
    {
        icon: <FaGavel size={32} className="text-yellow-500" />,
        title: "Government & Public Policy Films",
        description: "With expertise in government welfare initiatives, we create films that drive awareness, participation, and social change.",
    },
    {
        icon: <FaBuilding size={32} className="text-yellow-500" />,
        title: "Corporate & Event Films",
        description: "From corporate promos to event coverage, we ensure every moment is beautifully captured and professionally presented.",
    }
];

export default function Services() {
    return (
        <div className="flex gap-6 justify-center px-10 py-5 flex-wrap">
            {services.map((service, index) => (
                <div data-aos="zoom-out-up" data-aos-duration="1000" key={index} className="">
                    <Card className="bg-transparent h-[18rem] backdrop-blur-md max-w-72 text-white p-6 cursor-pointer rounded-xl border border-gray-700 hover:shadow-2xl  hover:scale-105 transform transition-transform duration-300">
                        <CardContent className="flex flex-col items-start gap-4">
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