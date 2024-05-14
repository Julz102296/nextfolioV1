import styles from './portfoliooo.module.css';
import React, { useRef, useEffect } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

export default function Portfoliooo() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "de53704d-8ff7-4429-968a-eee5ee0ce560",
        darkMode: false
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.viewer} ref={viewer}></div>
    </div>
  );
}
