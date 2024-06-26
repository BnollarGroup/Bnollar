// import { useState } from "react";
// import { ConfigType } from "../../utils/types";
// import styles from "./Comment.module.css";
// import nonClickedHeart from "lib/resources/images/explore/nonclicked-heart.png";
// import ClickedHeart from "lib/resources/images/explore/clicked-heart.png";
// import arrow from "lib/resources/images/explore/arrow.png";
// import attachment from "lib/resources/images/explore/attachment.svg";
// import statsReport from "lib/resources/images/explore/stats-report.svg";
// import emoji from "lib/resources/images/explore/emoji.svg";
// import currentUser from "lib/resources/images/explore/current-user.png";

// interface CommentProps {
//   post: ConfigType;
//   isOpen: boolean;
// }

// function Comment(props: CommentProps) {
//   const { post, isOpen } = props;

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
//                       src={reply.image}
//                       alt="user avatar"
//                     />
//                   </div>
//                   <div className={styles.commentInfo}>
//                     <p className={styles.commentAuthor}>{reply.username}</p>
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
//                             className={`${styles.numberOfLikes} ${
//                               reply.replyReaction
//                                 ? styles.numberOfLikesActive
//                                 : null
//                             }`}
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
//               />
//               <div className={styles.inputButtons}>
//                 <button className={styles.inputButton}>
//                   <img src={attachment} alt="attachment logo" />
//                 </button>
//                 <button className={styles.inputButton}>
//                   <img src={statsReport} alt="stats report logo" />
//                 </button>
//                 <button className={styles.inputButton}>
//                   <img src={emoji} alt="emojis logo" />
//                 </button>
//               </div>
//             </div>
//             <button className={styles.sendMessageButton}>
//               <img src={arrow} alt="arrow" />
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }

// export default Comment;

export const x = "x";
