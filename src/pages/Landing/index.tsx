import React, { FC } from "react";
import style from "./Landing.module.css";
import bnollarLogo from "lib/resources/images/logo/bnollar_logo.svg";
import icon1 from "lib/resources/images/landing/icon1.svg";
import icon2 from "lib/resources/images/landing/icon2.svg";
import icon6 from "lib/resources/images/landing/icon6.svg";
import { Link, useNavigate } from "react-router-dom";
import landingImage from "lib/resources/images/landing/landing-image.jpg";
import clsx from "clsx";

const Landing: FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/connect-wallet");
  };

  return (
    <div className={style.container}>
      <div>
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

      <div className={style.footerContainer}>
        <div className={style.footerIcons}>
          <img src={icon6} alt="First icon" className={style.firstIcon} />
          <img src={icon1} alt="Second icon" className={style.secondIcon} />
          <img src={icon2} alt="Third icon" />
        </div>

        <div>
          <img
            src={landingImage}
            alt="Landing Image"
            className={style.footerImage}
          />
        </div>

        <div className={clsx(style.footerIcons, style.rightSectionOfIcons)}>
          <img
            src={icon6}
            alt="First icon"
            className={style.firstIconOfRightSection}
          />
          <img
            src={icon1}
            alt="Second icon"
            className={style.secondIconOfRightSection}
          />
          <img src={icon2} alt="Third icon" />
        </div>
      </div>
    </div>
  );
};

export default Landing;