import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import Image from "next/image";
import hero from "/Users/jasonblackburn/Desktop/Code/portv2/portv2/public/hero.webp";

export default function Hero() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="flex flex-col justify-start items-center h-fit px-4 py-16 text-center"
    >
      <motion.div style={{ scale }} className="flex flex-col items-center">
        <Image
          src={hero}
          alt="An image of Jason Blackburn"
          className="h-1/2 w-auto mb-2 rounded-full"
        />
        <h1 className="text-4xl uppercase font-bold">Jason Blackburn</h1>
        <h2 className="text-semibold text-xl text-green-300">
          Frontend Developer
        </h2>
        <span className="flex">
          <p className="text-lg">📍 London</p>
        </span>
        <a
          href="https://github.com/JBlackburn94?tab=repositories"
          target="_blank"
          className="flex items-center justify-center mt-6 bg-green-300 p-4 text-black rounded"
        >
          <FaGithub size={20} className="mx-2" />
          <p className="">Check out my GitHub projects. </p>
        </a>
      </motion.div>
    </motion.section>
  );
}
