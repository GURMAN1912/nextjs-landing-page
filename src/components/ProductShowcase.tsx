"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImageContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImageContainer,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#441f7b] py-[72px] sm:py-24 overflow-hidden">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your success.
          </p>
        </div>
        <motion.div
          className="flex justify-center items-center mt-14"
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
          ref={appImageContainer}
        >
          <div className="max-w-full w-full sm:w-auto mx-auto px-4"> {/* Restricting the width */}
            <Image
              src={appScreen}
              alt="app screen"
              className="max-w-full h-auto" // Ensuring image is responsive
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
