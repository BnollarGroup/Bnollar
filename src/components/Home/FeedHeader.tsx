import React from "react";
import styles from "./FeedHeader.module.css";
import user1 from "lib/resources/images/icons/user1.svg";
import attach from "lib/resources/images/icons/atach.svg";
import nft from "lib/resources/images/icons/nft.svg";
import emoji from "lib/resources/images/icons/emoji.svg";
import language from "lib/resources/images/icons/language.svg";

export default function WritePost() {
  const [thought, setThought] = React.useState("");

  return (
    <div className={styles.feedHeader}>
      <div className={styles.headerSearch}>
        <img src={user1} />
        <textarea
          id="post"
          placeholder="Write your thought"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          style={{
            height: !thought ? "auto" : "3.5em",
          }}
        ></textarea>
      </div>
      <div className={styles.headerButtons}>
        <div className={styles.leftButtons}>
          <img src={attach} />
          <img src={nft} />
          <img src={emoji} />
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
  );
}
