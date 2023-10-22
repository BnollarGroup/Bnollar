import Navbar from "components/Navbar";
import style from "./Group.module.css";
import Verifed from "lib/resources/images/icons/verified.svg";
import UserPic from "lib/resources/images/icons/Ellipse 1.png";
import attachment from "lib/resources/images/icons/attachment.png";
import emoji from "lib/resources/images/icons/emoji.png";
import statreport from "lib/resources/images/icons/stats-report.png";
import PostImg from "lib/resources/images/icons/post-img.png";
import UserFeedPic from "lib/resources/images/icons/userfeedpic.png";
import language from "lib/resources/images/icons/language.png";
import Feed from "lib/resources/images/icons/view-grid.png";
import Members from "lib/resources/images/icons/memebers.png";
import Media from "lib/resources/images/icons/stats-report.png";
import File from "lib/resources/images/icons/folder.png";
import Layout from "providers/Layout";
import LeftSideBar from "components/Leftsidebar/LeftSideBar";
import { useState } from "react";
import Tabs from "components/Tabs";
import GroupMembers from "./components/Members";
import GroupTags from "./components/Tags";
import Cover from "./components/Cover";
import InformationSection from "./components/InformationSection";

export type Page = "feed" | "members" | "media" | "files";

function Group() {
  const pages: { page: Page; icon: any }[] = [
    {
      page: "feed",
      icon: Feed,
    },
    { page: "members", icon: Members },
    { page: "media", icon: Media },
    { page: "files", icon: File },
  ];

  const groupData = {
    name: "Blockchain Developers",
    badge: "For Developers",
    description:
      "Welcome to the Blockchain Developers group! This is a community for developers who are interested in blockchain technology and building decentralized applications.",
    tags: [
      {
        title: "Smart Contracts",
        count: 7,
      },
      {
        title: "Ethereum",
        count: 23,
      },
      {
        title: "Web3",
        count: 11,
      },
    ],
  };

  const [currentPage, setCurrentPage] = useState<Page>("feed");

  return (
    <Layout>
      <Navbar />

      <div className={style.container}>
        <div className={style.leftSection}>
          <LeftSideBar />
        </div>

        <div className={style.rightSection}>
          <Cover />

          <InformationSection data={groupData} />

          <Tabs
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

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
              <GroupTags data={groupData} />

              <GroupMembers />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Group;
