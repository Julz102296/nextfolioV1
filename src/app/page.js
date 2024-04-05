"use client"

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from '@studio-freight/lenis';


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
      <div className="h-500">
        <h1>1111</h1>
      </div>
    </main>
  );
}
