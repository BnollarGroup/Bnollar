
// import React, { useState } from "react";
// import styles from "./Buttons.module.css";
// import upvote from "../../resources/images/icons/upvote.svg";
// import upvoteOn from "../../resources/images/icons/arrow-up-circled.svg";
// import chat from "../../resources/images/icons/chat.svg";
// import chatOn from "../../resources/images/icons/chatOn.svg";
// import share from "../../resources/images/icons/share.svg";


// export const UpvoteButton = () => {
//   const [showUpVote, setShowUpVote] = useState(false);
//   const handleUpvoteClick = () => {
//     setShowUpVote((prevState) => !prevState);
//   };
//   return (
//     <button
//       className={showUpVote ? styles.upvote : "none"}
//       onClick={handleUpvoteClick}
//     >
//       <img src={showUpVote ? upvoteOn : upvote} alt="vote" />
//       {showUpVote ? "442" : "Upvote"}
//     </button>
//   );
// };

// export const CommnetButton = ()=>{
//   const [showComment,setShowComment] = useState(false)
//   const handleCommentClick = () => {
//     setShowComment((prevState) => !prevState);
//   };
//     return (
//       <button
//       className={showComment ? styles.upvote : "none"}

import { useState } from 'react'
import styles from './Buttons.module.css'
import upvote from '../../resources/images/icons/upvote.svg'
import upvoteOn from '../../resources/images/icons/arrow-up-circled.svg'
import chat from '../../resources/images/icons/chat.svg'
import chatOn from '../../resources/images/icons/chatOn.svg'
import share from '../../resources/images/icons/share.svg'

export const UpvoteButton = () => {
  const [showUpVote, setShowUpVote] = useState(false)
  const handleUpvoteClick = () => {
    setShowUpVote((prevState) => !prevState)
  }
  return (
    <button
      className={showUpVote ? styles.upvote : 'none'}
      onClick={handleUpvoteClick}
    >
      <img src={showUpVote ? upvoteOn : upvote} alt="vote" />
      {showUpVote ? '442' : 'Upvote'}
    </button>
  )
}

export const CommnetButton = () => {
  const [showComment, setShowComment] = useState(false)
  const handleCommentClick = () => {
    setShowComment((prevState) => !prevState)
  }
  return (
    <button
      className={showComment ? styles.upvote : 'none'}
      onClick={handleCommentClick}
    >
      <img src={showComment ? chatOn : chat} alt="Comment" />
      Comment
    </button>

    )
}

export const ShareButton = () => {
  const [showShare, setShowShare] = useState(false)

  const handleShareClick = () => {
    setShowShare((prevState) => !prevState)
  }

  return (
    <>
      <button
        className={`${styles.share} ${styles.styled_button}`}
        onClick={handleShareClick}
      >
        <img src={share} alt="share" />
        Share
      </button>
      {showShare && (
        <div className={styles.shareDropDown}>
          <div className={styles.shareButton}>
            <button className={styles.styled_button}>Send</button>
          </div>
          <div className={styles.shareButton}>
            <button className={styles.styled_button}>Share to Facebook</button>
          </div>
          <div className={styles.shareButton}>
            <button className={styles.styled_button}>Share to Twitter</button>
          </div>
          <div className={styles.shareButton}>
            <button className={styles.styled_button}>Iframe</button>
          </div>
        </div>
      )}
    </>
  )
}

// export const ShareButton = ()=>{
//   const [showShare, setShowShare] = useState(false);

//     const handleShareClick = () => {
//         setShowShare((prevState) => !prevState);
//       };
//     return (
//         <>
//         <button className={styles.share} onClick={handleShareClick}>
//         <img src={share} alt="share"/>
//         Share
//       </button>
//       {showShare &&
//             <div className={styles.shareDropDown}>
//                 <div className={styles.shareButton}>
//                     <button>Send</button>
//                 </div>
//                 <div className={styles.shareButton}>
//                     <button>Share to Facebook</button>
//                 </div>
//                 <div className={styles.shareButton}>
//                     <button>Share to Twitter</button>
//                 </div>
//                 <div className={styles.shareButton}>
//                     <button>Iframe</button>
//                 </div>
//             </div>
//             }
//      </>
//     )
// }

//   )
// }

// export const ShareButton = () => {
//   const [showShare, setShowShare] = useState(false)

//   const handleShareClick = () => {
//     setShowShare((prevState) => !prevState)
//   }

//   return (
//     <>
//       <button
//         className={`${styles.share} ${styles.styled_button}`}
//         onClick={handleShareClick}
//       >
//         <img src={share} alt="share" />
//         Share
//       </button>
//       {showShare && (
//         <div className={styles.shareDropDown}>
//           <div className={styles.shareButton}>
//             <button className={styles.styled_button}>Send</button>
//           </div>
//           <div className={styles.shareButton}>
//             <button className={styles.styled_button}>Share to Facebook</button>
//           </div>
//           <div className={styles.shareButton}>
//             <button className={styles.styled_button}>Share to Twitter</button>
//           </div>
//           <div className={styles.shareButton}>
//             <button className={styles.styled_button}>Iframe</button>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }
