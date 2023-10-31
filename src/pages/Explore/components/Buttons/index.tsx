import styles from "./Buttons.module.css";
import arrowUpIcon from "lib/resources/images/explore/arrow-up.svg";
import chatIcon from "lib/resources/images/explore/chat-icon.svg";
import postShareIcon from "lib/resources/images/explore/post-share-icon.svg";

interface ButtonsProps {
  upScore: string;
  id: number;
  numberOfComments: string;
  numberOfShares: string;
  handleCommentClick: (id: number) => void;
}

function Buttons(props: ButtonsProps) {
  const { upScore, id, numberOfComments, numberOfShares, handleCommentClick } =
    props;
  return (
    <div className={styles.postButtons}>
      <button className={styles.postButton}>
        <img src={arrowUpIcon} alt="arrow up icon" />
        <span className={styles.postButtonText}>{upScore}</span>
      </button>
      <button
        onClick={() => handleCommentClick(id)}
        className={styles.postButton}
      >
        <img src={chatIcon} alt="chat icon" />
        <span className={styles.postButtonText}>{numberOfComments}</span>
      </button>
      <button className={styles.postButton}>
        <img src={postShareIcon} alt="post share icon" />
        <span className={styles.postButtonText}>{numberOfShares}</span>
      </button>
    </div>
  );
}

export default Buttons;
