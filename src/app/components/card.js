import Image from "next/image";
import bsHome from "../../../public/bsHome.webp";
import weatherHome from "../../../public/weatherHome.webp";

export default function Card() {
  const cardInfo = [
    {
      id: 1,
      img: bsHome,
      alt: "An image of the Beauty School Homepage",
      title: "Beauty School",
      desc: "This project was a redesign of the existing Beauty School website.",
      tech: "Built with: React, Next.Js, TailwindCSS",
      live: "https://beauty-school-kltc.vercel.app/",
      repo: "https://github.com/JBlackburn94/beauty-school",
    },
    {
      id: 2,
      img: weatherHome,
      alt: "An image of the Weather App Homepage",
      title: "Weather App",
      desc: "This project was built using the OpenWeather API to pull information on current weather.",
      tech: "Built with: HMTL, CSS, JavaScript",
      live: "https://jblackburn94.github.io/weatherApp/",
      repo: "https://github.com/JBlackburn94/weatherApp",
    },
  ];
  return (
    <div className="flex justify-center mt-10 px-2">
      {cardInfo.map(({ id, img, alt, title, desc, tech, live, repo }) => (
        <div
          key={id}
          className="flex flex-col bg-green-300 w-[88vw] md:w-[50vw] p-4 rounded mx-2 text-black"
        >
          <Image src={img} alt={alt} />
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>{desc}</p>
          <p>{tech}</p>
          <a href={live} target="_blank">
            Live
          </a>
          <a href={repo} target="_blank">
            Repo
          </a>
        </div>
      ))}

      {/* <Image
          src={bsHome}
          alt="An image of the home screen from the Beauty School website"
          className="w-full"
        />
        <h2 className="text-2xl font-semibold">Beauty School</h2>
        <p>
          This project was a redesign of the existing Beauty School website.
        </p>
        <p>Built with: React, Next.Js, TailwindCSS</p>
        <a>Repo link goes here</a>
        <a>Live link goes here</a> */}
    </div>
  );
}
