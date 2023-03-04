import React, { FC } from 'react'
import styles from './Landing.module.css'
import bnollarLogo from '../../resources/images/logo/bnollar_logo.svg'
import frame from '../../resources/images/landing/frame.svg'
import icon1 from '../../resources/images/landing/icon1.svg'
import icon2 from '../../resources/images/landing/icon2.svg'
import icon6 from '../../resources/images/landing/icon6.svg'
import { Link } from 'react-router-dom'
const Landing: FC = () => {
  console.log(styles)
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
          <Link to={'/connect-wallet'}>
            <button className={styles.welcomeGetStarted}>Get started</button>
          </Link>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.left}>
          <img className={styles.landingIcon} src={icon6} alt="nft" />
          <img className={styles.landingIcon} src={icon1} alt="nft" />
          <img className={styles.landingIcon} src={icon2} alt="nft" />
        </div>
        <div className={styles.center}>
          <img src={frame} />
        </div>
        <div className={styles.right}>
          <img className={styles.landingIcon} src={icon6} alt="nft" />
          <img className={styles.landingIcon} src={icon1} alt="nft" />
          <img className={styles.landingIcon} src={icon2} alt="nft" />
        </div>
      </div>
    </div>
  )
}
export default Landing
