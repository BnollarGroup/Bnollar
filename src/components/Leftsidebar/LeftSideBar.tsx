import styles from "./LeftSideBar.module.css";
import nft from "lib/resources/images/icons/nft.svg";
import home from "lib/resources/images/icons/home.svg";
import comunity from "lib/resources/images/icons/comunity.svg";
import settings from "lib/resources/images/icons/settings.svg";
import hashtag from "lib/resources/images/icons/hashtag.svg";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

const LeftSideBar = () => {
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState<string>("");

  const buttons: { text: string; icon: string }[] = [
    {
      text: "Home",
      icon: home,
    },
    {
      text: "Explore",
      icon: hashtag,
    },
    {
      text: "NFT",
      icon: nft,
    },
    { text: "Community", icon: comunity },
    { text: "Settings", icon: settings },
  ];

  return (
    <div className={styles.leftSideBarWrapper}>
      <div className={styles.leftMenu}>
        {buttons.map((button, i) => (
          <button
            className={clsx(
              styles.leftMenuButton,
              activePage === button.text ? styles.leftMenuButtonActive : ""
            )}
            key={i}
            onClick={() => {
              navigate(`/${button.text.toLowerCase()}`);
              setActivePage(button.text);
              console.log(activePage);
            }}
          >
            <img src={button.icon} alt="home" />

            {button.text}
          </button>
        ))}
      </div>

      <div className={styles.info}>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <span>© 2023 Bnollar</span>
      </div>
    </div>
  );
};
export default LeftSideBar;
