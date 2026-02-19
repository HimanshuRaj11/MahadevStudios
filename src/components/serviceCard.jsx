import { FaFilm, FaVideo, FaBullhorn, FaGavel, FaBuilding } from "react-icons/fa"
import { MdMovie, MdMusicVideo } from "react-icons/md"

const services = [
    {
        image: "/service/64ec5333.jpg",
        icon: <FaFilm size={20} />,
        title: "Documentary Films",
        description: "Research-driven documentaries that capture real stories and social transformations with cinematic brilliance.",
    },
    {
        image: "/service/04233fb.jpg",
        icon: <FaVideo size={20} />,
        title: "Short Films",
        description: "From concept to execution, our short films deliver powerful storytelling crafted to inspire, inform, and entertain.",
    },
    {
        image: "/service/67e47576.jpg",
        icon: <FaBullhorn size={20} />,
        title: "Advertisements & Commercials",
        description: "Engaging TV and digital ads that captivate audiences and leave a lasting impact on your brand.",
    },
    {
        image: "/service/760aafe2.jpg",
        icon: <FaGavel size={20} />,
        title: "Government & Policy Films",
        description: "Films that drive awareness, participation, and social change around government welfare initiatives.",
    },
    {
        image: "/service/3ba8bb7b.jpg",
        icon: <FaBuilding size={20} />,
        title: "Corporate & Event Films",
        description: "From corporate promos to event coverage, every moment beautifully captured and professionally presented.",
    },
    {
        image: "/service/4079880d.jpg",
        icon: <MdMovie size={20} />,
        title: "Web Series",
        description: "Immersive episodic content with compelling narratives, high production value, and innovative storytelling.",
    },
    {
        image: "/service/6da0ac2e.jpg",
        icon: <MdMusicVideo size={20} />,
        title: "Music Videos",
        description: "Visually stunning, creatively directed music videos that enhance artistic expression and resonate with audiences.",
    },
]

export default function Services() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 sm:px-8 lg:px-12 pb-16 max-w-7xl mx-auto">
            {services.map((service, index) => (
                <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={Math.min(index * 60, 300)}
                    className="group flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden
            cursor-pointer transition-all duration-300
            hover:-translate-y-1 hover:border-orange-400/30 hover:shadow-xl hover:shadow-orange-950/20"
                >
                    {/* Thumbnail */}
                    <div className="relative w-full aspect-video overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3 p-5 flex-1">
                        <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-400/20
              flex items-center justify-center text-orange-400">
                            {service.icon}
                        </div>
                        <h3 className="text-white font-bold text-base leading-snug group-hover:text-orange-100 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}