import WithNavigation from "../../HOCs/WithNavigation/WithNavigation";
import styles from "./Explore.module.css";
import { useState } from "react";
import { dataBase } from "../../components/Explore/data";
import { DataType } from "../../components/Explore/types";
import Post from "../../components/Explore/Post/Post";
import RightSideBar from "../../components/Explore/RightSideBar/RightSideBar";

function Explore() {
  const [data] = useState<DataType[]>(dataBase);

  return (
    <div className={styles.container}>
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
  );
}

export default WithNavigation(Explore);
