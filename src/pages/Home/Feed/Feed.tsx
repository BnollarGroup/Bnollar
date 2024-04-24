// import React, { useEffect, useState } from "react";
// import styles from "./Feed.module.css";
// import FeedHeader from "components/Home/FeedHeader";
// import FeedCard from "components/Home/FeedCard";
// import Post from "pages/Profile/components/Post/indexx"
// import { data } from "pages/Profile/utils/config"
// import { fetchData, request } from "api/apiService";
// import { DataType, PostsData, PostsDataChanged } from "pages/Profile/utils/types";

// const Feed = () => {
//   const [posts, setPosts] = useState<Array<DataType>>([]);

//   // useEffect(() => {
//   //   const fetchPosts = async () => {
//   //     try {
//   //       const postsData = await request('http://64.226.94.204:1337/api/posts/postdata/', { method: 'GET', body: {} }, 'application/json');
//   //       setPosts(postsData);
//   //     } catch (error) {
//   //       console.error('Error fetching posts:', error);
//   //     }
//   //   };

//   //   fetchPosts();
//   // }, []);
//   const fetchIt = async () => {
//     try {
//       const data = await fetchData('http://64.226.94.204:1337/api/posts/posts/') as Array<DataType>;
//       console.log(data);
//       setPosts(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   useEffect(() => {
//     fetchIt();
//   }, [])
//   return (
//     <div className={styles.feedWrapper}>
//       <FeedHeader />
//       <Post data={posts} />
//     </div>
//   );
// };
// export default Feed;

import React, { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import FeedHeader from "components/Home/FeedHeader";
import Post from "pages/Profile/components/Post/indexx";
import { fetchData } from "api/apiService";
import { PostData } from "pages/Profile/utils/types";

const Feed = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetchData<PostData[]>('http://64.226.94.204:1337/api/posts/posts/');
      setPosts(response); // Assuming response is an array of posts
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.feedWrapper}>
      <FeedHeader />
      <Post posts={posts} />
    </div>
  );
};

export default Feed;
