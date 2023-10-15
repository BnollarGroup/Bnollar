import React, { FC } from "react";
import Navbar from "components/Navbar";
import Feed from "./Feed/Feed";
import styles from "./Home.module.css";
import LeftSideBar from "./Leftsidebar/LeftSideBar";
import RighSideBar from "./RightSideBar/RighSideBar";

const Home: FC = () => {
  return (
    <div className={styles.homeWrapper}>
      <Navbar />
      <div className={styles.main}>
        <LeftSideBar />
        <Feed />
        <RighSideBar />
      </div>
    </div>
  );
};
export default Home;

// import { FC } from 'react'
// import Feed from 'components/Home/Feed/Feed'
// import RightSidebar from 'components/Home/RightSidebar/RightSidebar'
// import WithNavigation from 'HOCs/WithNavigation/WithNavigation'
// const Home: FC = () => {
//   return (
//     <>
//       <Feed />
//       <RightSidebar />
//     </>
//   )
// }
// export default WithNavigation(Home)
