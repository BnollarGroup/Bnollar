// import { useState } from "react";
// import styles from "./PostComment.module.css";
// import nonClickedHeart from "lib/resources/images/explore/nonclicked-heart.png";
// import ClickedHeart from "lib/resources/images/explore/clicked-heart.png";
// import arrow from "lib/resources/images/explore/arrow.png";
// import attachment from "lib/resources/images/explore/attachment.svg";
// import statsReport from "lib/resources/images/explore/stats-report.svg";
// import emoji from "lib/resources/images/explore/emoji.svg";
// import currentUser from "lib/resources/images/explore/current-user.png";
// import { PostData, PostsData } from "pages/Profile/utils/types";
// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'

// interface CommentProps {
//   post: PostData;
//   isOpen: boolean;
// }

// function Comment(props: CommentProps) {
//   const { post, isOpen } = props;
//   const [commentValue, setCommentValue] = useState<string>('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
//   const [repliesState, setRepliesState] = useState(
//     post.replies?.map((reply) => ({
//       ...reply,
//       replyReaction: false,
//       replyLikes: reply.replyLikes || 0,
//     })) || []
//   );

//   const handleLike = (index: number) => {
//     const updatedReplies = [...repliesState];
//     updatedReplies[index].replyReaction = !updatedReplies[index].replyReaction;
//     updatedReplies[index].replyLikes += updatedReplies[index].replyReaction
//       ? 1
//       : -1;
//     setRepliesState(updatedReplies);
//   };

//   const addComment = () => {
//     let currentDate = new Date();
//     let options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
//     // Format the date using toLocaleString with the specified options
//     let formattedDate = currentDate.toLocaleString('en-US', options);
//     setRepliesState([...repliesState, { content: commentValue, createdAt: formattedDate, id: repliesState.length + 1, user: { profile_picture: 'https://picsum.photos/100', id: 1, username: 'aleks' }, replyLikes: 1, replyReaction: false }])
//     setCommentValue('');
//   }
//   const handleEmojiSelect = (emoji: any) => {
//     const emojiUnicode = emoji.native;
//     setCommentValue(commentValue + emojiUnicode);
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (event.key === 'Enter' && !event.shiftKey) {
//       event.preventDefault(); // Prevent default behavior (line break)
//       addComment();
//     }
//   };


//   return (
//     <>
//       {isOpen ? (
//         <div className={styles.commentContainer}>
//           <div className={styles.postLine}></div>
//           {repliesState.map((reply, index) => {
//             return (
//               <div className={styles.postComments} key={index}>
//                 <div className={styles.postComment}>
//                   <div className={styles.commentAvatarBlock}>
//                     <img
//                       className={styles.commentAvatar}
//                       src={reply.user.profile_picture ? reply.user.profile_picture : ''}
//                       alt="user avatar"
//                     />
//                   </div>
//                   <div className={styles.commentInfo}>
//                     <p className={styles.commentAuthor}>{reply.user.username}</p>
//                     <p className={styles.commentText}>{reply.content}</p>
//                     <div className={styles.commentActionButtons}>
//                       <div className={styles.commentButtons}>
//                         <span className={styles.commentDate}>
//                           {reply.createdAt}
//                         </span>
//                         <button className={styles.commentReply}>Reply</button>
//                         <button className={styles.commentShare}>Share</button>
//                       </div>
//                       <div className={styles.commentLikes}>
//                         <button
//                           className={styles.likeButton}
//                           onClick={() => handleLike(index)}
//                         >
//                           {reply.replyReaction ? (
//                             <img src={ClickedHeart} alt="liked" />
//                           ) : (
//                             <img src={nonClickedHeart} alt="isn't liked" />
//                           )}
//                           <span
//                             className={`${styles.numberOfLikes} ${reply.replyReaction
//                               ? styles.numberOfLikesActive
//                               : null
//                               }`}
//                           >
//                             {reply.replyLikes}
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className={styles.postLine}></div>
//               </div>
//             );
//           })}
//           <div className={styles.sendMessage}>
//             <div className={styles.commentAvatarBlock}>
//               <img src={currentUser} alt="current user" />
//             </div>
//             <div className={styles.sendMessageContainer}>
//               <textarea
//                 className={styles.messageInput}
//                 placeholder="Message..."
//                 value={commentValue}
//                 onChange={(e) => setCommentValue(e.target.value)}
//                 onKeyDown={handleKeyDown}
//               />
//               <div className={styles.inputButtons}>
//                 <button className={styles.inputButton}>
//                   <img src={attachment} alt="attachment logo" />
//                 </button>
//                 <button className={styles.inputButton}>
//                   <img src={statsReport} alt="stats report logo" />
//                 </button>
//                 <button className={styles.inputButton} onClick={() => setShowEmojiPicker(prev => !prev)}>
//                   <img src={emoji} alt="emojis logo" />
//                 </button>
//                 {showEmojiPicker && (
//                   <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
//                 )}
//               </div>
//             </div>
//             <button className={styles.sendMessageButton} onClick={addComment}>
//               <img src={arrow} alt="arrow" />
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }

