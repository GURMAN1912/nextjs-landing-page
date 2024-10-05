"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import EcoSystemIcon from "../assets/icons/ecosystem.svg"; // Ensure this import works or inline the SVG

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;

      const rect = border.current?.getBoundingClientRect();
      offsetX.set(e.clientX - rect.x);
      offsetY.set(e.clientY - rect.y);
    };

    // Only listen to mousemove on the border div itself
    const borderElement = border.current;
    if (borderElement) {
      borderElement.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (borderElement) {
        borderElement.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, [offsetX, offsetY]);

  return (
    <div
      key={title}
      className="relative border border-white/10 px-5 py-10 text-center rounded-xl sm:flex-1"
    >
      <motion.div
        className="absolute inset-0 border-4 border-purple-500 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcoSystemIcon /> {/* Make sure this import works or inline the SVG */}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
