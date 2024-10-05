"use client";
import { use, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 2.0, // Increase duration to make the scroll slower
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      // You can also try other easing functions like `t => t * t` for a slower feel.
    });
  
    const raf = (time:any) => {
      lenis.raf(time); // Call Lenis on each animation frame
      requestAnimationFrame(raf); // Request the next frame
    };
  
    requestAnimationFrame(raf); // Start the animation frame loop
  
    return () => {
      // Cleanup Lenis on component unmount
      lenis.destroy();
    };
  }, []); // Empty dependency array to run on component mount only
  
  
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
