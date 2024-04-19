import { useState } from "react";
import styles from "./PostComment.module.css";
import nonClickedHeart from "lib/resources/images/explore/nonclicked-heart.png";
import ClickedHeart from "lib/resources/images/explore/clicked-heart.png";
import arrow from "lib/resources/images/explore/arrow.png";
import attachment from "lib/resources/images/explore/attachment.svg";
import statsReport from "lib/resources/images/explore/stats-report.svg";
import emoji from "lib/resources/images/explore/emoji.svg";
import currentUser from "lib/resources/images/explore/current-user.png";
import { PostsData, PostsDataChanged } from "pages/Profile/utils/types";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface CommentProps {
    post: PostsDataChanged;
    isOpen: boolean;
}

function Comment(props: CommentProps) {
    const { post, isOpen } = props;
    const [commentValue, setCommentValue] = useState<string>('');
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    // const [repliesState, setRepliesState] = useState(
    //     post.replies?.map((reply) => ({
    //         ...reply,
    //         replyReaction: false,
    //         replyLikes: reply.replyLikes || 0,
    //     })) || []
    // );

    // const handleLike = (index: number) => {
    //     const updatedReplies = [...repliesState];
    //     updatedReplies[index].replyReaction = !updatedReplies[index].replyReaction;
    //     updatedReplies[index].replyLikes += updatedReplies[index].replyReaction
    //         ? 1
    //         : -1;
    //     setRepliesState(updatedReplies);
    // };

    // const addComment = () => {
    //     let currentDate = new Date();
    //     let options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
    //     // Format the date using toLocaleString with the specified options
    //     let formattedDate = currentDate.toLocaleString('en-US', options);
    //     setRepliesState([...repliesState, { content: commentValue, createdAt: formattedDate, id: repliesState.length + 1, image: 'https://picsum.photos/100', replyLikes: 1, replyReaction: false, username: 'aleks' }])
    //     setCommentValue('');
    // }
    const handleEmojiSelect = (emoji: any) => {
        const emojiUnicode = emoji.native;
        setCommentValue(commentValue + emojiUnicode);
    };

    // const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (event.key === 'Enter' && !event.shiftKey) {
    //         event.preventDefault(); // Prevent default behavior (line break)
    //         addComment();
    //     }
    // };


    return (
        <>
            {isOpen ? (
                <div className={styles.commentContainer}>
                    <div className={styles.postLine}></div>
                    {post.comments.map((reply, index) => {
                        return (
                            <div className={styles.postComments} key={index}>
                                <div className={styles.postComment}>
                                    <div className={styles.commentAvatarBlock}>
                                        <img
                                            className={styles.commentAvatar}
                                            src={'https://[icsum.photos/100'}
                                            alt="user avatar"
                                        />
                                    </div>
                                    <div className={styles.commentInfo}>
                                        <p className={styles.commentAuthor}>{reply.comment_author}</p>
                                        <p className={styles.commentText}>{reply.comment_content}</p>
                                        <div className={styles.commentActionButtons}>
                                            <div className={styles.commentButtons}>
                                                <span className={styles.commentDate}>
                                                    {reply.comment_date}
                                                </span>
                                                <button className={styles.commentReply}>Reply</button>
                                                <button className={styles.commentShare}>Share</button>
                                            </div>
                                            <div className={styles.commentLikes}>
                                                <button
                                                    className={styles.likeButton}
                                                    // onClick={() => handleLike(index)}
                                                >
                                                    {/* {reply.replyReaction ? (
                                                        <img src={ClickedHeart} alt="liked" />
                                                    ) : (
                                                        <img src={nonClickedHeart} alt="isn't liked" />
                                                    )} */}
                                                    {/* <span
                                                        className={`${styles.numberOfLikes} ${reply.replyReaction
                                                            ? styles.numberOfLikesActive
                                                            : null
                                                            }`}
                                                    >
                                                        {reply.replyLikes}
                                                    </span> */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.postLine}></div>
                            </div>
                        );
                    })}
                    <div className={styles.sendMessage}>
                        <div className={styles.commentAvatarBlock}>
                            <img src={currentUser} alt="current user" />
                        </div>
                        <div className={styles.sendMessageContainer}>
                            <textarea
                                className={styles.messageInput}
                                placeholder="Message..."
                                value={commentValue}
                                onChange={(e) => setCommentValue(e.target.value)}
                                // onKeyDown={handleKeyDown}
                            />
                            <div className={styles.inputButtons}>
                                <button className={styles.inputButton}>
                                    <img src={attachment} alt="attachment logo" />
                                </button>
                                <button className={styles.inputButton}>
                                    <img src={statsReport} alt="stats report logo" />
                                </button>
                                <button className={styles.inputButton} onClick={() => setShowEmojiPicker(prev => !prev)}>
                                    <img src={emoji} alt="emojis logo" />
                                </button>
                                {showEmojiPicker && (
                                    <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
                                )}
                            </div>
                        </div>
                        {/* onClick={addComment} */}
                        <button className={styles.sendMessageButton}>
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Comment;
