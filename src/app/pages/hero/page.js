"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import Image from "next/image";
import hero from "../../../../public/hero.webp";

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
      id="hero"
      style={{ opacity }}
      ref={targetRef}
      className="flex flex-col items-center justify-start h-screen px-4 py-16 text-center select-none"
    >
      <motion.div style={{ scale }} className="flex flex-col items-center">
        <Image
          src={hero}
          alt="An image of Jason Blackburn"
          className="w-auto mb-2 rounded-full h-1/2"
        />
        <h1 className="text-4xl font-bold uppercase">Jason Blackburn</h1>
        <h2 className="text-xl text-green-300 text-semibold">
          Full Stack Developer
        </h2>
        <span className="flex">
          <p className="text-lg">📍 London</p>
        </span>
        <a
          href="https://github.com/JBlackburn94"
          target="_blank"
          className="flex items-center justify-center p-4 mt-6 text-black bg-green-300 rounded"
        >
          <FaGithub size={20} className="mx-2" />
          <p className="">Check out my GitHub projects. </p>
        </a>
      </motion.div>
    </motion.section>
  );
}
