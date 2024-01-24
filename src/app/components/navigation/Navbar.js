"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "-150%", opacity: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();
  const links = [
    {
      id: 1,
      title: "Home",
      link: "#hero",
    },
    {
      id: 2,
      title: "About",
      link: "#about",
    },
    {
      id: 3,
      title: "Portfolio",
      link: "#portfolio",
    },
    {
      id: 4,
      title: "Hobbies",
      link: "#hobbies",
    },
    {
      id: 5,
      title: "Contact",
      link: "#contact",
    },
  ];
  return (
    <nav className="fixed z-20 flex items-start justify-start w-full">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95] }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-20 p-3"
      >
        {isOpen ? <FaTimes size={40} /> : <FaBars size={40} />}
      </motion.div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="absolute z-10 w-full h-screen bg-black md:w-1/4"
      >
        <ul className="flex flex-col items-center justify-center p-10 md:justify-start md:items-start">
          {links.map(({ id, title, link }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.2 }}
              transition={{ ease: [0.6, 0.01, 0.05, 0.95] }}
              className="mx-1 my-10 select-none md:mx-10"
            >
              <a href={link} className="text-lg font-semibold md:text-xl">
                {title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
