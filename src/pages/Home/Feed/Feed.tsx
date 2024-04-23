import React, { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import FeedHeader from "components/Home/FeedHeader";
import FeedCard from "components/Home/FeedCard";
import Post from "pages/Profile/components/Post/indexx"
import { data } from "pages/Profile/utils/config"
import { fetchData, request } from "api/apiService";
import { PostsData, PostsDataChanged } from "pages/Profile/utils/types";

const Feed = () => {
  const [posts, setPosts] = useState<Array<PostsDataChanged>>([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const postsData = await request('http://64.226.94.204:1337/api/posts/postdata/', { method: 'GET', body: {} }, 'application/json');
  //       setPosts(postsData);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);
  const fetchIt = async () => {
    try {
      const data = await fetchData('http://64.226.94.204:1337/api/posts/posts/') as Array<PostsDataChanged>;
      console.log(data);
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchIt();
  }, [])
  return (
    <div className={styles.feedWrapper}>
      <FeedHeader />
      <Post data={posts} />
    </div>
  );
};
export default Feed;
