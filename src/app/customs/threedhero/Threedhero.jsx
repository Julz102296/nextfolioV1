import Text3d from '../../components/Text3d';
import styles from './Home.module.css';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Threedhero() {

  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }


  return (
    <div>
      <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.container}>
        <div ref={plane} className={styles.body}>
          <Text3d primary={"Hello"} secondary={"Good Day"}/>
          <Text3d primary={"I'm"} secondary={"27"}/>
          <Text3d primary={"Julios Sagadal"} secondary={"From Rizal"}/>

          <div
          className={styles.svgContainer}
          animate={{
            y: [0, 15, 0], // Y-axis translation animation
          }}
          transition={{
            duration: 1, // Duration of the animation
            repeat: Infinity, // Repeat the animation indefinitely
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M11.0303 6.53033C11.3232 6.23744 11.3232 5.76256 11.0303 5.46967C10.7374 5.17678 10.2626 5.17678 9.96967 5.46967L6.75 8.68934L6.75 0.75C6.75 0.335786 6.41421 -2.11379e-07 6 -2.29485e-07C5.58579 -2.47591e-07 5.25 0.335786 5.25 0.75L5.25 8.68934L2.03033 5.46967C1.73744 5.17678 1.26256 5.17678 0.96967 5.46967C0.676777 5.76256 0.676777 6.23744 0.96967 6.53033L5.46967 11.0303C5.76256 11.3232 6.23744 11.3232 6.53033 11.0303L11.0303 6.53033Z"/>
          </svg>
        </div>
        </div>
      </div>
    </div>
  )
}
