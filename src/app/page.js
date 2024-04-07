"use client"

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from '@studio-freight/lenis';

import Threedhero from "./customs/threedhero/Threedhero";
import AboutMe from "./components/AboutMe";
import Parallax from "./components/Parallax";
import Stack from "./components/Stack";
import Work from "./components/Work";

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
        <AboutMe />
        {/* <Parallax /> */}
        <Stack />
        <Work />
      </div>
    </main>
  );
}
