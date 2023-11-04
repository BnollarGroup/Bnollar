import { data } from "./utils/config";
import Layout from "providers/Layout";
import Navbar from "components/Navbar";
import style from "./Explore.module.css";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MobileNavBar from "components/MobileNavbar";
import CategoryButtons from "./components/CategoryButtons";
import Post from "components/Post";

function Explore() {
  const posts = data[0].posts;

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.navbarWrapper}>
          <Navbar />
        </div>

        <div className={style.content}>
          <div className={style.leftSideBarWrapper}>
            <LeftSidebar />
          </div>

          <div className={style.newsFeedContainer}>
            <h1 className={style.title}>Explore</h1>

            <CategoryButtons />

            <div className={style.newsFeed}>
              {posts?.map((post) => (
                <Post data={post} key={post.id} />
              ))}
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
