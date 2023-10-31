import styles from "./RightSideBar.module.css";
import followUser1 from "lib/resources/images/explore/follow-user1.png";
import followUser2 from "lib/resources/images/explore/follow-user2.png";
import followUser3 from "lib/resources/images/explore/follow-user3.png";
import followUser4 from "lib/resources/images/explore/follow-user4.png";
import followUser5 from "lib/resources/images/explore/follow-user5.png";

function RightSideBar() {
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
                  <div className={styles.followPerson}>
                    <span className={styles.followName}>{item.name}</span>
                    <button className={styles.followButton}>Follow</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
