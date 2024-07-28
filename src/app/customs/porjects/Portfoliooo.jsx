import styles from './portfoliooo.module.css';
import React, { useRef, useEffect } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

export default function Portfoliooo() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        //documentId: "5b9992b3-f46a-45db-b6bc-420c48e79d34",
        documentId: "f5f35e15-cecc-4592-bbee-b06cbb59067f",
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
