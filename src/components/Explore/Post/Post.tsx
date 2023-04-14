import React, { useState } from "react";
import { DataType } from "../types";
import styles from "./Post.module.css";
import Comment from "../Comment/Comment";
import verifiedIcon from "../../../resources/images/explore/verified-icon.png";
import arrowUpIcon from "../../../resources/images/explore/arrow-up.svg";
import chatIcon from "../../../resources/images/explore/chat-icon.svg";
import postShareIcon from "../../../resources/images/explore/post-share-icon.svg";

interface PostProps {
  dataItem: DataType;
}

const Post: React.FC<PostProps> = (props) => {
  const { dataItem } = props;

  const [openComments, setOpenComments] = useState<Record<number, boolean>>({});
  const handleCommentClick = (postId: number) => {
    setOpenComments({ ...openComments, [postId]: !openComments[postId] });
  };

  return (
    <>
      {dataItem.posts?.map((post, index) => {
        return (
          <div key={index} className={styles.post}>
            <div className={styles.postInner}>
              <img className={styles.postAvatar} src={post.user.image} alt="" />
              <div className={styles.postContent}>
                <div className={styles.postContentInner}>
                  <div className={styles.postInfo}>
                    <div className={styles.postAuthor}>
                      <span className={styles.postAuthorName}>
                        {post.user.name}
                      </span>
                      {post.verified ? (
                        <img
                          className={styles.verifiedUser}
                          src={verifiedIcon}
                          alt="verified user icon"
                        />
                      ) : null}
                      <span className={styles.postDate}>{post.createdAt}</span>
                    </div>
                    <button className={styles.postSettings}>
                      <span className={styles.postSettingsInner}>...</span>
                    </button>
                  </div>
                </div>
                <p className={styles.postText}>{post.content}</p>
                {post.attachment.length > 0 ? (
                  <img src={post.attachment} alt="attachment icon" />
                ) : null}
                <div className={styles.postButtons}>
                  <button className={styles.postButton}>
                    <img src={arrowUpIcon} alt="arrow up icon" />
                    <span className={styles.postButtonText}>
                      {post.upScore}
                    </span>
                  </button>
                  <button
                    onClick={() => handleCommentClick(post.id)}
                    className={styles.postButton}
                  >
                    <img src={chatIcon} alt="chat icon" />
                    <span className={styles.postButtonText}>
                      {post.numberOfComments}
                    </span>
                  </button>
                  <button className={styles.postButton}>
                    <img src={postShareIcon} alt="post share icon" />
                    <span className={styles.postButtonText}>
                      {post.numberOfShares}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <Comment post={post} isOpen={openComments[post.id]} />
          </div>
        );
      })}
    </>
  );
};

export default Post;