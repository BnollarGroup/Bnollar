import React from "react";
import styles from "./WriteComment.module.css";
import user1 from "../../lib/resources/images/icons/user1.svg";
import atach from "../../lib/resources/images/icons/atach.svg";
import nft from "../../lib/resources/images/icons/nft.svg";
import emoji from "../../lib/resources/images/icons/emoji.svg";
import send from "../../lib/resources/images/icons/send.svg";

const WriteComment = () => {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.userIcon}>
        <img src={user1} />
      </div>
      <div className={styles.comment}>
        <input type="text"></input>
        <div className={styles.inputButtons}>
          <button>
            <img src={atach} />
          </button>
          <button>
            <img src={nft} />
          </button>
          <button>
            <img src={emoji} />
          </button>
        </div>
      </div>
      <div className={styles.send}>
        <img src={send} />
      </div>
    </div>
  );
};
export default WriteComment;
