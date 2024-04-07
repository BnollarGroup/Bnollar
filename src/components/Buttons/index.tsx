import { useState } from "react";
import styles from "./Buttons.module.css";
import upvote from "lib/resources/images/icons/upvote.svg";
import upvoteOn from "lib/resources/images/icons/arrow-up-circled.svg";
import chat from "lib/resources/images/icons/chat.svg";
import chatOn from "lib/resources/images/icons/chatOn.svg";
import share from "lib/resources/images/icons/share.svg";
import AddComment from "components/Home/AddComment";
import ShareDropDownMenu from "components/Home/Share/DropDownMenu/ShareDropDownMenu";
import SettingsDropdown from "components/Home/Feed/Dropdowns/Upperdropdown";
import PropTypes from 'prop-types';

// Your component code...




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
interface CommentButtonProps {
  onClick: () => void;
}
export const CommnetButton: React.FC<CommentButtonProps> = ({ onClick }) => {
  const [showComment, setShowComment] = useState(false);

  return (
    <>
      <button
        className={showComment ? styles.ClickedBtn : styles.Button}
        onClick={() => {
          // setShowComment(prev => !prev); // Toggle the state when button is clicked
          onClick(); // Call the onClick function passed as prop
        }}
      >
        <img src={showComment ? chatOn : chat} alt="Comment" />
        Comment
      </button>
      {showComment ? <AddComment setCommentIsOpen={setShowComment} /> : null}

    </>
  );
};

export const ShareButton = () => {
  const [showShare, setShowShare] = useState(false);

  const handleShareClick = () => {
    setShowShare((prevState) => !prevState);
  };
  return (
    <div className={styles.shareWrapper}>
      <button
        className={`${styles.share} ${styles.Button}`}
        onClick={handleShareClick}
      >
        <img src={share} alt="share" />
        Share
      </button>
      {showShare && (
        <ShareDropDownMenu />
        // <Share setShareisOpen={setShowShare} shareElement={ShareElement} />
      )}
    </div>
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

export const CommnetButtonMobile: React.FC<CommentButtonProps> = ({ onClick }) => {
  const [showComment, setShowComment] = useState(false);

  const handleCommentClick = () => {
    setShowComment((prevState) => !prevState);
  };

  return (
    <button
      className={showComment ? styles.ClickedBtn : styles.Button}
      onClick={() => onClick()}
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
    <div className={styles.shareWrapper}>
      <button
        className={`${styles.share} ${styles.Button}`}
        onClick={() => handleShareClick()}
      >
        <img src={share} alt="share" />

      </button>
      {showShare && (
        <ShareDropDownMenu />
        // <Share setShareisOpen={setShowShare} shareElement={ShareElement} />
      )}
    </div>
  );
};

export const MoreButton = () => {
  const [showMore, setShowMore] = useState(false);

  const handleSettingsClick = () => {
    setShowMore((prevState) => !prevState);
  };
  return (
    <div className={styles.settingsWrapper}>
      <button className={styles.postSettings} onClick={handleSettingsClick}>
        <span className={styles.postSettingsInner}>...</span>
      </button>
      {showMore && (
        <SettingsDropdown />
        // <Share setShareisOpen={setShowShare} shareElement={ShareElement} />
      )}
    </div>
  );
};


CommnetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
CommnetButtonMobile.propTypes = {
  onClick: PropTypes.func.isRequired,
};
