import React, { FC } from "react";
import styles from './Landing.module.css'
import bnollarLogo from '../../resources/images/logo/bnollar_logo.svg'
import frame from '../../resources/images/landing/frame.svg'
import icon1 from '../../resources/images/landing/icon1.svg'
import icon2 from '../../resources/images/landing/icon2.svg'
import icon6 from '../../resources/images/landing/icon6.svg'
import { Link } from 'react-router-dom'


const Landing: FC = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={bnollarLogo} alt="bnollar" />

        <Link to={'/connect-wallet'}>
          <button className={styles.getStarted}>Get started</button>
        </Link>
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
            <div className={styles.grid}>
                <div className={styles.icon1}><img src={icon6} alt='nft' /></div>
                <div className={styles.iconhid}><img src={icon1} alt='nft'/></div>
                <div className={styles.iconhid}><img src={icon2} alt='nft'/></div>
                <div className={styles.icon4}><img src={icon6} alt='nft' /></div>
                <div className={styles.icon}><img src={icon1} alt='nft'/></div>
                <div className={styles.iconhid} ><img src={icon2} alt='nft'/></div>
                <div className={styles.iconhid}><img src={icon6} alt='nft' /></div>
                <div className={styles.icon8}><img src={icon1} alt='nft'/></div>
                <div className={styles.icon9}><img src={icon2} alt='nft'/></div>
                <div className={styles.iconhid}><img src={icon2} alt='nft'/></div>
                <div className={styles.iconhid}><img src={icon6} alt='nft' /></div>
                <div><img src={icon2} alt='nft'/></div>

                <div className={styles.home}>
                    <img src={frame} alt='frame' />
                </div>
            </div>
        </div>


    </div>
  );
};

export default Landing;



