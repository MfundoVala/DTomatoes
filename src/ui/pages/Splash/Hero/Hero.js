import React from "react";
import styles from "./Hero.module.scss";
import gotImg from "../../../../assets/got.png";
import avengersImg from "../../../../assets/avengers.png";

export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.heroSection}>
        <img
          src={avengersImg}
          alt="avengersImage"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroSection}>
        <img src={gotImg} alt="gotImage" className={styles.heroImage} />
      </div>
    </div>
  );
};
