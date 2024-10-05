"use client";
import helixImage from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="bg-black text-white text-center py-[72px] sm:py-24">
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            alt="Helix Image"
            className="md:inline hidden absolute top-6 left-[calc(100%+36px)] max-w-xs" // Adjust max width
            priority // Load this image first for better performance
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={emojiStar}
            alt="Emoji Star"
            className="md:inline hidden absolute -top-[120px] right-[calc(100%+24px)] max-w-xs" // Adjust max width
            priority // Load this image first for better performance
          />
        </motion.div>
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">Get Instant Access</h2>
        <p className="mt-5 text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address" // Accessibility improvement
            className="h-12 bg-white/20 sm:flex-1 rounded-lg px-5 font-medium placeholder:text-[#9CA3Af]"
          />
          <button className="bg-white text-black px-2 rounded-lg">Get Access</button>
        </form>
      </div>
    </div>
  );
};
