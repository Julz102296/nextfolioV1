"use client"

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from '@studio-freight/lenis';

import Threedhero from "./customs/threedhero/Threedhero";
import AboutMe from "./components/AboutMe";
import ParallaxSchool from "./customs/ParallaxSchool/ParallaxSchool";

export default function Home() {

  const {scrollYProgress} = useScroll();

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <div className="overflow-hidden">
        <Threedhero />
        <AboutMe className="overflow-hidden" />
        <ParallaxSchool />
      </div>
    </main>
  );
}
