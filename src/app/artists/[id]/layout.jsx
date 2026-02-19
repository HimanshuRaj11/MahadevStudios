import { crew } from "@/components/OurTopPerformer";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const artist = crew.find(item => item.id === id)
    console.log(params);

    return {
        title: `${artist?.name || "Artist"} | Mahadev Studios`,
        description: `Explore ${artist?.name || "Artist"} artists at Mahadev Studios`,
    };
}

export default function ArtistsLayout({ children }) {
    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
}
