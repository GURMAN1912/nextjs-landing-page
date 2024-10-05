"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container ">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&#39;s most innovative teams {/* Escaping apostrophe */}
        </h2>
        <div className="flex overflow-hidden mt-9 relative before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            className="flex gap-16 flex-none pr-16"
            initial={{ translateX: "0" }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {images.map(({ src, alt }, index) => (
              <Image key={index} src={src} alt={alt} className="h-8 w-auto flex-none" />
            ))}
            {images.map(({ src, alt }, index) => (
              <Image key={`repeat-${index}`} src={src} alt={alt} className="h-8 w-auto flex-none" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
