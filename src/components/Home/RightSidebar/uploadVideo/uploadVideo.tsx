import React from "react";
import styles from "./uploadPicture.module.css";
// import FeedHeader from "../../components/Home/Feed/FeedHeader";
import user1 from "../../resources/images/icons/user1.svg";
import attach from "../../resources/images/icons/atach.svg";
import nft from "../../resources/images/icons/nft.svg";
import emoji from "../../resources/images/icons/emoji.svg";
import language from "../../resources/images/icons/language.svg";
import Woman from "../../resources/images/uploadvideo/woman-chat.png";
import Cross from "../../resources/images/uploadvideo/cancel.svg";
import Play from "../../resources/images/uploadvideo/play.svg";

function UploadVideo() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.feedHeader}>
          <div className={styles.uploaded}>
            <div className={styles.headerSearch}>
              <img src={user1} />
              <input type="text" placeholder="Write your thought" />
            </div>
            <div className={styles.video_img}>
              <button className={styles.edit_btn}>Edit</button>
              <button className={styles.cancel_btn}>
                <img src={Cross} />
              </button>
              <img src={Woman} className={styles.main_img} />
              <div className={styles.play_wrapper}>
                <div className={styles.play_box}>
                  <div className={styles.play_circle}></div>
                  <img src={Play} className={styles.play_img} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.headerButtons}>
            <div className={styles.leftButtons}>
              <button>
                <img src={attach} />
              </button>
              <button>
                <img src={nft} />
              </button>
              <button>
                <img src={emoji} />
              </button>
            </div>
            <div className={styles.rightButtons}>
              <button>
                <img src={language} />
                Public
              </button>
              <button className={styles.postButton}>Post</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UploadVideo;