// export default Comment;
import React, { useState, useEffect, useRef } from "react";
import styles from "./PostComment.module.css";
import nonClickedHeart from "lib/resources/images/explore/nonclicked-heart.png";
import ClickedHeart from "lib/resources/images/explore/clicked-heart.png";
import arrow from "lib/resources/images/explore/arrow.png";
import attachment from "lib/resources/images/explore/attachment.svg";
import statsReport from "lib/resources/images/explore/stats-report.svg";
import emoji from "lib/resources/images/explore/emoji.svg";
import currentUser from "lib/resources/images/explore/current-user.png";
import { PostData, PostsData } from "pages/Profile/utils/types";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface CommentProps {
  post: PostData;
  isOpen: boolean;
}

function Comment(props: CommentProps) {
  const { post, isOpen } = props;
  const [commentValue, setCommentValue] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [repliesState, setRepliesState] = useState(
    post.replies?.map((reply) => ({
      ...reply,
      replyReaction: false,
      replyLikes: reply.replyLikes || 0,
    })) || []
  );

  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLike = (index: number) => {
    const updatedReplies = [...repliesState];
    updatedReplies[index].replyReaction = !updatedReplies[index].replyReaction;
    updatedReplies[index].replyLikes += updatedReplies[index].replyReaction
      ? 1
      : -1;
    setRepliesState(updatedReplies);
  };

  const addComment = () => {
    let currentDate = new Date();
    let options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
    // Format the date using toLocaleString with the specified options
    let formattedDate = currentDate.toLocaleString('en-US', options);
    if(commentValue === ''){return;}
    setRepliesState([...repliesState, { content: commentValue, createdAt: formattedDate, id: repliesState.length + 1, user: { profile_picture: 'https://picsum.photos/100', id: 1, username: 'aleks' }, replyLikes: 1, replyReaction: false }])
    setCommentValue('');
  }
  const handleEmojiSelect = (emoji: any) => {
    const emojiUnicode = emoji.native;
    setCommentValue(commentValue + emojiUnicode);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent default behavior (line break)
      addComment();
    }
  };


  return (
    <>
      {isOpen ? (
        <div className={styles.commentContainer}>
          <div className={styles.postLine}></div>
          {repliesState.map((reply, index) => {
            return (
              <div className={styles.postComments} key={index}>
                <div className={styles.postComment}>
                  <div className={styles.commentAvatarBlock}>
                    <img
                      className={styles.commentAvatar}
                      src={reply.user.profile_picture ? reply.user.profile_picture : ''}
                      alt="user avatar"
                    />
                  </div>
                  <div className={styles.commentInfo}>
                    <p className={styles.commentAuthor}>{reply.user.username}</p>
                    <p className={styles.commentText}>{reply.content}</p>
                    <div className={styles.commentActionButtons}>
                      <div className={styles.commentButtons}>
                        <span className={styles.commentDate}>
                          {reply.createdAt}
                        </span>
                        <button className={styles.commentReply}>Reply</button>
                        <button className={styles.commentShare}>Share</button>
                      </div>
                      <div className={styles.commentLikes}>
                        <button
                          className={styles.likeButton}
                          onClick={() => handleLike(index)}
                        >
                          {reply.replyReaction ? (
                            <img src={ClickedHeart} alt="liked" />
                          ) : (
                            <img src={nonClickedHeart} alt="isn't liked" />
                          )}
                          <span
                            className={`${styles.numberOfLikes} ${reply.replyReaction
                              ? styles.numberOfLikesActive
                              : null
                              }`}
                          >
                            {reply.replyLikes}
                          </span>
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
                onKeyDown={handleKeyDown}
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
                  <div ref={emojiPickerRef}>
                    <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
                  </div>
                )}
              </div>
            </div>
            <button className={styles.sendMessageButton} onClick={addComment}>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Comment;




// reply
// import React, { useState, useEffect, useRef } from "react";
// import styles from "./PostComment.module.css";
// import nonClickedHeart from "lib/resources/images/explore/nonclicked-heart.png";
// import ClickedHeart from "lib/resources/images/explore/clicked-heart.png";
// import arrow from "lib/resources/images/explore/arrow.png";
// import attachment from "lib/resources/images/explore/attachment.svg";
// import statsReport from "lib/resources/images/explore/stats-report.svg";
// import emoji from "lib/resources/images/explore/emoji.svg";
// import currentUser from "lib/resources/images/explore/current-user.png";
// import { PostData } from "pages/Profile/utils/types";
// import data from '@emoji-mart/data';
// import Picker from '@emoji-mart/react';

// interface CommentProps {
//   post: PostData;
//   isOpen: boolean;
// }

// interface Reply {
//   id: number;
//   content: string;
//   createdAt: string;
//   user: {
//     profile_picture: string;
//     id: number;
//     username: string;
//   };
//   replyLikes: number;
//   replyReaction: boolean;
//   replies?: Reply[];
// }

// function Comment(props: CommentProps) {
//   const { post, isOpen } = props;
//   const [commentValue, setCommentValue] = useState<string>('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
//   const [repliesState, setRepliesState] = useState<Reply[]>(
//     post.replies?.map((reply) => ({
//       ...reply,
//       replyReaction: false,
//       replyLikes: reply.replyLikes || 0,
//       replies: reply.replies || [],
//     })) || []
//   );

//   const [replyingTo, setReplyingTo] = useState<Reply | null>(null);
//   const emojiPickerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
//         setShowEmojiPicker(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLike = (index: number) => {
//     const updatedReplies = [...repliesState];
//     updatedReplies[index].replyReaction = !updatedReplies[index].replyReaction;
//     updatedReplies[index].replyLikes += updatedReplies[index].replyReaction
//       ? 1
//       : -1;
//     setRepliesState(updatedReplies);
//   };

//   const addComment = () => {
//     if (commentValue.trim() === "") return;

//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleString("en-US", {
//       month: "short",
//       day: "2-digit",
//     });

//     const newReply = {
//       id: repliesState.length + 1,
//       content: commentValue,
//       createdAt: formattedDate,
//       user: {
//         profile_picture: "https://picsum.photos/100",
//         id: 1,
//         username: "aleks",
//       },
//       replyLikes: 0,
//       replyReaction: false,
//       replies: [],
//     };

//     if (replyingTo) {
//       // Add the new reply to the specific comment's replies array
//       const updatedReplies = repliesState.map((reply) => {
//         if (reply.id === replyingTo.id) {
//           return {
//             ...reply,
//             replies: [...reply.replies, newReply],
//           };
//         }
//         return reply;
//       });

//       setRepliesState(updatedReplies);
//       setReplyingTo(null); // Reset the reply context
//     } else {
//       setRepliesState([...repliesState, newReply]);
//     }

//     setCommentValue(""); // Clear the comment input after adding
//   };

//   const handleEmojiSelect = (emoji: any) => {
//     setCommentValue(commentValue + emoji.native);
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (event.key === "Enter" && !event.shiftKey) {
//       event.preventDefault();
//       addComment();
//     }
//   };

//   const handleReply = (reply: Reply) => {
//     setReplyingTo(reply); // Set the context of the reply
//     setCommentValue(`@${reply.user.username} `); // Indicate the reply in the input
//   };

//   return (
//     <>
//       {isOpen ? (
//         <div className={styles.commentContainer}>
//           <div className={styles.postLine}></div>
//           {repliesState.map((reply, index) => (
//             <div key={reply.id}>
//               <div className={styles.postComments}>
//                 <div className={styles.postComment}>
//                   <div className={styles.commentAvatarBlock}>
//                     <img
//                       className={styles.commentAvatar}
//                       src={reply.user.profile_picture}
//                       alt="user avatar"
//                     />
//                   </div>
//                   <div className={styles.commentInfo}>
//                     <p className={styles.commentAuthor}>{reply.user.username}</p>
//                     <p className={styles.commentText}>{reply.content}</p>
//                     <div className={styles.commentActionButtons}>
//                       <div className={styles.commentButtons}>
//                         <span className={styles.commentDate}>
//                           {reply.createdAt}
//                         </span>
//                         <button
//                           className={styles.commentReply}
//                           onClick={() => handleReply(reply)}
//                         >
//                           Reply
//                         </button>
//                         <button className={styles.commentShare}>Share</button>
//                       </div>
//                       <div className={styles.commentLikes}>
//                         <button
//                           className={styles.likeButton}
//                           onClick={() => handleLike(index)}
//                         >
//                           {reply.replyReaction ? (
//                             <img src={ClickedHeart} alt="liked" />
//                           ) : (
//                             <img src={nonClickedHeart} alt="isn't liked" />
//                           )}
//                           <span
//                             className={`${styles.numberOfLikes} ${
//                               reply.replyReaction ? styles.numberOfLikesActive : null
//                             }`}
//                           >
//                             {reply.replyLikes}
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {reply.replies.map((subReply) => (
//                   <div
//                     className={styles.subReply}
//                     key={subReply.id}
//                   >
//                     <div className={styles.postComment}>
//                       <div className={styles.commentAvatarBlock}>
//                         <img
//                           className={styles.commentAvatar}
//                           src={subReply.user.profile_picture}
//                           alt="user avatar"
//                         />
//                       </div>
//                       <div className={styles.commentInfo}>
//                         <p className={styles.commentAuthor}>{subReply.user.username}</p>
//                         <p className={styles.commentText}>{subReply.content}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.postLine}></div>
//             </div>
//           ))}
//           <div className={styles.sendMessage}>
//             <div className={styles.commentAvatarBlock}>
//               <img src={currentUser} alt="current user" />
//             </div>
//             <div className={styles.sendMessageContainer}>
//               <textarea
//                 className={styles.messageInput}
//                 placeholder="Message..."
//                 value={commentValue}
//                 onChange={(e) => setCommentValue(e.target.value)}
//                 onKeyDown={handleKeyDown}
//               />
//               <div className={styles.inputButtons}>
//                 <button
//                   className={styles.inputButton}
//                   onClick={() => setShowEmojiPicker((prev) => !prev)}
//                 >
//                   <img src={emoji} alt="emojis logo" />
//                 </button>
//                 {showEmojiPicker && (
//                   <div ref={emojiPickerRef}>
//                     <Picker data={data} onEmojiSelect={handleEmojiSelect} />
//                   </div>
//                 )}
//               </div>
//             </div>
//             <button className={styles.sendMessageButton} onClick={addComment}>
//               <img src={arrow} alt="arrow" />
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }

// export default Comment;
