import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bs1 from "../../../../public/bs1.webp";
import bs2 from "../../../../public/bs2.webp";
import bs3 from "../../../../public/bs3.webp";
import bs4 from "../../../../public/bs4.webp";

export default function Hobbies() {
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
      className="flex flex-col items-center justify-start my-40"
    >
      <h2 className="text-2xl font-semibold uppercase">Hobbies</h2>
      <span className="w-20 my-2 border-t-4 border-green-300"></span>
      <motion.div
        style={{ scale }}
        className="flex flex-col items-center justify-center"
      >
        <p className="w-3/4 text-center md:w-1/2">
          Outside of work I enjoy creating music. I play in a punk rock band
          called Beauty School and also sporadically release some electronic
          music.
        </p>
        <div className="p-4 carousel carousel-center">
          <div className="mx-2 carousel-item">
            <Image
              src={bs1}
              alt="A live picture of Beauty School"
              className="w-80"
            />
          </div>
          <div className="mx-2 carousel-item">
            <Image
              src={bs2}
              alt="A live picture of Beauty School"
              className="w-80"
            />
          </div>
          <div className="mx-2 carousel-item">
            <Image
              src={bs3}
              alt="A live picture of Beauty School"
              className="w-80"
            />
          </div>
          <div className="mx-2 carousel-item">
            <Image
              src={bs4}
              alt="A live picture of Beauty School"
              className="w-80"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
