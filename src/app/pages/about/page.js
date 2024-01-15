import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

export default function About() {
  return (
    <section className="h-screen flex flex-col justify-start items-center">
      <h2 className="font-semibold uppercase text-2xl">About Me</h2>
      <span className="border-t-4 border-green-300 w-40"></span>
    </section>
  );
}
