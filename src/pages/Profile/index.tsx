import { useState } from "react";
import Navbar from "components/Navbar";
import style from "./Profile.module.css";
import Grid from "lib/resources/images/icons/view-grid.png";
import StatsReport from "lib/resources/images/icons/stats-report.png";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";
import Layout from "providers/Layout";
import Tabs from "components/Tabs";
import UserInformation from "./components/UserInformation";
import User from "./components/User";
import Post from "./components/Post";
import { dataBase as data } from "./components/Post/data";
import { DataType } from "./components/Post/types.d";
import WritePost from "components/Home/FeedHeader";
import MobileNavBar from "components/MobileNavBar";

export type TabPage = "feed" | "NFTs" | "media";

function Profile() {
  const tabsPages: { page: TabPage; icon: any }[] = [
    {
      page: "feed",
      icon: Grid,
    },
    {
      page: "NFTs",
      icon: StatsReport,
    },
    { page: "media", icon: StatsReport },
  ];

  const [currentTab, setCurrentTab] = useState<TabPage>("feed");
  return (
    <div className={style.mainContainer}>
      <Layout>
        <div className={style.Navbar}>
          <Navbar />
        </div>

        <div className={style.container}>
          <div className={style.LeftSideBar}>
            <LeftSideBar />
          </div>

          <div className={style.userContainer}>
            <User />

            <Tabs
              pages={tabsPages}
              currentPage={currentTab}
              setCurrentPage={setCurrentTab}
            />

            <div className={style.gap}>
              <div className={style.tabsLine}></div>

              <div className={style.postContainer}>
                <div className={style.posts}>
                  <div className={style.writePost}>
                    <WritePost />
                  </div>

                  {data.map((dataItem: DataType, index: number) => {
                    return (
                      <div key={index}>
                        <Post dataItem={dataItem} />
                      </div>
                    );
                  })}
                </div>

                <div className={style.profileInformation}>
                  <UserInformation />
                </div>
              </div>
            </div>

            <div className={style.MobileNavBar}>
              <MobileNavBar />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Profile;
