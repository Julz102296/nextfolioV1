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
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
    >
        My Work Experience
    </motion.div>
    </section>
  )
}
