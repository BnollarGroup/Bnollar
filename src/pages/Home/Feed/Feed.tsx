import React, { FC, useEffect, useState } from "react";
import styles from "./Feed.module.css";

import FeedHeader from "../../../components/Home/FeedHeader";
import FeedCard from "../../../components/Home/FeedCard";

const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
        <FeedHeader/>
        <FeedCard/>
        <FeedCard/>
    </div>
  );
};
export default Feed;