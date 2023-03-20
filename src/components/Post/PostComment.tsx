import React from "react";
import styles from "./PostComment.module.css";
import user1 from "../../resources/images/icons/user1.svg";
import heart from "../../resources/images/icons/heart.svg";
import heartTr from "../../resources/images/icons/heartTr.svg";
import WriteComment from "./WriteComment";
const PostComment = (props: any) => {
  const Reply = props.reply;
  const [like, setLike] = React.useState(false);
  const handleClick = () => {
    setLike((prevState) => !prevState);
  };
  const CommentReply = () => {
    const [like, setLike] = React.useState(false);
    const handleClick = () => {
      setLike((prevState) => !prevState);
    };
    return (
      <div className={styles.commentWrapperReply}>
        <div className={styles.userIcon}>
          <img src={user1} />
        </div>
        <div className={styles.comment}>
          <div className={styles.userName}>Namesax</div>
          <div className={styles.text}>
            The toughest designs for beginners are ones without any nice
            illustrations or photos to make them pleasant to the eye. In this
            post I’ll show you how to create the right hierarchy for a minimal
            product card without any graphics.
          </div>
          <div className={styles.commentButtons}>
            <div className={styles.commentDate}>Dec 14</div>
            <div className={styles.commentReply}>Reply</div>
            <div className={styles.commentShare}>Share</div>
            <div className={styles.commentLike} onClick={handleClick}>
              {like ? <img src={heart} /> : <img src={heartTr} />} 4
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className={styles.commentWrapper}>
        <div className={styles.userIcon}>
          <img src={user1} />
        </div>
        <div className={styles.comment}>
          <div className={styles.userName}>Namesax</div>
          <div className={styles.text}>
            The toughest designs for beginners are ones without any nice
            illustrations or photos to make them pleasant to the eye. In this
            post I’ll show you how to create the right hierarchy for a minimal
            product card without any graphics.
          </div>
          <div className={styles.commentButtons}>
            <div className={styles.commentDate}>Dec 14</div>
            <div className={styles.commentReply}>Reply</div>
            <div className={styles.commentShare}>Share</div>
            <div className={styles.commentLike} onClick={handleClick}>
              {like ? <img src={heart} /> : <img src={heartTr} />} 4
            </div>
          </div>
        </div>
      </div>
      <CommentReply />
    </div>
  );
};

export default PostComment;
