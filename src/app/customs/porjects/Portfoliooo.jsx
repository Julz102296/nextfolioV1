import React from 'react';
import styles from './portfoliooo.module.css';

function Portfoliooo() {
  return (
    <div className={`${styles.container} flex justify-center items-center h-screen overflow-hidden`}>
      <iframe src="/pdf/portfolio-2.pdf" className={`${styles.pdfEmbed} ${styles.mobileResponsive}`} title="Embedded PDF"></iframe>
    </div>
  );
}

export default Portfoliooo;
