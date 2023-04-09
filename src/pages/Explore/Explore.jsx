import React, { useState } from "react";
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
import verifiedIcon from "../../resources/images/explore/verified-icon.png";
import arrowUpIcon from "../../resources/images/explore/arrow-up.svg";
import chatIcon from "../../resources/images/explore/chat-icon.svg";
import postShareIcon from "../../resources/images/explore/post-share-icon.svg";
import nonClickedHeart from "../../resources/images/explore/nonclicked-heart.png";
import ClickedHeart from "../../resources/images/explore/clicked-heart.png";
import followUser1 from "../../resources/images/explore/follow-user1.png";
import followUser2 from "../../resources/images/explore/follow-user2.png";
import followUser3 from "../../resources/images/explore/follow-user3.png";
import followUser4 from "../../resources/images/explore/follow-user4.png";
import followUser5 from "../../resources/images/explore/follow-user5.png";

function Explore() {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);

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

  const trends = [
    {
      name: "#Bitcoin",
      postsQuantity: "183k posts",
    },
    {
      name: "NFTs",
      postsQuantity: "423k posts",
    },
    {
      name: "Elon Musk",
      postsQuantity: "124k posts",
    },
    {
      name: "Ethereum",
      postsQuantity: "123k posts",
    },
    {
      name: "OpenAI",
      postsQuantity: "94L posts",
    },
  ];

  const follow = [
    {
      avatar: followUser1,
      name: "Muriel Kub",
    },
    {
      avatar: followUser2,
      name: "Jorge Kling III",
    },
    {
      avatar: followUser3,
      name: "Jeanne Barton",
    },
    {
      avatar: followUser4,
      name: "Neal Crist Jr.",
    },
    {
      avatar: followUser5,
      name: "Guadalupe Conroy",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.newsfeedContainer}>
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
          {newsFeed[1].posts.map((post) => {
            return (
              <div className={styles.post}>
                <img
                  className={styles.postAvatar}
                  src={post.user.image}
                  alt=""
                />
                <div className={styles.postContent}>
                  <div className={styles.postContentInner}>
                    <div className={styles.postInfo}>
                      <div className={styles.postAuthor}>
                        <span className={styles.postAuthorName}>
                          {post.user.name}
                        </span>
                        {post.verified ? (
                          <img
                            className={styles.verifiedUser}
                            src={verifiedIcon}
                            alt=""
                          />
                        ) : null}
                        <span className={styles.postDate}>
                          {post.createdAt}
                        </span>
                      </div>
                      <button className={styles.postSettings}>
                        <span className={styles.postSettingsInner}>...</span>
                      </button>
                    </div>
                  </div>
                  <p className={styles.postText}>{post.content}</p>
                  <img src={post.attachment} alt="" />
                  <div className={styles.postButtons}>
                    <button className={styles.postButton}>
                      <img src={arrowUpIcon} alt="" />
                      <span className={styles.postButtonText}>
                        {post.upScore}
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        const postIndex = newsFeed[1].posts.findIndex(
                          (element) => element.id === post.id
                        );
                        const commentIndex =
                          newsFeed[1].posts[postIndex].replies;

                        if (commentIndex.length > 0) {
                          setComment(!comment);
                        }
                      }}
                      className={styles.postButton}
                    >
                      <img src={chatIcon} alt="" />
                      <span className={styles.postButtonText}>
                        {post.numberOfComments}
                      </span>
                    </button>
                    <button className={styles.postButton}>
                      <img src={postShareIcon} alt="" />
                      <span className={styles.postButtonText}>
                        {post.numberOfShares}
                      </span>
                    </button>
                  </div>
                  {comment & (newsFeed[1].posts[0].replies.length > 0) ? (
                    <>
                      <div className={styles.postLine}></div>
                      {newsFeed[1].posts[0].replies.map((reply) => {
                        return (
                          <>
                            <div className={styles.postComments}>
                              <div className={styles.postComment}>
                                <img
                                  className={styles.commentAvatar}
                                  src={reply.image}
                                  alt=""
                                />
                                <div className={styles.commentInfo}>
                                  <p className={styles.commentAuthor}>
                                    {reply.username}
                                  </p>
                                  <p className={styles.commentText}>
                                    {reply.content}
                                  </p>
                                  <div className={styles.commentActionButtons}>
                                    <div className={styles.commentButtons}>
                                      <span className={styles.commentDate}>
                                        {reply.createdAt}
                                      </span>
                                      <button className={styles.commentReply}>
                                        Reply
                                      </button>
                                      <button className={styles.commentShare}>
                                        Share
                                      </button>
                                    </div>
                                    <div className={styles.commentLikes}>
                                      <button
                                        className={styles.likeButton}
                                        onClick={() => setLike(!like)}
                                      >
                                        {like ? (
                                          <img src={ClickedHeart} alt="liked" />
                                        ) : (
                                          <img
                                            src={nonClickedHeart}
                                            alt="isn't liked"
                                          />
                                        )}
                                        <span
                                          className={`${styles.numberOfLikes} ${
                                            like
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
                            </div>
                          </>
                        );
                      })}
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.rightSidebar}>
        <div className={styles.trends}>
          <h2 className={styles.trendsTitle}>Trends</h2>
          <div className={styles.trendsContent}>
            {trends.map((item, index) => {
              return (
                <div key={index} className={styles.trendsItem}>
                  <div className={styles.trendsInfo}>
                    <span className={styles.trendsName}>{item.name}</span>
                    <span className={styles.trendsPosts}>
                      {item.postsQuantity}
                    </span>
                  </div>
                  <button className={styles.trendsButton}>
                    <span className={styles.trendsButtonInner}>...</span>
                  </button>
                </div>
              );
            })}
            <button className={styles.moreTrendsButton}>Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithNavigation(Explore);
