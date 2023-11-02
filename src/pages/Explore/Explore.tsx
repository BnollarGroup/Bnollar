import React, { useState } from "react";
import { DataType } from "./types";
import { dataBase } from "./data";
import Layout from "providers/Layout";
import Navbar from "components/Navbar";
import styles from "./Explore.module.css";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";
import Post from "./components/Post/Post";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import MobileNavBar from "components/MobileNavBar";

function Explore() {
  const [data] = useState<DataType[]>(dataBase);

  return (
    <Layout>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.leftSideBarWrapper}>
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
              <button className={styles.categoryButton}>
                Fashion & Beauty
              </button>
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
