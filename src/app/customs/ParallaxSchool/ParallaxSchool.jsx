'use client';

import { projects } from './data';
import School from '../School/School';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSchool() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  return (
    <div ref={container} className="">
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.06);
          return <School key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .250, 1]} targetScale={targetScale}/>
        })
      }
    </div>
  )
}
