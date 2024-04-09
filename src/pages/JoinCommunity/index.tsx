import { useState } from "react";
import Navbar from "components/Navbar";
import style from "./JoinCommunity.module.css";
import RightSideBar from "components/RightNavbar";
import Cover from "lib/resources/images/icons/cover.png";
import CategoryButtons from "pages/Explore/components/CategoryButtons";
import Layout from "providers/Layout";
import { ReactComponent as CheckIcon } from "lib/resources/images/icons/check.svg"
import { ReactComponent as CloseIcon } from "lib/resources/images/icons/cancel.svg"
import Select from "components/Select";


function JoinCommunity() {
  const [joinCommunity] = useState([
    { img: Cover, title: "Title", member: "Member 24", joined: false },
    { img: Cover, title: "Title", member: "Member 24", joined: false },
    { img: Cover, title: "Title", member: "Member 24", joined: true },
    { img: Cover, title: "Title", member: "Member 24", joined: false },
    { img: Cover, title: "Title", member: "Member 24", joined: false },
    { img: Cover, title: "Title", member: "Member 24", joined: true },
    { img: Cover, title: "Title", member: "Member 24", joined: false },
  ]);
  const categories = [
    "Recommended",
    "Business",
    "Creative",
    "Education",
    "Entertainment",
    "Food",
  ];
  const [openCreateGroup, setopenCreateGroup] = useState(false);
  let createGroup;
  if (openCreateGroup) {
    createGroup = (
      <div className={style.crategrouppopup}>
        <div className={style.popup}>
          <div className={style.popupleft}></div>
          <div className={style.popupright}>
            <div className={style.popupHeadWrapper}>
              <h1 className={style.createGrouptitle}>Create Group</h1>
              <CloseIcon style={{cursor:'pointer'}} onClick={() => setopenCreateGroup(false)} />
            </div>
            <h2 className={style.tellusmore}>Tell us more about your group</h2>
            <div className={style.groupname}>
              <input
                className={style.groupnameinput}
                type="text"
                placeholder="Group Name"
              />
            </div>
            <div className={style.privecy_category}>
              <Select className={style.category_select} data={[
                {
                  value: "category1",
                  text: "Category 1"
                },
                {
                  value: "category2",
                  text: "Category 2"
                },
                {
                  value: "category3",
                  text: "Category 3"
                },
              ]} />
              <Select className={style.category_select} data={[
                {
                  value: "category1",
                  text: "Category 1"
                },
                {
                  value: "category2",
                  text: "Category 2"
                },
                {
                  value: "category3",
                  text: "Category 3"
                },
              ]} />

            </div>
            <div className={style.groupdescription}>
              <textarea
                className={style.grouptextarea}
                placeholder="Description"
              ></textarea>
            </div>
            <button className={style.popupcreate}>Create</button>
          </div>
        </div>
      </div>
    );
  }

  function CreateGroupOpen() {
    setopenCreateGroup(true);
  }

  return (
    <Layout>
      {createGroup}
      <Navbar />
      <div className={style.join_main}>
        <div className="rightnavbar">
          <RightSideBar />
        </div>
        <div className={style.join_left_side}>
          <div className={style.join_search}>
            <input type="text" placeholder="Search Group" />
            <button
              onClick={CreateGroupOpen}
              className={style.join_community_button}
            >
              Create Group
            </button>
          </div>

          {/* <div className={style.nftmenu}>
            <div className={style.nftmenubt}>
              <button>Recomended</button>
            </div>
            <div className={style.nftmenubt}>
              <button>Business</button>
            </div>
            <div className={style.smbtn}>
              <button>Creative</button>
            </div>
            <div className={style.lgbtn}>
              <button>Education</button>
            </div>
            <div className={style.lgbtn}>
              <button>Endertainment</button>
            </div>
            <div className={style.largebtn}>
              <button>Fashion & Beauty</button>
            </div>
            <div className={style.smbtn}>
              <button>Food</button>
            </div>
            <div className={style.extralargebtn}>
              <button>Goverment & Policits</button>
            </div>
          </div> */}
          <CategoryButtons categories={categories} />
          <div className={style.join_community_box}>
            {joinCommunity.map((element, i) => {
              return (
                <div className={style.join_box} key={i}>
                  <div className={style.join_picture}>
                    <img src={element.img} />
                  </div>
                  <div className={style.join_title}>
                    <h1>{element.title}</h1>
                    <h1 className={style.subtext}>{element.member}</h1>
                  </div>
                  {element.joined ? <button disabled className={style.join_box_button}>
                    <CheckIcon /> Joined
                  </button> : <button className={style.join_box_button}>
                    Join Community
                  </button>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout >
  );
}

export default JoinCommunity;
