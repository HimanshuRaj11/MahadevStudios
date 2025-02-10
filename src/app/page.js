import CrewCard from "@/components/CrewCard";
import HomePage from "@/components/HomePage";

export default function Home() {
  const crew = [
    {
      name: "",
      instagram: "",
      phone: "",
      image: "",
      address: "",
    },
    {
      name: "",
      instagram: "",
      phone: "",
      image: "",
      address: "",
    },
    {
      name: "",
      instagram: "",
      phone: "",
      image: "",
      address: "",
    },
  ]
  return (
    <div className="">
      <HomePage />

      <div className="w-full px-11 flex justify-center items-center bg-gray-800 py-10">
        <div className="w-1/2 max-w-md">
          <img src="bg2.jpg" alt="Background Image" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-1/2 max-w-md ml-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Info</h1>
          <p className="text-lg leading-relaxed">
            At Mahadev Studios, we blend creativity with expertise to produce visually stunning and impactful content. Whether it’s a compelling documentary, a powerful advertisement, or a captivating short film, we ensure every project resonates with the audience. With a team of industry professionals and a legacy of excellence, we craft narratives that inform, inspire, and engage.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center bg-gray-800">
        <h1 className="text-4xl text-center my-5 text-white">Our Singers</h1>
        <div className="flex flex-wrap">
          {
            crew.map((cerw, i) => {
              return (
                <div className="m-5">
                  <CrewCard />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
