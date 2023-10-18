import { useState } from "react";
import Navbar from "components/Navbar";
import style from "./Profile.module.css";
import Cover from "lib/resources/images/icons/cover (2).png";
import UserIcon from "lib/resources/images/icons/user-icon.png";
import Verifed from "lib/resources/images/icons/twitter-verified-badge.png";
import Instagram from "lib/resources/images/icons/instagram.png";
import Grid from "lib/resources/images/icons/view-grid.png";
import UserFeedPic from "lib/resources/images/icons/userfeedpic.png";
import PostImg from "lib/resources/images/icons/post-img.png";
import MeriaLogo from "lib/resources/images/icons/briefcase.png";
import Edit from "lib/resources/images/icons/edit (2).png";
import Twitter from "lib/resources/images/icons/_Twitter (2).png";
import Discord from "lib/resources/images/icons/Discord.png";
import StatsReport from "lib/resources/images/icons/stats-report.png";
import LeftSideBar from "pages/Home/Leftsidebar/LeftSideBar";
import Icon from "../../lib/resources/images/icons/edit.png";
import Layout from "providers/Layout";
import Tabs from "components/Tabs";

export type Page = "feed" | "NFTs" | "media";

function Profile() {
  const [openCover, setOperCover] = useState(false);

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
              <div className={style.user_name}>
                <h1>Christoh1her Reinger</h1>
                <img src={Verifed} />
              </div>
              <div className={style.user_about}>
                <p>
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
                <div className={style.upload_news_author_pic}>
                  <img src={UserFeedPic} />
                </div>
              </div>
              {/* <div className={style.upload_news}>
                <div className={style.upload_news_author_pic}>
                  <img src={UserFeedPic} />
                </div>
                <div className={style.upload_news_desc}>
                  <div className={style.user_name}>
                    <p>Christopher Williams</p>
                    <img src={Verifed} />
                    <span>14 Dec</span>
                  </div>
                  <p>
                    #Bitcoin seems to be doing exactly what its done for about a
                    year. Strong sell-off, consolidate & slow grind up, create a
                    bear flag, RSI breaks down its trend line, bear flag breaks
                    down for another strong sell-off and the cycle begins again.
                  </p>
                  <div className={style.rate_btns}>
                    <div className={style.upvote}>
                      <button>Upvote</button>
                    </div>
                    <div className={style.comment}>
                      <button>Comment</button>
                    </div>
                    <div className={style.share}>
                      <button>Share</button>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className={style.post}>
                <div className={style.post_box}>
                  <div className={style.upload_news_author_pic}>
                    <img src={UserFeedPic} />
                  </div>
                  <div className={style.upload_news_desc}>
                    <div className={style.user_name}>
                      <p>Christopher Williams</p>
                      <img src={Verifed} />
                      <span>14 Dec</span>
                    </div>
                    <p>I am selling this NFT from Clone x collection</p>
                    <div className={style.post_img}>
                      <img src={PostImg} />
                    </div>
                    <div className={style.buy_now}>
                      <div className={style.price}>
                        <p>Clone X</p>
                        <p>445 ETH</p>
                      </div>
                      <div className={style.buy_btn}>
                        <button>BUY NOW</button>
                      </div>
                    </div>
                    <div className={style.btns}>
                      <div className={style.upvote}>
                        <button>433</button>
                      </div>
                      <div className={style.comment}>
                        <button>Comment</button>
                      </div>
                      <div className={style.share}>
                        <button>Share</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className={style.feed_leftsideinformation}>
              <div className={style.about_box}>
                <div className={style.edit_info}>
                  <p>About</p>
                  <a href="" className={style.editInfo}>Edit Information</a>
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
