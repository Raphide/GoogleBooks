import React from "react";
import styles from "./Loader.module.scss";
import Loading from "../../assets/Loading.svg";

const Loader = () => {
  return (
    <div className={styles.loadbox}>
      <img src={Loading} alt="Loader" className={styles.loader} />
    </div>
  );
};

export default Loader;
