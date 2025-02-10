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
    <div className="w-[100%]">
      <HomePage />

      <div className="w-full px-3 md:px-11 flex md:flex-row flex-col justify-center items-center bg-gray-800 py-10">
        <div className="md:w-1/2 md:px-0">
          <img src="bg2.jpg" alt="Background Image" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-[48%] w-full md:ml-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Info</h1>
          <p className="text-lg leading-relaxed">
            At Mahadev Studios, we blend creativity with expertise to produce visually stunning and impactful content. Whether it’s a compelling documentary, a powerful advertisement, or a captivating short film, we ensure every project resonates with the audience. With a team of industry professionals and a legacy of excellence, we craft narratives that inform, inspire, and engage.
          </p>
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-center justify-center bg-gray-800">
        <h1 className="text-4xl text-center my-5 text-white font-bold">Our Singers</h1>
        <div className="flex w-full flex-wrap justify-center items-center">
          {
            crew.map((cerw, i) => {
              return (
                <div className="m-5 ">
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
