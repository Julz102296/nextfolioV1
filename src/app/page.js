"use client"

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from '@studio-freight/lenis';

import Threedhero from "./customs/threedhero/Threedhero";
import AboutMe from "./components/AboutMe";
import Stack from "./components/Stack";
import Work from "./components/Work";
import Rotating from "./components/Rotating";
import Portfolio from "./components/Portfolio";
import Extra from "./components/Extra";
import Contact from "./components/Contact";
import Stack2 from "./components/Stack2";
import Portfoliooo from "./customs/porjects/Portfoliooo";
import BackToTopButton from "./customs/backtotop/BackToTopButton";

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
        {/* <BackToTopButton className="overflow-hidden"/> */}
        <Threedhero />
        <AboutMe />
        {/* <Parallax /> */}
        <Stack />
        <Work />
        <Rotating scrollYProgress={scrollYProgress} />
        <Portfoliooo />
        {/* <Portfolio /> */}
        {/* <Extra /> */}
        <Stack2 />
        <Contact />
      </div>
    </main>
  );
}
