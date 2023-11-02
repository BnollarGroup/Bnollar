import { useState } from "react";
import styles from "./Buttons.module.css";
import upvote from "lib/resources/images/icons/upvote.svg";
import upvoteOn from "lib/resources/images/icons/arrow-up-circled.svg";
import chat from "lib/resources/images/icons/chat.svg";
import chatOn from "lib/resources/images/icons/chatOn.svg";
import share from "lib/resources/images/icons/share.svg";

export const UpvoteButton = () => {
  const [showUpVote, setShowUpVote] = useState(false);

  const handleUpvoteClick = () => {
    setShowUpVote((prevState) => !prevState);
  };

  return (
    <button
      className={showUpVote ? styles.ClickedBtn : styles.Button}
      onClick={handleUpvoteClick}
    >
      <img src={showUpVote ? upvoteOn : upvote} alt="vote" />
      {showUpVote ? "442" : "Upvote"}
    </button>
  );
};

export const CommnetButton = () => {
  const [showComment, setShowComment] = useState(false);

  return (
    <button
      className={showComment ? styles.ClickedBtn : styles.Button}
    >
      <img src={showComment ? chatOn : chat} alt="Comment" />
      Comment
    </button>

  );
};

export const ShareButton = () => {
  const [showShare, setShowShare] = useState(false);

  const handleShareClick = () => {
    setShowShare((prevState) => !prevState);
  };

  return (
    <>
      <button
        className={`${styles.share} ${styles.Button}`}
        onClick={handleShareClick}
      >
        <img src={share} alt="share" />
        Share
      </button>
      {showShare && (
        <div className={styles.opencovereditdrop}>
          <button className={styles.dropcoverbtn}>Send</button>
          <button className={styles.dropcoverbtn}>Share to Facebook</button>
          <button className={styles.dropcoverbtn}>Share to Twitter</button>
          <button className={styles.dropcoverbtn}>Iframe</button>
        </div>
      )}
    </>
  );
};





export const UpvoteButtonMobile = () => {
  const [showUpVote, setShowUpVote] = useState(false);

  const handleUpvoteClick = () => {
    setShowUpVote((prevState) => !prevState);
  };

  return (
    <button
      className={showUpVote ? styles.ClickedBtn : styles.Button}
      onClick={handleUpvoteClick}
    >
      <img src={showUpVote ? upvoteOn : upvote} alt="vote" />
      {showUpVote ? "442" : ""}
    </button>
  );
};

export const CommnetButtonMobile = () => {
  const [showComment, setShowComment] = useState(false);

  const handleCommentClick = () => {

    setShowComment((prevState) => !prevState);
  };
  
  return (
    <button
      className={showComment ? styles.ClickedBtn : styles.Button}
      onClick={handleCommentClick}
    >
      <img src={showComment ? chatOn : chat} alt="Comment" />
    </button>
    
  );
};

export const ShareButtonMobile = () => {
  const [showShare, setShowShare] = useState(false);

  const handleShareClick = () => {
    setShowShare((prevState) => !prevState);
  };

  return (
    <>
      <button
        className={`${styles.share} ${styles.Button}`}
        onClick={handleShareClick}
      >
        <img src={share} alt="share" />
        
      </button>
      {showShare && (
        <div className={styles.opencovereditdrop}>
          <button className={styles.dropcoverbtn}>Send</button>
          <button className={styles.dropcoverbtn}>Share to Facebook</button>
          <button className={styles.dropcoverbtn}>Share to Twitter</button>
          <button className={styles.dropcoverbtn}>Iframe</button>
        </div>
      )}
    </>
  );
};
