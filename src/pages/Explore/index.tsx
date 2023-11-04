import { useState } from "react";
import { DataType } from "./utils/types";
import { dataBase } from "./utils/config";
import Layout from "providers/Layout";
import Navbar from "components/Navbar";
import styles from "./Explore.module.css";
import LeftSideBar from "components/LeftSidebar";
import Post from "./components/Post";
import RightSideBar from "./components/RightSidebar";
import MobileNavBar from "components/MobileNavbar";
import CategoryButtons from "./components/CategoryButtons";

function Explore() {
  const [data] = useState<DataType[]>(dataBase);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.navbarWrapper}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <div className={styles.leftSideBarWrapper}>
            <LeftSideBar />
          </div>
          <div className={styles.newsFeedContainer}>
            <h1 className={styles.title}>Explore</h1>

            <CategoryButtons />

            <div className={styles.newsFeed}>
              {data.map((dataItem: DataType, index: number) => {
                return (
                  <div key={index}>
                    <Post dataItem={dataItem} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.rightSideBarWrapper}>
            <RightSideBar />
          </div>
        </div>
      </div>
      <div className={styles.MobileNavBarWrapper}>
        <MobileNavBar />
      </div>
    </Layout>
  );
}

export default Explore;
