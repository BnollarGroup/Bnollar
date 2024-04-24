import { data } from "./utils/config";
import Layout from "providers/Layout";
import Navbar from "components/Navbar";
import style from "./Explore.module.css";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MobileNavBar from "components/MobileNavbar";
import CategoryButtons from "./components/CategoryButtons";
import Post from "pages/Profile/components/Post/indexx";
import { useEffect, useState } from "react";
import { PostData } from "pages/Profile/utils/types";
import { fetchData } from "api/apiService";
const categories = [
  "Recommended",
  "Business",
  "Creative",
  "Education",
  "Entertainment",
  "Fashion & Beauty",
];
function Explore() {
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
    <Layout>
      <div className={style.container}>
        <Navbar />
        <div className={style.content}>
          <div className={style.leftSideBar}>
            <LeftSidebar />
          </div>

          <div className={style.newsFeedContainer}>
            <h1 className={style.title}>Explore</h1>

            <CategoryButtons categories={categories} />

            <div className={style.newsFeed}>
              {/* {posts?.map((post) => (
                <Post data={data[0]} key={post.id} />
              ))} */}
              <Post posts={posts} />
            </div>
          </div>

          <div className={style.rightSideBarWrapper}>
            <RightSidebar />
          </div>
        </div>
      </div>

      <div className={style.MobileNavBarWrapper}>
        <MobileNavBar />
      </div>
    </Layout>
  );
}

export default Explore;
