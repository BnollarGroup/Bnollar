import React from "react";
import WithNavigation from "../../HOCs/WithNavigation/WithNavigation";
import styles from "./Explore.module.css";
import currentUserImage from "../../resources/images/explore/current-user.png";
import userOneImage from "../../resources/images/explore/post-user1.png";
import userTwoImage from "../../resources/images/explore/post-user2.png";
import userThreeImage from "../../resources/images/explore/post-user3.png";
import postTwoUserImage from "../../resources/images/explore/post2-user.png";
import postThreeUserImage from "../../resources/images/explore/post3-user.png";
import postTwoAttachment from "../../resources/images/explore/post2-attachment.png";
import postThreeAttachment from "../../resources/images/explore/post3-attachment.png";

function Explore() {
  
  const newsFeed = [
    {
      currentUser: {
        image: currentUserImage,
      },
    },
    {
      posts: [
        {
          id: 1,
          user: {
            name: "Feral",
            image: userOneImage,
          },
          content: "Giving away a FREE NFT to someone who likes this tweet",
          createdAt: "Dec 14",
          verified: true,
          upScore: "17.k",
          numberOfComments: "354",
          numberOfShares: "234",
          attachment: "",
          replies: [
            {
              id: 1,
              username: "Namesax",
              image: userTwoImage,
              content:
                "The toughest designs for beginners are ones without any nice illustrations or photos to make them pleasant to the eye. In this post I’ll show you how to create the right hierarchy for a minimal product card without any graphics.",
              createdAt: "Dec 14",
              replyLikes: "4",
            },
            {
              id: 2,
              username: "Namesax",
              image: userThreeImage,
              content: "Love this NFT Collection for real.",
              createdAt: "Dec 14",
              replyLikes: "1",
            },
          ],
        },
        {
          id: 2,
          user: {
            name: "Sonko Wa Mashamba",
            image: postTwoUserImage,
          },
          content: "Elon musk has changed Twitter like button from ❤️ to ❤️",
          createdAt: "Dec 14",
          verified: false,
          upScore: "7.3k",
          numberOfComments: "143",
          numberOfShares: "72",
          attachment: postTwoAttachment,
          replies: [],
        },
        {
          id: 3,
          user: {
            name: "CryptoBullet",
            image: postThreeUserImage,
          },
          content:
            "Imagine if there’s no dip No way? Go watch Q2 2019 #Bitcoin",
          createdAt: "Dec 14",
          verified: false,
          upScore: "7.3k",
          numberOfComments: "143",
          numberOfShares: "72",
          attachment: postThreeAttachment,
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore</h1>
      <div className={styles.categoryButtons}>
        <button className={styles.categoryButton}>Recommended</button>
        <button className={styles.categoryButton}>Business</button>
        <button className={styles.categoryButton}>Creative</button>
        <button className={styles.categoryButton}>Education</button>
        <button className={styles.categoryButton}>Entertainment</button>
        <button className={styles.categoryButton}>Fashion & Beauty</button>
      </div>
      <div className={styles.newsFeed}>
        <div className={styles.post}></div>
      </div>
    </div>
  );
}

export default WithNavigation(Explore);
