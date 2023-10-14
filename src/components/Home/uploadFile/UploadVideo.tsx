import React from "react";
import styles from "./UploadVideo.module.css";
import user2 from "lib/resources/images/upload-files/user2.svg";
import attach from "lib/resources/images/icons/atach.svg";
import nft from "lib/resources/images/icons/nft.svg";
import emoji from "lib/resources/images/icons/emoji.svg";
import language from "lib/resources/images/icons/language.svg";
import Woman from "lib/resources/images/upload-files/woman-chat-video.png";
import Cross from "lib/resources/images/upload-files/cancel.svg";
import Play from "lib/resources/images/upload-files/play.svg";

function UploadVideo() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.feedHeader}>
          <div className={styles.uploaded}>
            <div className={styles.headerSearch}>
              <img src={user2} />
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
