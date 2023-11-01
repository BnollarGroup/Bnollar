// import WithNavigation from "hoc/WithNavigation";
import styles from "./Explore.module.css";
import { useState } from "react";
import { dataBase } from "pages/Explore/data";
import { DataType } from "pages/Explore/types";
import Post from "pages/Explore/components/Post/Post";
import RightSideBar from "pages/Explore/components/RightSideBar/RightSideBar";
import Layout from "providers/Layout";
import Navbar from "components/Navbar";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";
import MobileNavBar from "components/MobileNavBar";

function Explore() {
  const [data] = useState<DataType[]>(dataBase);

  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.leftSideBarContainer}>
          <LeftSideBar />
        </div>

        <div className={styles.newsFeedContainer}>
          <h1 className={styles.title}>Explore</h1>

          <div className={styles.categoryButtons}>
            <button className={styles.categoryButton}>Recommended</button>
            <button className={styles.categoryButton}>Business</button>
            <button className={styles.categoryButton}>Creative</button>
            <button className={styles.categoryButton}>Education</button>
            <button className={styles.categoryButton}>Entertainment</button>
            <button className={styles.categoryButton}>Fashion & Beauty</button>
          </div>

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
        <RightSideBar />
      </div>
      <div className={styles.MobileNavBarWrapper}>
        <MobileNavBar />
      </div>
    </Layout>
  );
}

export default Explore;
