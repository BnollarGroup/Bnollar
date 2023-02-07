import React, { FC, useEffect, useState } from "react";
import styles from "./RightSideBar.module.css";
import user1 from "../../../resources/images/icons/user1.svg";
import nft1 from "../../../resources/images/icons/nft1.svg";
import active from "../../../resources/images/icons/active.svg";
const RighSideBar = () => {
  return (
    <div className={styles.rightSideBarWrapper}>
      <div className={styles.contactsWrapper}>
        <h2>Contacts</h2>
        <ul>
          <li>
            <img src={user1} alt="user icon" />{" "}
            <img src={active} className={styles.activeUser} /> <span>Calvin May</span>
          </li>
          <li>
            <img src={user1} alt="user icon" /> <span>Pedro Clark</span>
          </li>
          <li>
            <img src={user1} alt="user icon" /> <span>Tina Davidson</span>
          </li>
          <li>
            <img src={user1} alt="user icon" /> <span>Chritopher Williams</span>
          </li>
          <li>
            <img src={user1} alt="user icon" /> <span>Velma Crawford</span>
          </li>
        </ul>
      </div>
      <div className={styles.contactsWrapper}>
        <h2>Top NFTs</h2>
        <ul>
          <li>
            <img src={nft1} alt="user icon" /> <span>Wolf Game</span>
          </li>
          <li>
            <img src={nft1} alt="user icon" /> <span>Gods undchained</span>
          </li>
          <li>
            <img src={nft1} alt="user icon" /> <span>Otherdeed</span>
          </li>
          <li>
            <img src={nft1} alt="user icon" /> <span>MutantApeYachtClub Williams</span>
          </li>
          <li>
            <img src={nft1} alt="user icon" /> <span>Bored Ape Yacht Club</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RighSideBar;
