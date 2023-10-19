import Navbar from "components/Navbar";
import Feed from "./Feed/Feed";
import styles from "./Home.module.css";
import RighSideBar from "./RightSideBar/RighSideBar";
import Layout from "providers/Layout";
import Rightnavbar from "components/RightNavbar";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";

export default function Home() {
  return (
    <Layout>
      <div className={styles.homeWrapper}>
        <Navbar />
        <div className={styles.main}>
          <LeftSideBar />
          <Feed />
          <RighSideBar />
        </div>
      </div>
    </Layout>
  );
}

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
