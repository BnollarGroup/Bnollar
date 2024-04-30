import Navbar from "components/Navbar";
import style from "./Group.module.css";
import Verifed from "lib/resources/images/icons/verified.svg";
import PostImg from "lib/resources/images/icons/post-img.png";
import UserFeedPic from "lib/resources/images/icons/userfeedpic.png";
import Feed from "lib/resources/images/icons/view-grid.png";
import Members from "lib/resources/images/icons/memebers.png";
import Media from "lib/resources/images/icons/stats-report.png";
import File from "lib/resources/images/icons/folder.png";
import Layout from "providers/Layout";
import LeftSideBar from "components/LeftSidebar";
import { useEffect, useState } from "react";
import Tabs from "components/Tabs";
import FeedHeader from "components/Home/FeedHeader";
import InformationSection from "./components/InformationSection";
import Cover from "./components/Cover";
import GroupTags from "./components/Tags";
import GroupMembers from "./components/Members";
import Post from "pages/Profile/components/Post/indexx";
import { PostData } from "pages/Profile/utils/types";
import { fetchData } from "api/apiService";
import CreateGroup from "components/ProfileChat/CreateGroup/CreateGroup";
import avatar1 from "lib/resources/images/profile-chat/avatar1.png";
import avatar2 from "lib/resources/images/profile-chat/avatar2.png";
import avatar3 from "lib/resources/images/profile-chat/avatar3.png";
import avatar4 from "lib/resources/images/profile-chat/avatar4.png";
import avatar5 from "lib/resources/images/profile-chat/avatar5.png";
import MediaTab from "./components/MediaTab";
import FilesTab from "./components/FilesTab";


export type TabPage = "feed" | "members" | "media" | "files";
const chatMessages = [
  {
    name: "Owen Padberg",
    message: "Hey Olivia, Katherine sent...",
    avatar: avatar1,
    hasDot: true,
    messageTime: "5m",
  },
  {
    name: "Traci Tillman",
    message: "You: Sure thing, I’ll have a loo...",
    avatar: avatar2,
    hasDot: false,
    messageTime: "1h",
  },
  {
    name: "Mr. Percy Sauer",
    message: "I’ve just published the site again.",
    avatar: avatar3,
    hasDot: true,
    messageTime: "2w",
  },
  {
    name: "Jeremy Weber PhD",
    message: "Hey Liv — just wanted to say th...",
    avatar: avatar4,
    hasDot: false,
    messageTime: "12w",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },
  {
    name: "Lillian Powlowski",
    message: "Good news!! Jack accepted t...",
    avatar: avatar5,
    hasDot: false,
    messageTime: "1y",
  },

];

function Group() {
  const [posts, setPosts] = useState<PostData[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetchData<PostData[]>('http://64.226.94.204:1337/api/posts/posts/');
      setPosts(response); // Assuming response is an array of posts
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const pages: { page: TabPage; icon: any }[] = [
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

  const [currentTab, setCurrentTab] = useState<TabPage>("feed");
  return (
    <Layout>
      <Navbar />

      <div className={style.container}>
        <LeftSideBar />

        <div className={style.rightSection}>
          <Cover />

          <InformationSection data={groupData} />

          <Tabs pages={pages} value={currentTab} onChange={setCurrentTab} />

          <div className={style.line}></div>
          <div className={style.mainbox}>
            <div className={style.left_profile_side}>
              {currentTab === 'feed' ? <>
                <FeedHeader />
                <Post posts={posts} />
              </> : currentTab === 'members' ? <CreateGroup chatMessages={chatMessages} /> : currentTab === 'media' ? <MediaTab />: <FilesTab />}
              {/* <div className={style.upload_news}>
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
              {/* sadsa */}
              {/* <div className={style.posts}>
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
            </div> */}
            </div>
            <div className={style.asideContainer}>
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
