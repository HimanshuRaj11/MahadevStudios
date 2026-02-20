import MissionSankalp from "@/components/Events/MissionSankalp";
import VoiceOfSimlaStellarShowCase from "@/components/Events/VoiceOfSimalaStellarShowCase";
import VoiceOfSimla2025_dec from "@/components/Events/VoiceOfSimla2025_dec";
import WowHimachal from "@/components/Events/WowHimachal";

export const OurWork = [
    {
        _id: 1,
        thumbnail: "/Gallery/49_087746bd.jpg",
        title: "Voice of Shimla: A Stellar Showcase of Talent",
        description: `Organized by Mahadev Studios during Shimla’s iconic Winter Carnival, Voice of Shimla is a celebrated and highly successful singing reality show.`,
        category: "Event",
        component: <VoiceOfSimlaStellarShowCase />,
    },

    {
        _id: 2,
        thumbnail: "/work2.png",
        title: "Wow Himachal | TALES FROM THE HIMALAYAN GIRLS",
        description: `This video takes viewers on a captivating journey through Shimla and the rich cultural heritage of Himachal Pradesh.`,
        category: "Documentary",
        component: <WowHimachal />
    },
    {
        _id: 3,
        thumbnail: "/work3.png",
        title: "Mission संकल्प by Arushi Thakur | Mahadev Studios | World Environment Day",
        description: `This inspiring video, led by Arushi Thakur, highlights the beauty of Himachal Pradesh’s natural landscapes while emphasizing the urgent need for environmental conservation.`,
        category: "Documentary",
        component: <MissionSankalp />
    },
    {
        _id: 4,
        thumbnail: "/simlathumbnail.jpeg",
        title: " Voice Of Simla - Winter Carnival Talent Competition 2025",
        description: `The Voice of Simla Winter Carnival 2025 is a grand celebration of talent and creativity, showcasing the vibrant spirit of Shimla's cultural scene.`,
        category: "Event",
        component: <VoiceOfSimla2025_dec />
    },

]