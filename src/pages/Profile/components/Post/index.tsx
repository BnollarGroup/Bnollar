import React, { useState } from "react";
import styles from "./Post.module.css";
import verifiedIcon from "lib/resources/images/explore/verified-icon.png";
import { UpvoteButton, CommnetButton, ShareButton, MoreButton } from "components/Buttons";
import {
  UpvoteButtonMobile,
  CommnetButtonMobile,
  ShareButtonMobile,
} from "components/Buttons";
import Comment from "../PostComment/index";
import { DataType } from "pages/Profile/utils/types";

interface PostProps {
  data: DataType;
}

const Post: React.FC<PostProps> = (props) => {
  const { data } = props;

  // State to manage whether comments are open or closed for each post
  const [openComments, setOpenComments] = useState<boolean[]>(Array(data.posts?.length).fill(false));

  // Function to toggle comments for a specific post
  const toggleComments = (index: number) => {
    setOpenComments(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div style={{ width: '100%' }}>
      {data.posts?.map((post, index) => {
        return (
          <div key={index} className={styles.post}>
            <div className={styles.postContent}>
              <div className={styles.postFlex}>
                <div className={styles.postFlexInner}>
                  <img
                    className={styles.postAvatar}
                    src={post.user.image}
                    alt={post.user.name}
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
                        <MoreButton />
                      </div>
                      <div className={styles.postContainer}>
                        <p className={styles.postText}>{post.content}</p>
                        {post.attachment.length > 0 ? (
                          <img
                            src={post.attachment}
                            alt="attachment icon"
                            className={styles.postUploadImg}
                          />
                        ) : null}
                        <div className={styles.postBtns}>
                          <UpvoteButton />
                          <CommnetButton onClick={() => toggleComments(index)} />
                          <ShareButton />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.postContainerMobile}>
                  <p className={styles.postTextMobile}>{post.content}</p>
                  {post.attachment.length > 0 ? (
                    <img
                      src={post.attachment}
                      alt="attachment icon"
                      className={styles.postUploadImg}
                    />
                  ) : null}

                  <div className={styles.postBtnsMobile}>
                    <UpvoteButtonMobile />
                    <CommnetButtonMobile onClick={() => toggleComments(index)} />
                    <ShareButtonMobile />
                  </div>
                </div>
              </div>
              <Comment post={post} isOpen={openComments[index]} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
