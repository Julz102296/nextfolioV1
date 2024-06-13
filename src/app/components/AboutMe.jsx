"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

export default function AboutMe() {

  const description = useRef(null);
  const isInView = useInView(description)


  const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
  }

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], ["50%", "70%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);

  return (
    <section ref={container}>
      <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <motion.div className="relative h-60 sm:h-80 lg:h-full" style={{scale: imageScale}}>
              <Image
                alt=""
                src="/Images/IMG_2231.JPG"
                width={1200}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover rounded-2xl shadow-4xl"
              />
            </motion.div>
          </div>


          <div className="relative flex items-center">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"
            ></span>

            {/* <div>
              <embed src="/pdf/portfolio_v2.pdf" type="" width={1000} height={1000}/>
            </div> */}

            <div ref={description} className="p-8 sm:p-16 lg:p-24">
              <motion.p className="text-3xl font-extrabold sm:text-5xl text-slate-700" style={{scale: textScale}} variants={slideUp}>
                About Me
              </motion.p>
                {/* <motion.p className="mt-4 text-slate-700">
                I'm Julios Sagadal, a passionate Full Stack Web Developer hailing from Rizal. Graduated from the Polytechnic University of the Philippines in 2020 laid the groundwork for my journey. In 2024, I took a leap into the dynamic world of Full Stack Web Development. Beyond coding, I thrive on creative problem-solving, crafting efficient and innovative web solutions. Let's collaborate and explore the endless possibilities of web development together.
                </motion.p> */}
                <motion.p className="mt-4 text-slate-700 justify-center justify-self-center">
                Hi, I'm Julios Sagadal, a 27-year-old graphic designer and front-end developer. I hold a Bachelor of Science in Information Technology from PUP San Juan. My passion lies in creating stunning logo designs, innovative layout designs, and captivating web designs.
                </motion.p>
                <motion.p className="mt-4 text-slate-700 justify-center justify-self-center">
                With a strong foundation in both graphic design and front-end development, I aspire to merge these skills to craft sleek and visually compelling websites. I believe that great design is not just about aesthetics but also about delivering an engaging user experience.
                </motion.p>
                <motion.p className="mt-4 text-slate-700 justify-center justify-self-center">
                I hope to join a company where I can master my skills, continuously exploring new techniques and trends to enhance my craft. I look forward to the day when I can fully integrate my design and development skills to produce seamless, dynamic digital experiences.
                </motion.p>

                <div href="#contact" className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    className="group relative inline-flex items-center overflow-hidden rounded bg-slate-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-slate-500"
                    href="#contact"
                  >
                    <span className="absolute -start-full transition-all group-hover:start-4">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:ms-4"> Contact </span>
                  </a>

                  <a
                    className="group relative inline-flex items-center overflow-hidden px-8 py-3 text-slate-600 focus:outline-none focus:ring active:text-slate-400"
                    href="/pdf/Julios_Sagadal-CV.pdf"
                    download
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="text-sm mx-5 font-medium transition-all group-hover:me-4"> Download CV
                    {/* <a className="text-sm mx-5 font-medium transition-all group-hover:me-4">
                      Download CV
                    </a> */}
                    </span>
                  </a>
                </div>

                <div className="flex flex-1 items-center justify-center md:justify-center mt-10">
                  <ul className="flex items-center gap-6 text-sm text-slate-700">
                    <li>
                      <a href="https://www.facebook.com/julios.sagadal/"><FaFacebookSquare className="h-6 w-6 text-slate-600"/></a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/julios-sagadal-621038256/"><FaLinkedin className="h-6 w-6 text-slate-600"/></a>
                    </li>
                    <li>
                      <a href="https://github.com/Julz102296"><FaGithubSquare className="h-6 w-6 text-slate-600"/></a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/juliossagadal"><FaBehanceSquare className="h-6 w-6 text-slate-600"/></a>
                    </li>
                  </ul>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
