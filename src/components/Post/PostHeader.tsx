import React from "react";
import styles from "./PostHeader.module.css";
import user1 from "../../resources/images/icons/user1.svg";
import { CommnetButton, ShareButton, UpvoteButton } from "../Buttons/Buttons";
const PostHeader = (props: any) => {
  return (
    <div className={styles.header}>
      <div className={styles.userIcon}>
        <img src={user1} />
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.name}>
          <div className={styles.userName}>Chritopher Williams</div>
          <div className={styles.verifieBadge}>ver</div>
          <div className={styles.date}>Dec 14</div>
        </div>
        <div className={styles.description}>
          #Bitcoin seems to be doing exactly what its done for about a year.
          Strong sell-off, consolidate & slow grind up, create a bear flag, RSI
          breaks down its trend line, bear flag breaks down for another strong
          sell-off and the cycle begins again.
        </div>
        <div className={styles.buttons}>
            <UpvoteButton/>
            <CommnetButton/>
            <ShareButton/>
        </div>
      </div>
    </div>
  );
};
export default PostHeader;
