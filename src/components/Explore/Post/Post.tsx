import React, { useState } from "react";
import styles from "./Post.module.css";
import currentUserImage from "../../resources/images/explore/current-user.png";
import userOneImage from "../../resources/images/explore/post-user1.png";
import userTwoImage from "../../resources/images/explore/post-user2.png";
import userThreeImage from "../../resources/images/explore/post-user3.png";
import postTwoUserImage from "../../resources/images/explore/post2-user.png";
import postThreeUserImage from "../../resources/images/explore/post3-user.png";
import postTwoAttachment from "../../resources/images/explore/post2-attachment.png";
import postThreeAttachment from "../../resources/images/explore/post3-attachment.png";
import verifiedIcon from "../../../resources/images/explore/verified-icon.png";
import arrowUpIcon from "../../../resources/images/explore/arrow-up.svg";
import chatIcon from "../../../resources/images/explore/chat-icon.svg";
import postShareIcon from "../../../resources/images/explore/post-share-icon.svg";
import nonClickedHeart from "../../resources/images/explore/nonclicked-heart.png";
import ClickedHeart from "../../resources/images/explore/clicked-heart.png";
import { DataType, PostsData } from "../types";
import Comment from "../Comment/Comment";

interface PostProps {
  dataItem: DataType;
}

const Post: React.FC<PostProps> = (props) => {
  const { dataItem } = props;

  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);

  const [openComments, setOpenComments] = useState<Record<number, boolean>>({});
  const handleCommentClick = (postId: number) => {
    setOpenComments({ ...openComments, [postId]: !openComments[postId] });
  };

  return (
    <>
      {dataItem.posts?.map((post, index) => {
        return (
          <div className={styles.post}>
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
                          alt=""
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
                <img src={post.attachment} alt="" />
                <div className={styles.postButtons}>
                  <button className={styles.postButton}>
                    <img src={arrowUpIcon} alt="" />
                    <span className={styles.postButtonText}>
                      {post.upScore}
                    </span>
                  </button>
                  <button
                    onClick={() => handleCommentClick(post.id)}
                    className={styles.postButton}
                  >
                    <img src={chatIcon} alt="" />
                    <span className={styles.postButtonText}>
                      {post.numberOfComments}
                    </span>
                  </button>
                  <button className={styles.postButton}>
                    <img src={postShareIcon} alt="" />
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
