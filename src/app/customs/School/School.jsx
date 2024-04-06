import React from 'react'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';


const School = ({i, title, description, fontFamily, to, from, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start end']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1])
  const scale = useTransform(progress, range, [1, targetScale]);


  return (

    <motion.div 
    style={{backgroundColor: color, scale, top:`calc( -100vh + ${i * -30}px)`}}
    className="flex mx-10 hover:shadow-xl sticky">
      <div className="p-5 [writing-mode:_vertical-lr] relative top-0 h-50 my-10">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-slate-900"
        >
          <span>{from}</span>
          <span className="w-px flex-1 bg-slate-900/10"></span>
          <span>{to}</span>
        </time>
      </div>

      <div 
        className="flex flex-1 flex-col justify-between"
        ref={container}
      >
        <div className="p-4 sm:border-l-transparent sm:p-6">
          <p className="mt-4 sm:text-xl/relaxed p-5">
            {description}
          </p>
        </div>

      </div>
    </motion.div>

  )
}

export default School
