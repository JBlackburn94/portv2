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
      ref={targetRef}
      style={{ opacity }}
      className="h-screen flex flex-col justify-start items-center my-10"
    >
      <h2 className="font-semibold uppercase text-2xl">About Me</h2>
      <span className="border-t-4 border-green-300 w-20 my-2"></span>
      <div className="flex md:flex-row flex-col-reverse mt-10 w-3/4 justify-between items-start">
        <motion.div
          style={{ opacity, scale }}
          className="bg-green-300 rounded p-8 h-full text-black w-full md:w-1/2 mx-0 mt-2 md:mt-0 md:mx-4 flex flex-col justify-center items-center"
        >
          <h3 className="font-semibold text-xl">Tech Stack</h3>
          <span className="border-t-4 border-green-600 w-20 my-2"></span>
          <ul className="flex flex-wrap justify-center">
            {techStack.map(({ id, title }) => (
              <li className="m-2 p-2 rounded text-white bg-green-600" key={id}>
                {title}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          style={{ opacity, scale }}
          className="w-full text-center md:w-1/2"
        >
          <p className="leading-loose">
            Hello! My name is Jason Blackburn, I am a Frontend Developer
            comfortable working in all stages of web development. Knowledgeable
            in user interface design and production, testing and debugging,
            database creation and management. I bring forth expertise in design,
            installation and maintenance of web systems. Proficient in an
            assortment of technologies including HTML, CSS, JavaScript, React,
            Next.js, TailwindCSS etc.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
