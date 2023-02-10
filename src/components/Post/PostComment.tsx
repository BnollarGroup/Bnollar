import React from "react";
import styles from "./PostComment.module.css";
import user1 from "../../resources/images/icons/user1.svg";
import heart from "../../resources/images/icons/heart.svg";
const PostComment = (props: any) => {
  const Reply = props.reply;
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic Z29jaGEuYmVydWxhdmFAYXZlcnNpLmdlOnlPbjdKUjNuOTRveTZ2emUxNmJKemg1NTJNNUIxNlk1");
myHeaders.append("Cookie", "sid_customer_0d824=c40d458e91b03e364ad4ac26ac9e94aa-1-C");

var requestOptions:any = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://shop.aversi.ge/api/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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
            <div className={styles.commentLike}>
              <img src={heart} style={{ background: "none" }} /> 4
            </div>
          </div>
        </div>
      </div>
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
            <div className={styles.commentLike}>
              <img src={heart} style={{ background: "none" }} /> 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
