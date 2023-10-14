import React from "react";
import styles from "./Feed.module.css";

import FeedHeader from "../../../components/Home/FeedHeader";
import FeedCard from "../../../components/Home/FeedCard";

const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
      <FeedHeader />
      <FeedCard />
      <FeedCard isNft={true} />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
};
export default Feed;
