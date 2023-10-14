import React from "react";
import styles from "./LeftSideBar.module.css";
import nft from "../../../lib/resources/images/icons/nft.svg";
import home from "../../../lib/resources/images/icons/home.svg";
import comunity from "../../../lib/resources/images/icons/comunity.svg";
import settings from "../../../lib/resources/images/icons/settings.svg";
import hashtag from "../../../lib/resources/images/icons/hashtag.svg";

const LeftSideBar = () => {
  return (
    <div className={styles.leftSideBarWrapper}>
      <div className={styles.leftMenu}>
        <button>
          <img src={home} alt="home" />
          Home
        </button>
        <button>
          <img src={hashtag} alt="Explore" />
          Explore
        </button>
        <button>
          <img src={nft} alt="NFT" />
          NFT
        </button>
        <button>
          <img src={comunity} alt="Community" />
          Community
        </button>
        <button>
          <img src={settings} alt="Settings" />
          Settings
        </button>
      </div>
      <div className={styles.info}>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Help</li>
          <li>Privacy policy</li>
          <li>Terms & conditions</li>
        </ul>
        <span>© 2023 Bnollar</span>
      </div>
    </div>
  );
};
export default LeftSideBar;
