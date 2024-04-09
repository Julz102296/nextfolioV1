"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Stack2() {

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);


  return (
    <section ref={container} className="mt-10 mb-10 items-center justify-center">
    <motion.div
        style={{ x: yText }}
        className="text-3xl font-extrabold sm:text-5xl text-slate-700"
    >
        Lets Work Together!
    </motion.div>
    </section>
  )
}
