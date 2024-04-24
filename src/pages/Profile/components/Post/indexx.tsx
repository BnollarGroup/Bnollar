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
import { PostData } from "pages/Profile/utils/types";

interface PostProps {
    posts: PostData[];
}

const Post: React.FC<PostProps> = (props) => {
    const { posts } = props;

    // State to manage whether comments are open or closed for each post
    const [openComments, setOpenComments] = useState<boolean[]>(Array(posts?.length).fill(false));

    const toggleComments = (index: number) => {
        setOpenComments((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div style={{ width: '100%' }}>
            {posts?.map((post, index) => {
                return (
                    <div key={index} className={styles.post}>
                        <div className={styles.postContent}>
                            <div className={styles.postFlex}>
                                <div className={styles.postFlexInner}>
                                    <img
                                        className={styles.postAvatar}
                                        src={post.user.profile_picture ? post.user.profile_picture : ''}
                                        alt={post.user.username}
                                    />
                                    <div className={styles.postContentInner}>
                                        <div className={styles.postInfo}>
                                            <div className={styles.postAuthor}>
                                                <div className={styles.author}>
                                                    <div className={styles.postAuthorNameInner}>
                                                        <span className={styles.postAuthorName}>
                                                            {post.user.username}
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
                                                {post.attachment_Image && (
                                                    <img
                                                        src={post.attachment_Image}
                                                        alt="attachment icon"
                                                        className={styles.postUploadImg}
                                                    />
                                                )}
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
                                    {post.attachment_Image && (
                                        <img
                                            src={post.attachment_Image}
                                            alt="attachment icon"
                                            className={styles.postUploadImg}
                                        />
                                    )}

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
