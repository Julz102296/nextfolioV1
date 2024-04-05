import Text3d from '../../components/Text3d';
import styles from './Home.module.css';
import { useRef } from 'react';

export default function threedhero() {

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
        </div>
      </div>
    </div>
  )
}
