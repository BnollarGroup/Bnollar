import { useState } from "react";
import Navbar from "components/Navbar";
import style from "./JoinCommunity.module.css";
import RighSideBar from "components/RightNavbar";
import Cover from "lib/resources/images/icons/cover.png";

function JoinCommunity() {
  const [joinCommunity] = useState([
    { img: Cover, title: "Title", member: "Member 24" },
    { img: Cover, title: "Title", member: "Member 24" },
    { img: Cover, title: "Title", member: "Member 24" },
    { img: Cover, title: "Title", member: "Member 24" },
    { img: Cover, title: "Title", member: "Member 24" },
    { img: Cover, title: "Title", member: "Member 24" },
    { img: Cover, title: "Title", member: "Member 24" },
    { img: Cover, title: "Title", member: "Member 24" },
  ]);

  const [openCreateGroup, setopenCreateGroup] = useState(false);
  let createGroup;
  if (openCreateGroup) {
    createGroup = (
      <div className={style.crategrouppopup}>
        <div className={style.popup}>
          <div className={style.popupleft}></div>
          <div className={style.popupright}>
            <h1 className={style.creategrouppopup}>Create Group</h1>
            <h2 className={style.tellusmore}>Tell us more about your group</h2>
            <div className={style.groupname}>
              <input
                className={style.groupnameinput}
                type="text"
                placeholder="Group Name"
              />
            </div>
            <div className={style.privecy_category}>
              <select className={style.privacy_select}>
                <option value="">Choose Privacy</option>
              </select>
              <select className={style.category_select}>
                <option value="">Choose Category</option>
              </select>
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
    <section>
      {createGroup}
      <Navbar />
      <div className={style.join_main}>
        <div className="rightnavbar">
          <RighSideBar />
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
          <div className={style.nftmenu}>
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
          </div>
          <div className={style.join_community_box}>
            {joinCommunity.map((element, i) => {
              return (
                <div className={style.join_box} key={i}>
                  <div className={style.join_picture}>
                    <img src={element.img} />
                  </div>
                  <div className={style.join_title}>
                    <h1>{element.title}</h1>
                    <h1>{element.member}</h1>
                  </div>
                  <button className={style.join_box_button}>
                    Join Community
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
