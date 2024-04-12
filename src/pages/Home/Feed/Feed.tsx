import React from "react";
import styles from "./Feed.module.css";
import FeedHeader from "components/Home/FeedHeader";
import FeedCard from "components/Home/FeedCard";
import Post from "pages/Profile/components/Post"
import { data } from "pages/Profile/utils/config"

const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
      <FeedHeader />
      <Post data={data[0]} />
    </div>
  );
}; 
export default Feed;
