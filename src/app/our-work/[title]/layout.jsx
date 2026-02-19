
export async function generateMetadata({ params }) {

    const { title } = await params;
    const decodedTitle = decodeURIComponent(title);

    return {
        title: `${decodedTitle || "Mahadev Studios"} || Mahadev Studios`,
        description: `Explore ${decodedTitle || "Our Work"}`,
    };
}

export default function ArtistsLayout({ children }) {
    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
}
