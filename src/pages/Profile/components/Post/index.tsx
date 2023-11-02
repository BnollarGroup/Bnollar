import React, { useState } from "react";
import { DataType } from "./types.d";
import styles from "./Post.module.css";
import verifiedIcon from "lib/resources/images/explore/verified-icon.png";
import { UpvoteButton, CommnetButton, ShareButton } from "components/Buttons";
import { UpvoteButtonMobile, CommnetButtonMobile, ShareButtonMobile } from "components/Buttons";
import Comment from "../PostComment/index"


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
                        <div className={styles.author}>
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
                        <button className={styles.postSettings}>
                          <span className={styles.postSettingsInner}>...</span>
                        </button>
                      </div>
                      <div className={styles.postContainer}>
                        <p className={styles.postText}>{post.content}</p>
                        {post.attachment.length > 0 ? (
                          <img src={post.attachment} alt="attachment icon" className={styles.postUploadImg} />
                        ) : null}
                        <div className={styles.postBtns}>
                          <UpvoteButton />
                          <CommnetButton  />
                          <ShareButton />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                <div className={styles.postContainerMobile}>
                  <p className={styles.postTextMobile}>{post.content}</p>
                  {post.attachment.length > 0 ? (
                    <img src={post.attachment} alt="attachment icon" className={styles.postUploadImg} />
                  ) : null}

                  <div className={styles.postBtnsMobile}>
                    <UpvoteButtonMobile />
                    <CommnetButtonMobile />
                    <ShareButtonMobile />
                  </div>
                </div>
              </div>
              <Comment post={post} isOpen={openComments[post.id]} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
