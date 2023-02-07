import React, { FC, useEffect, useState } from "react";
import styles from "./FeedCard.module.css";
import user1 from "../../resources/images/icons/user1.svg";
import verified from "../../resources/images/icons/verified.svg";
import post1 from "../../resources/images/posts/postImg1.svg";
import menuIcon from "../../resources/images/icons/more-horiz.svg";
import share from "../../resources/images/icons/share.svg";
import upvote from "../../resources/images/icons/upvote.svg";
import chat from "../../resources/images/icons/chat.svg";
const FeedCard = () => {
  const [showMenuDropDown, setShowMenuDropDown] = useState(false);
  const handleMenuClick = ()=>{
    setShowMenuDropDown(prevState => !prevState)
  }
  return (
    <div className={styles.feed_card_wrapper}>
      <div className={styles.feedCardWrapper}>
        <div className={styles.feedCard_user}>
          <img src={user1} />
        </div>
        <div className={styles.feedCard}>
          <div className={styles.feedCard_header}>
            <div className={styles.feedCard_header_name}>
              Christopher Williams
            </div>
            <div className={styles.feedCard_header_img}>
              <img src={verified} />
            </div>
            <div className={styles.feedCard_header_date}>Dec 14</div>
            <div className={styles.feedCard_header_menu}>
              <div className={styles.menuItem} onClick={handleMenuClick}>
                <img src={menuIcon} />
              </div>
              {showMenuDropDown&&
              <div className={styles.menuDropDown}>
                <ul>
                  <li>Report</li>
                  <li>Copy link</li>
                  <li>Add to favourites</li>
                </ul>
              </div>
              }
            </div>
          </div>
          <div className={styles.feedCard_description}>
            <span>#Bitcoin</span> seems to be doing exactly what its done for
            about a year. Strong sell-off, consolidate & slow grind up, create a
            bear flag, RSI breaks down its trend line, bear flag breaks down for
            another strong sell-off and the cycle begins again.
          </div>
          <div className={styles.feedCard_image}>
            <img src={post1} />
          </div>
          <div className={styles.feedCard_buttons}>
            <button>
              <img src={upvote} alt="vote" />
              Upvote
            </button>
            <button>
              <img src={chat} alt="comment" />
              Comment
            </button>
            <button>
              <img src={share} alt="share" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
