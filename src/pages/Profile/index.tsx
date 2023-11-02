import { useState } from "react";
import Navbar from "components/Navbar";
import style from "./Profile.module.css";
import Grid from "lib/resources/images/icons/view-grid.png";
import StatsReport from "lib/resources/images/icons/stats-report.png";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";
import Layout from "providers/Layout";
import Tabs from "components/Tabs";
import UserInformation from "./components/UserInformation";
import Post from "./components/Post";
import WritePost from "components/Home/FeedHeader";
import MobileNavBar from "components/MobileNavBar";
import InformationSection from "./components/InformationSection";
import { data } from "./utils/config";

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
            <InformationSection />

            <Tabs
              pages={tabsPages}
              value={currentTab}
              onChange={setCurrentTab}
            />

            <div className={style.gap}>
              <div className={style.tabsLine}></div>

              <div className={style.postContainer}>
                <div className={style.posts}>
                  <div className={style.writePost}>
                    <WritePost />
                  </div>

                  {data.map((item, index: number) => {
                    return (
                      <div key={index}>
                        <Post data={item} />
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
