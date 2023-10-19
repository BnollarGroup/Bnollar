import React, { useState } from "react";
import style from "./RightNavbar.module.css";
import Home from "lib/resources/svg/Home";
import Hashtag from "lib/resources/svg/Hashtag";
import Statistics from "lib/resources/svg/Statistics";
import Wheel from "lib/resources/svg/Wheel";
import Group from "lib/resources/svg/Group";
import { useNavigate } from "react-router-dom";

function Rightnavbar() {
  const [activeItem, setActiveItem] = useState("");
  const [page, setPage] = useState<string>("");

  const navigate = useNavigate();

  const handleNavbarItemClick = (itemName: string) => {
    setActiveItem(itemName);
    if (activeItem === "Home") {
      navigate("/home");
      console.log(activeItem);
    } else if (activeItem === "Explore") {
      navigate("/explore");
    } else if (activeItem === "NFT") {
      navigate("/NFT");
    } else if (activeItem === "Community") {
      navigate("/grouppage");
    } else {
      navigate("/settings");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <button
          className={`${style.navbar} ${
            activeItem === "Home" ? style.active : ""
          }`}
        >
          <Home
            color={
              activeItem === "Home" ? "#ffffff" : "rgba(255, 255, 255, 0.403)"
            }
          />
          <span>Home</span>
        </button>
      </div>
      {/* <div className={style.navcontainer}>
        <div
          className={`${style.navbar} ${
            activeItem === "Home" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("Home")}
        >
          <Home
            color={
              activeItem === "Home" ? "#ffffff" : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1>Home</h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "Explore" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("Explore")}
        >
          <Hashtag
            color={
              activeItem === "Explore"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1>Explore</h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "NFT" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("NFT")}
        >
          <Statistics
            color={
              activeItem === "NFT" ? "#ffffff" : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1>NFT</h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "Community" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("Community")}
        >
          <Group
            color={
              activeItem === "Community"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1>Community</h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "Setting" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("Setting")}
        >
          <Wheel
            color={
              activeItem === "Setting"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1>Setting</h1>
        </div>
      </div> */}
      <div className={style.desc}>
        <div className={style.about}>
          <h2>About</h2>
          <h2>Blog</h2>
          <h2>Career</h2>
          <h2>Help</h2>
          <h2>Privacy policy</h2>
        </div>
        <div className={style.terms_conditions}>
          <h3>Terms & conditions</h3>
        </div>
        <div className={style.allright}>
          <h3>© 2023 Bnollar</h3>
        </div>
      </div>
    </div>
  );
}

export default Rightnavbar;
