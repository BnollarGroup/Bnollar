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
            <img src={active} className={styles.activeUser} /> Calvin May
          </li>
          <li>
            <img src={user1} alt="user icon" /> Pedro Clark
          </li>
          <li>
            <img src={user1} alt="user icon" /> Tina Davidson
          </li>
          <li>
            <img src={user1} alt="user icon" /> Chritopher Williams
          </li>
          <li>
            <img src={user1} alt="user icon" /> Velma Crawford
          </li>
        </ul>
      </div>
      <div className={styles.contactsWrapper}>
        <h2>Top NFTs</h2>
        <ul>
          <li>
            <img src={nft1} alt="user icon" /> Wolf Game
          </li>
          <li>
            <img src={nft1} alt="user icon" /> Gods undchained
          </li>
          <li>
            <img src={nft1} alt="user icon" /> Otherdeed
          </li>
          <li>
            <img src={nft1} alt="user icon" /> MutantApeYachtClub Williams
          </li>
          <li>
            <img src={nft1} alt="user icon" /> Bored Ape Yacht Club
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RighSideBar;
