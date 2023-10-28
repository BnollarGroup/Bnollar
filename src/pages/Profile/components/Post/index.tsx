import React, { useState } from "react";
import { DataType } from "./types.d";
import styles from "./Post.module.css";
// import Comment from "../Comment/Comment";
import verifiedIcon from "lib/resources/images/explore/verified-icon.png";
// import arrowUpIcon from "lib/resources/images/explore/arrow-up.svg";
// import chatIcon from "lib/resources/images/explore/chat-icon.svg";
// import postShareIcon from "lib/resources/images/explore/post-share-icon.svg";
import { UpvoteButton, CommnetButton, ShareButton } from "components/Buttons";


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
            <div className={styles.postContent}>
              <div className={styles.postFlex}>
                <div className={styles.postFlexInner}>
                  <img
                    className={styles.postAvatar}
                    src={post.user.image}
                    alt=""
                  />
                  <div className={styles.postContentInner}>
                    <div className={styles.postInfo}>
                      <div className={styles.postAuthor}>
                        <div className={styles.postAuthorNameInner}>
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
                        </div>
                        <span className={styles.postDate}>
                          {post.createdAt}
                        </span>
                      </div>
                      <p className={styles.postText}>{post.content}</p>
                    </div>
                    <button className={styles.postSettings}>
                      <span className={styles.postSettingsInner}>...</span>
                    </button>
                  </div>
                </div>
                <p className={styles.postTextMobile}>{post.content}</p>
                {post.attachment.length > 0 ? (
                  <img src={post.attachment} alt="attachment icon" />
                ) : null}
              </div>
              <div className={styles.rate_btns}>
                <UpvoteButton />
                <CommnetButton />
                <ShareButton />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;