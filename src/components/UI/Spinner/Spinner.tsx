import React from "react";
import styles from "./Spinner.module.scss"

const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};

export default Spinner;
