import Navbar from "components/Navbar";
import Feed from "./Feed/Feed";
import styles from "./Home.module.css";
import RightSideBar from "./RightSideBar/RighSideBar";
import Layout from "providers/Layout";
import Rightnavbar from "components/RightNavbar";
import LeftSideBar from "components/LeftSidebar";
import MobileNavbar from "components/MobileNavbar";

export default function Home() {
  return (
    <Layout>
      <div className={styles.homeWrapper}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.LeftSideBar}>
            <LeftSideBar />
          </div>
          <div className={styles.feedContainer}>
            <Feed />

          </div>
          <div className={styles.RightSideBar}>
            <RightSideBar />
          </div>
        </div>
        <div className={styles.MobileNavbar}>
          <MobileNavbar/>
        </div>
      </div>
    </Layout>
  );
}