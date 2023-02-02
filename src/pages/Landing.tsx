import React, { FC } from "react";
import styles from "./Landing.module.css";
import bnollarLogo from "../resources/images/logo/bnollar_logo.svg";
import frame from "../resources/images/landing/frame.svg";
import icon1 from "../resources/images/landing/icon1.svg";
import icon2 from "../resources/images/landing/icon2.svg";
import icon6 from "../resources/images/landing/icon6.svg";
const Landing: FC = () => {
  console.log(styles);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={bnollarLogo} alt="bnollar" />
        <button className={styles.getStarted}>
          <p className={styles.getStartedText}>Get started</p>
        </button>
      </div>
      <div className={styles.welcomeWrapper}>
        <div className={styles.welcome}>
          <div className={styles.welcomeHeader}>Welcome to Bnollar</div>
          <div className={styles.welcomeText}>
            Join us on our journey to a more open and decentralized internet.
            Sign up now and experience the future of social media.
          </div>
          <div className={styles.welcomeGetStarted}>
            <button>Get started</button>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.left}>
            <div><img src={icon6}/></div>
            <div><img src={icon1}/></div>
            <div><img src={icon2}/></div>
        </div>
        <div className={styles.center}>
          <img src={frame} />
        </div>
        <div className={styles.right}>
            <div><img src={icon6}/></div>
            <div><img src={icon1}/></div>
            <div><img src={icon2}/></div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
