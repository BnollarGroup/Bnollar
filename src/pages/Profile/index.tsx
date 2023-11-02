import { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import style from "./Profile.module.css";
import UserIcon from "lib/resources/images/icons/user-icon.png";
import Verifed from "lib/resources/images/icons/twitter-verified-badge.png";
import Grid from "lib/resources/images/icons/view-grid.png";
import PostImg from "lib/resources/images/icons/post-img.png";
import Edit from "lib/resources/images/icons/edit (2).png";
import StatsReport from "lib/resources/images/icons/stats-report.png";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";
import Layout from "providers/Layout";
import Tabs from "components/Tabs";
import horiz from "lib/resources/images/profile-chat/more-horiz.png";
// import ProfileEditDetailsModal from "providers/Modals/Profile/EditDetails";
import FeedHeader from "components/Home/FeedHeader";
import UserInformation from "./components/UserInformation"
import Cover from "pages/Profile/components/ProfileCover";
// import EditCoverImg from "./components/User/component/ProfileCover/EditCoverImg"
import RighSideBar from "pages/Home/RightSideBar/RighSideBar";
import AboutProfile from "pages/Profile/components/aboutProfile";
import User from "./components/User"
import Post from "./components/Post"
import { dataBase } from "./components/Post/data";
import { DataType } from "./components/Post/types.d";
import WritePost from "components/Home/FeedHeader"
import MobileNavBar from "components/MobileNavBar";

export type Page = "feed" | "NFTs" | "media";

function Profile() {

  const [openCover, setOperCover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data] = useState<DataType[]>(dataBase);

  const pages: { page: Page; icon: any }[] = [
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

  let editcover;
  if (openCover) {
    editcover = (
      <div className={style.opencovereditdrop}>
        <button className={style.dropcoverbtn}>Upload Photo</button>
        <button className={style.dropcoverbtn}>Reposition</button>
        <button className={style.dropcoverbtn}>Remove</button>
      </div>
    );
  }

  function openCoverEdit() {
    setOperCover(true);
  }

  const [openProfilePic, setProfilePic] = useState(false);
  let profilePicEdit;
  if (openProfilePic) {
    profilePicEdit = (
      <div className={style.profilepicedit}>
        <button className={style.dropcoverbtn}>Upload Photo</button>
        <button className={style.dropcoverbtn}>Remove</button>
      </div>
    );
  }

  function openProfile() {
    setProfilePic(true);
  }

  const [currentPage, setCurrentPage] = useState<Page>("feed");
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
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
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