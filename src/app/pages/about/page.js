"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const techStack = [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "JavaScript",
    },
    {
      id: 4,
      title: "React",
    },
    {
      id: 5,
      title: "Next.Js",
    },
    {
      id: 6,
      title: "TailwindCSS",
    },
    {
      id: 7,
      title: "GitHub",
    },
    {
      id: 8,
      title: "Framer Motion",
    },
  ];
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  return (
    <motion.section
      id="about"
      ref={targetRef}
      style={{ opacity }}
      className="flex flex-col items-center justify-start mt-10 h-fit"
    >
      <h2 className="text-2xl font-semibold uppercase">About Me</h2>
      <span className="w-20 my-2 border-t-4 border-green-300"></span>
      <a
        href="https://drive.google.com/file/d/1t5rlVoW8OfiKEX2a5xFuUBT8dQhAkD3Y/view?usp=sharing"
        target="_blank"
        className="p-4 mt-5 font-semibold text-black bg-green-300 rounded"
      >
        Download CV
      </a>
      <motion.div
        style={{ scale }}
        className="flex flex-col-reverse items-start justify-between w-3/4 mt-10 md:flex-row"
      >
        <div className="flex flex-col items-center justify-center w-full h-full p-8 mx-0 mt-2 text-black bg-green-300 rounded md:w-1/2 md:mt-0 md:mx-4">
          <h3 className="text-xl font-semibold">Tech Stack</h3>
          <span className="w-20 my-2 border-t-4 border-green-600"></span>
          <ul className="flex flex-wrap justify-center">
            {techStack.map(({ id, title }) => (
              <li className="p-2 m-2 text-white bg-green-600 rounded" key={id}>
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <p className="leading-loose text-center">
            Hello! My name is Jason Blackburn, I am a Full Stack Developer
            comfortable working in all stages of web development. Knowledgeable
            in user interface design and production, testing and debugging,
            database creation and management. I bring forth expertise in design,
            installation and maintenance of web systems. Proficient in an
            assortment of technologies including HTML, CSS, JavaScript, React,
            Next.js, TailwindCSS etc.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
