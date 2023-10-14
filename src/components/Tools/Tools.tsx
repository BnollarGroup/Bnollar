import React from "react";
import styles from "./Tools.module.css";
import verified from "lib/resources/images/icons/verified.svg";

export const PostHeader = () => {
  return (
    <>
      <div className={styles.feedCard_header_name}>Christopher Williams</div>
      <div className={styles.feedCard_header_img}>
        <img src={verified} />
      </div>
      <div className={styles.feedCard_header_date}>Dec 14</div>
    </>
  );
};
