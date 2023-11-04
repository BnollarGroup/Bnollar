import { useState } from "react";
import styles from "./Post.module.css";
import verifiedIcon from "lib/resources/images/explore/verified-icon.png";
import { Post as TPost } from "pages/Explore/utils/types";
import Buttons from "./components/Buttons";

interface Props {
  data: TPost;
}

export default function Post({ data }: Props) {
  const [openComments, setOpenComments] = useState<Record<number, boolean>>({});

  const handleCommentClick = (postId: number) => {
    setOpenComments({ ...openComments, [postId]: !openComments[postId] });
  };

  return (
    <div key={data.id} className={styles.post}>
      <div className={styles.postContent}>
        <div className={styles.postFlex}>
          <div className={styles.postFlexInner}>
            <img className={styles.postAvatar} src={data.user.image} alt="" />
            <div className={styles.postContentInner}>
              <div className={styles.postInfo}>
                <div className={styles.postAuthorWrapper}>
                  <div className={styles.postAuthor}>
                    <div className={styles.postAuthorNameInner}>
                      <span className={styles.postAuthorName}>
                        {data.user.name}
                      </span>
                      {data.verified ? (
                        <img
                          className={styles.verifiedUser}
                          src={verifiedIcon}
                          alt="verified user icon"
                        />
                      ) : null}
                    </div>
                    <span className={styles.postDate}>{data.createdAt}</span>
                  </div>
                  <button className={styles.postSettings}>
                    <span className={styles.postSettingsInner}>...</span>
                  </button>
                </div>
                <div className={styles.postAndButtonsDesktop}>
                  <p className={styles.postText}>{data.content}</p>
                  {data.attachment.length > 0 ? (
                    <img
                      className={styles.postAttachment}
                      src={data.attachment}
                      alt="attachment icon"
                    />
                  ) : null}
                  <Buttons
                    upScore={data.upScore}
                    id={data.id}
                    numberOfComments={data.numberOfComments}
                    numberOfShares={data.numberOfShares}
                    handleCommentClick={handleCommentClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.postAndButtonsMobile}>
            <p className={styles.postTextMobile}>{data.content}</p>
            {data.attachment.length > 0 ? (
              <img
                className={styles.postAttachment}
                src={data.attachment}
                alt="attachment icon"
              />
            ) : null}
            <Buttons
              upScore={data.upScore}
              id={data.id}
              numberOfComments={data.numberOfComments}
              numberOfShares={data.numberOfShares}
              handleCommentClick={handleCommentClick}
            />
          </div>
        </div>
      </div>

      {/* <Comment post={post} isOpen={openComments[data.id]} /> */}
    </div>
  );
}
