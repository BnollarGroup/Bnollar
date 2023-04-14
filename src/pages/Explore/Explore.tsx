import { useState } from "react";
import WithNavigation from "../../HOCs/WithNavigation/WithNavigation";
import styles from "./Explore.module.css";
import followUser1 from "../../resources/images/explore/follow-user1.png";
import followUser2 from "../../resources/images/explore/follow-user2.png";
import followUser3 from "../../resources/images/explore/follow-user3.png";
import followUser4 from "../../resources/images/explore/follow-user4.png";
import followUser5 from "../../resources/images/explore/follow-user5.png";
import { dataBase } from "../../components/Explore/data";
import { DataType } from "../../components/Explore/types";
import Post from "../../components/Explore/Post/Post";

function Explore() {
  const [data, setData] = useState<DataType[]>(dataBase);

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
          {data.map((dataItem: DataType, index: number) => {
            return <Post dataItem={dataItem} />;
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
        <div className={styles.follow}>
          <h2 className={styles.followTitle}>Who to follow</h2>
          <div className={styles.followContent}>
            {follow.map((item, index) => {
              return (
                <div key={index} className={styles.followItem}>
                  <div className={styles.followInfo}>
                    <img src={item.avatar} alt="" />
                    <span className={styles.followName}>{item.name}</span>
                  </div>
                  <button className={styles.followButton}>Follow</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithNavigation(Explore);
