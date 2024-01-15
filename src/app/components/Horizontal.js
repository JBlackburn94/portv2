"use client";
import Card from "./card";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function HorizontalCarousel() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-95%"]);
  const opacity = useTransform(scrollYProgress, [1, 0.9], [0, 1]);
  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex flex-col items-center overflow-hidden">
        <h2 className="mt-10 text-2xl font-semibold uppercase">Portfolio</h2>
        <span className="w-20 my-2 border-t-4 border-green-300"></span>
        <motion.div style={{ x, opacity }} className="flex gap-4">
          <Card />
        </motion.div>
      </div>
    </section>
  );
}
