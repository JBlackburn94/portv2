import Image from "next/image";
import bsHome from "../../../public/bsHome.webp";

export default function Card() {
  const cardInfo = [
    {
      id: 1,
      img: bsHome,
      alt: "An image of the Beauty School Homepage",
      title: "Beauty School",
      desc: "This project was a redesign of the existing Beauty School website.",
      tech: "Built with: React, Next.Js, TailwindCSS",
      live: "#",
      repo: "#",
    },
  ];
  return (
    <div className="flex justify-center mt-10">
      {cardInfo.map(({ id, img, alt, title, desc, tech, live, repo }) => (
        <div
          key={id}
          className="flex flex-col bg-green-300 w-[50vw] p-4 rounded mx-2 text-black"
        >
          <Image src={img} alt={alt} />
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>{desc}</p>
          <p>{tech}</p>
          <a href={live}>Live</a>
          <a href={repo}>Repo</a>
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
