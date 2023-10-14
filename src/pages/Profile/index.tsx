import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import style from "./Profile.module.css";
import Rightnavbar from "components/RightNavbar";
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

function Profile() {
  const [openCover, setOperCover] = useState(false);
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

  return (
    <div>
      <Navbar />
      <div className={style.profilemain}>
        <div className={style.profileright}>
          <Rightnavbar />
        </div>
        <div className={style.profileleft}>
          <div className={style.profilecover}>
            <img src={Cover} />
            <div>
              <button
                onClick={openCoverEdit}
                className={style.editcoverpicture}
              >
                Edit Cover Photo
              </button>
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
                <h1>Christopher Reinger</h1>
                <img src={Verifed} />
              </div>
              <div className={style.user_about}>
                <p>
                  I am a hard-working and driven individual who isn't afraid to
                  face a challenge.
                </p>
                <div className={style.user_ceo}>
                  <h1>CEO at</h1>
                  <span>SAMSDS</span>
                </div>
                <div className={style.followers_following}>
                  <h1>124 Follower</h1>
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
          <div className={style.user_feed}>
            <div className={style.feed_box}>
              <div className={style.newsexmpl}>
                <div className={style.newsflex}>
                  <img src={Grid} />
                  <h1>Feed</h1>
                </div>
                <div className={style.menuline}></div>
              </div>
              <div className={style.news}>
                <img src={StatsReport} />
                <h1>NFTs</h1>
              </div>
              <div className={style.news}>
                <img src={StatsReport} />
                <h1>Media</h1>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
          <div className={style.news_feed}>
            <div className={style.feed_rightside}>
              <div className={style.upload_news}>
                <div className={style.upload_news_author_pic}>
                  <img src={UserFeedPic} />
                </div>
                <div className={style.upload_news_desc}>
                  <div className={style.user_name}>
                    <h1>Christopher Williams</h1>
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
              </div>
              <div className={style.post}>
                <div className={style.post_box}>
                  <div className={style.upload_news_author_pic}>
                    <img src={UserFeedPic} />
                  </div>
                  <div className={style.upload_news_desc}>
                    <div className={style.user_name}>
                      <h1>Christopher Williams</h1>
                      <img src={Verifed} />
                      <span>14 Dec</span>
                    </div>
                    <p>I am selling this NFT from Clone x collection</p>
                    <div className={style.post_img}>
                      <img src={PostImg} />
                    </div>
                    <div className={style.buy_now}>
                      <div className={style.price}>
                        <h1>Clone X</h1>
                        <h1>445 ETH</h1>
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
              </div>
            </div>
            <div className={style.feed_leftsideinformation}>
              <div className={style.about_box}>
                <div className={style.edit_info}>
                  <h1>About</h1>
                  <h1>Edit Information</h1>
                </div>
                <div className={style.user_description}>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <h1>Worked at Meria</h1>
                  </div>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <h1>Former Pianist at Alla Pugacheva Band</h1>
                  </div>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <h1>Studied at Georgian Technical University</h1>
                  </div>
                  <div className={style.about_user_desc}>
                    <img src={MeriaLogo} />
                    <h1>Lives in Yerevan, Armenia </h1>
                  </div>
                </div>
              </div>
              <div className={style.friend_box}>
                <div className={style.friends}>
                  <h1>Friends 133</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
