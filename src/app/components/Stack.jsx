"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Stack() {

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <section ref={container} className="mb-10 items-center justify-center">
    <motion.div
        style={{ x: yText }}
        className="text-3xl font-extrabold sm:text-5xl text-slate-700"
    >
        My Work Experience
    </motion.div>
    </section>
  )
}
