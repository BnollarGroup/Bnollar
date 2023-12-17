import React, { FC } from "react";
import style from "./Landing.module.css";
import bnollarLogo from "lib/resources/images/logo/bnollar_logo.svg";
import icon1 from "lib/resources/images/landing/icon1.svg";
import icon2 from "lib/resources/images/landing/icon2.svg";
import icon6 from "lib/resources/images/landing/icon6.svg";
import { Link, useNavigate } from "react-router-dom";
import landingImage from "lib/resources/images/landing/landing-image.png";
import landingResponsiveImg from "lib/resources/images/landing/landingResponsiveImg.png";
import clsx from "clsx";

const Landing: FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/connect-wallet");
  };

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <div className={style.header}>
          <img src={bnollarLogo} alt="Bnollar Icon" />

          <button className={style.getStarted} onClick={handleStart}>
            Get started
          </button>
        </div>

        <div className={style.hero}>
          <h1>Welcome to Bnollar</h1>

          <p className={style.heroParagraph}>
            Join us on our journey to a more open and decentralized internet.
            Sign up now and experience the future of social media.
          </p>

          <button className={style.heroButton} onClick={handleStart}>
            Get started
          </button>
        </div>
      </div>

      <div className={style.mainContainer}>
        <div className={style.leftSectionImg}>
          <img src={icon6} alt="pink icon" className={style.leftPinkIcon} />
          <img src={icon1} alt="green icon" className={style.leftGreenIcon} />
          <img src={icon2} alt="blue icon"  className={style.leftBlueIcon}/>
        </div>

        <div className={style.mainPhoto}>
          <img src={landingImage} alt="Landing Image" className={style.footerImage}/>
          <img
            src={landingResponsiveImg}
            alt="landing responsive image"
            className={style.footerResponsiveImage}
          />
        </div>

        <div className={style.rightSectionImgs}>
          <img src={icon6} alt="pink icon" className={style.rightPinkIcon} />
          <img src={icon1} alt="green icon" className={style.rightGreenIcon} />
          <img src={icon2} alt="blue icon"  className={style.rightBlueIcon}/>
        </div>
      </div>




     

    </div>
  );
};

export default Landing;