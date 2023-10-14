import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Profile_2.module.css";
import LeftNavBar from "../../components/RightNavBar/rightnavbar";
import CoverPicture from "../../lib/resources/images/icons/coverpic.png";
import Instagram from "../../lib/resources/images/icons/instagram.png";
import Verifed from "../../lib/resources/images/icons/verified.svg";
import Member from "../../lib/resources/images/icons/memeber.png";
import UserPic from "../../lib/resources/images/icons/Ellipse 1.png";
import attachment from "../../lib/resources/images/icons/attachment.png";
import emoji from "../../lib/resources/images/icons/emoji.png";
import statreport from "../../lib/resources/images/icons/stats-report.png";
import PostImg from "../../lib/resources/images/icons/post-img.png";
import UserFeedPic from "../../lib/resources/images/icons/userfeedpic.png";
import language from "../../lib/resources/images/icons/language.png";
import Feed from "../../lib/resources/images/icons/view-grid.png";
import Members from "../../lib/resources/images/icons/memebers.png";
import Media from "../../lib/resources/images/icons/stats-report.png";
import File from "../../lib/resources/images/icons/folder.png";
import Twitter from "../../lib/resources/images/icons/_Twitter (2).png";
import Discord from "../../lib/resources/images/icons/Discord.png";

function Profile_2() {
  return (
    <section>
      <Navbar />
      <div className={style.profile_2_main}>
        <div className={style.profile_2_leftnavbar}>
          <LeftNavBar />
        </div>
        <div className={style.profile_2_middle}>
          <div className={style.coverpicture}>
            <img src={CoverPicture} alt="" />
          </div>
          <div className={style.groupname}>
            <h1>BlockChain Developer</h1>
            <div className={style.social}>
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
              <img src={Discord} alt="" />
              <button>Subscribe</button>
              <button className={style.dotbtn}>...</button>
            </div>
          </div>
          <div className={style.info}>
            <p>
              Welcome to the Blockchain Developers group! This is a community
              for developers who are interested in blockchain technology and
              building decentralized applications.
            </p>
          </div>
          <div className={style.menu}>
            <div className={style.img_namefirst}>
              <div className={style.img_namefirstbox}>
                <img src={Feed} alt="" />
                <h1>Feed</h1>
              </div>
              <div className={style.menuline}></div>
            </div>
            <div className={style.img_name}>
              <img src={Members} alt="" />
              <h1>Memebers</h1>
            </div>
            <div className={style.img_name}>
              <img src={Media} alt="" />
              <h1>Media</h1>
            </div>
            <div className={style.img_name}>
              <img src={File} alt="" />
              <h1>Files</h1>
            </div>
          </div>
          <div className={style.line}></div>
          <div className={style.mainbox}>
            <div className={style.left_profile_side}>
              <div className={style.post}>
                <div className={style.writesomething}>
                  <img src={UserPic} alt="" />
                  <input type="text" placeholder="Write Something" />
                </div>
                <div className={style.line}></div>
                <div className={style.addsomethinginpost}>
                  <div className={style.attachment}>
                    <img src={attachment} />
                    <img className={style.postimg} src={statreport} />
                    <img className={style.postimg} src={emoji} />
                  </div>
                  <div className={style.addbtn}>
                    <div className={style.publiclanguage}>
                      <img src={language} alt="" />
                      <button className={style.public}>Public</button>
                    </div>
                    <button className={style.postbtn}>POST</button>
                  </div>
                </div>
                {/* asd */}
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
                      #Bitcoin seems to be doing exactly what its done for about
                      a year. Strong sell-off, consolidate & slow grind up,
                      create a bear flag, RSI breaks down its trend line, bear
                      flag breaks down for another strong sell-off and the cycle
                      begins again.
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
                {/* sadsa */}
                <div className={style.posts}>
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
            </div>
            <div className={style.right_profile_side}>
              <div className={style.tags}>
                <h1>Tags</h1>
                <div className={style.tag_list}>
                  <h1>Hashtag</h1>
                  <h3>3 Post</h3>
                </div>
                <div className={style.tag_list}>
                  <h1>Hashtag</h1>
                  <h3>3 Post</h3>
                </div>
                <div className={style.tag_list}>
                  <h1>Hashtag</h1>
                  <h3>3 Post</h3>
                </div>
                <div className={style.tag_list}>
                  <h1>Hashtag</h1>
                  <h3>3 Post</h3>
                </div>
              </div>
              <div className={style.memberbox}>
                <div className={style.membercount}>
                  <h1>Member</h1>
                  <h3>4,222</h3>
                </div>
                <div className={style.memberimg}>
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                  <img src={Member} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile_2;
