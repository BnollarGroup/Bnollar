import { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import style from "./Profile.module.css";
import Cover from "lib/resources/images/icons/cover (2).png";
import UserIcon from "lib/resources/images/icons/user-icon.png";
import Verifed from "lib/resources/images/icons/twitter-verified-badge.png";
import Instagram from "lib/resources/images/icons/instagram.png";
import Grid from "lib/resources/images/icons/view-grid.png";
import PostImg from "lib/resources/images/icons/post-img.png";
import MeriaLogo from "lib/resources/images/icons/briefcase.png";
import Edit from "lib/resources/images/icons/edit (2).png";
import Twitter from "lib/resources/images/icons/_Twitter (2).png";
import Discord from "lib/resources/images/icons/Discord.png";
import StatsReport from "lib/resources/images/icons/stats-report.png";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";
import Icon from "../../lib/resources/images/icons/edit.png";
import Layout from "providers/Layout";
import Tabs from "components/Tabs";
import uploadIcon from "lib/resources/images/profile-chat/attachment.svg"
import statsReport from "lib/resources/images/profile-chat/stats-report.svg"
import emoji from "lib/resources/images/profile-chat/emoji.svg"
import language from "lib/resources/images/profile-chat/language.png"
import horiz from "lib/resources/images/profile-chat/more-horiz.png"
import { UpvoteButton, CommnetButton, ShareButton } from "components/Buttons";
import ProfileEditDetailsModal from "providers/Modals/Profile/EditDetails"



export type Page = "feed" | "NFTs" | "media";

function Profile() {
  const [openCover, setOperCover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

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
    <Layout>
        <Navbar />
      <div className={style.profilemain}>
        <div className={style.profileright}>
          <LeftSideBar />
        </div>
        <div className={style.profileleft}>
          <div className={style.profilecover}>
            <div className={style.coverContent}>
              <img src={Cover} alt="Cover" />
              <div className={style.editButtonContainer}>
                <img src={Icon} alt="" className={style.editIcon} />
                <button
                  onClick={openCoverEdit}
                  className={style.editcoverpicture}
                >
                  Edit Cover Photo
                </button>
              </div>
              {editcover}
            </div>
          </div>
          <div className={style.aboutuser}>
            <div className={style.aboutuserright}>
              <div className={style.userimg}>
                <img src={UserIcon} />
                <div>
                  <img
                    onClick={openProfile}
                    className={style.edit}
                    src={Edit}
                    alt=""
                  />
                  {profilePicEdit}
                </div>
              </div>

              <div className={style.user_about}>
                <div className={style.user_name}>
                  <h1>Christoh1her Reinger</h1>
                  <img src={Verifed} />
                </div>
                <p className={style.about}>
                  I am a hard-working and driven individual who {`isn't`} afraid
                  to face a challenge.
                </p>
                <div className={style.user_ceo}>
                  <p>CEO at</p>
                  <span>SAMSDS</span>
                </div>
                <div className={style.followers_following}>
                  <p>124 Follower</p>
                  <span>|</span>
                  <h2>100 Following</h2>
                </div>
              </div>

            </div>
            <div className={style.aboutuserleft}>
              <img src={Instagram} />
              <img src={Twitter} />
              <img src={Discord} />
              <button>Follow</button>
              <button className={style.dotbtn}>...</button>
            </div>
          </div>
          <Tabs
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className={style.tabsLine}></div>

          <div className={style.news_feed}>
            <div className={style.feed_rightside}>
              <div className={style.post}>
                <div className={style.postDiv}>
                  <div className={style.upload_news_author_pic}>
                    <img src={UserIcon} className={style.userPostImage} />
                  </div>
                  <input type="text" placeholder="Write you thought" />
                </div>
                <div className={style.tabsLine}></div>
                <div>
                  <div className={style.uploadPost}>
                    <div className={style.postIcons}>
                      <img src={uploadIcon} alt="" />
                      <img src={statsReport} alt="" />
                      <img src={emoji} alt="" />
                    </div>
                    <div className={style.postBtnContainer}>
                      <button className={style.publicBtn}>
                        <img src={language} alt="" />
                        Public
                      </button>
                      <button className={style.postBtn}>
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.post}>
                <div className={style.postDiv}>
                  <div className={style.upload_news_author_pic}>
                    <img src={UserIcon} className={style.userPostImage} />
                  </div>
                  <div className={style.post_container}>

                    <div>
                      <div className={style.user_name_container}>
                        <div className={style.post_user_name}>
                          <h1>Christopher Williams</h1>
                          <img src={Verifed} />
                          <span>Dec 14</span>
                        </div>
                        <div className={style.horiz}>
                          <img src={horiz} alt="" />
                        </div>
                      </div>

                      <div className={style.post_text}>
                        <p>
                          #Bitcoin seems to be doing exactly what its done for about a year. Strong sell-off, consolidate & slow grind up, create a bear flag, RSI breaks down its trend line, bear flag breaks down for another strong sell-off and the cycle begins again.
                        </p>
                      </div>
                    </div>
                    <div className={style.rate_btns}>
                        <UpvoteButton />
                        <CommnetButton/>
                        <ShareButton/>
                    </div>


                  </div>
                </div>
              </div>
              <div className={style.post}>
                <div className={style.postDiv}>
                  <div className={style.upload_news_author_pic}>
                    <img src={UserIcon} className={style.userPostImage} />
                  </div>
                  <div className={style.post_container}>

                    <div>
                      <div className={style.user_name_container}>
                        <div className={style.post_user_name}>
                          <h1>Christopher Williams</h1>
                          <img src={Verifed} />
                          <span>Dec 14</span>
                        </div>
                        <div className={style.horiz}>
                          <img src={horiz} alt="" />
                        </div>
                      </div>

                      <div className={style.post_text}>
                        <p>
                          #Bitcoin seems to be doing exactly what its done for about a year. Strong sell-off, consolidate & slow grind up, create a bear flag, RSI breaks down its trend line, bear flag breaks down for another strong sell-off and the cycle begins again.
                        </p>
                      </div>
                    </div>
                    <img src={PostImg} alt="" />
                    <div className={style.rate_btns}>
                        <UpvoteButton />
                        <CommnetButton/>
                        <ShareButton/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.feed_leftsideinformation}>
              <div className={style.about_box}>
                <div className={style.edit_info}>
                  <p>About</p>
                  <a href="#" className={style.editInfo} onClick={openModal}>
                    Edit Information
                  </a>

                  {isModalOpen && (
                    <ProfileEditDetailsModal />
                  )}
                </div>
                <div className={style.user_description}>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <p>Worked at Meria</p>
                  </div>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <p>Former Pianist at Alla Pugacheva Band</p>
                  </div>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <p>Studied at Georgian Technical University</p>
                  </div>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <p>Lives in Yerevan, Armenia </p>
                  </div>
                </div>
              </div>
              <div className={style.friend_box}>
                <div className={style.friends}>
                  <p>Friends</p>
                  <p className={style.friendMembers}>133</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;