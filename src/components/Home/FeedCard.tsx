import React, { FC, useEffect, useState } from "react";
import styles from "./FeedCard.module.css";
import user1 from "../../resources/images/icons/user1.svg";
import verified from "../../resources/images/icons/verified.svg";
import post1 from "../../resources/images/posts/postImg1.svg";
import menuIcon from "../../resources/images/icons/more-horiz.svg";
import share from "../../resources/images/icons/share.svg";
import upvote from "../../resources/images/icons/upvote.svg";
import upvoteOn from "../../resources/images/icons/arrow-up-circled.svg";
import chat from "../../resources/images/icons/chat.svg";
const FeedCard = (props:any) => {
  const [showMenuDropDown, setShowMenuDropDown] = useState(false);
  const [showUpVote, setShowUpVote] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const handleMenuClick = () => {
    setShowMenuDropDown((prevState) => !prevState);
  };
  const handleUpvoteClick = () => {
    setShowUpVote((prevState) => !prevState);
  };
  const handleShareClick = () => {
    setShowShare((prevState) => !prevState);
  };
  const isNft =props.isNft
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
              {showMenuDropDown && (
                <div className={styles.menuDropDown}>
                  <ul>
                    <li>Report</li>
                    <li>Copy link</li>
                    <li>Add to favourites</li>
                  </ul>
                </div>
              )}
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
          {isNft && 
            <div className={styles.buyNowWrapper}>
                <div className={styles.buyNow_description}>
                    <div>Clone X</div>
                    <div>443 <span>ETH</span></div>
                </div>
                <div className={styles.buyNow_button}>
                    <button>Buy now</button>
                </div>
            </div>
           
          }
          <div className={styles.feedCard_buttons}>
            <button className={showUpVote? styles.upvote:'none'} onClick={handleUpvoteClick}>
              <img src={showUpVote ? upvoteOn:upvote} alt="vote" />
              {showUpVote? '442':'Upvote'}
            </button>
            <button>
              <img src={chat} alt="comment" />
              Comment
            </button>
            <button className={styles.share} onClick={handleShareClick}>
              <img src={share} alt="share"/>
              Share
            </button>
            {showShare&&
            <div className={styles.shareDropDown}>
                <div className={styles.shareButton}>
                    <button>Send</button>
                </div>
                <div className={styles.shareButton}>
                    <button>Share to Facebook</button>
                </div>
                <div className={styles.shareButton}>
                    <button>Share to Twitter</button>
                </div>
                <div className={styles.shareButton}>
                    <button>Iframe</button>
                </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
