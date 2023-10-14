import React, { useState } from "react";
import style from "../RightNavBar/rightnavbar.module.css";
import Home from "../../lib/resources/svg/Home";
import Hashtag from "../../lib/resources/svg/Hashtag";
import Statistics from "../../lib/resources/svg/Statistics";
import Wheel from "../../lib/resources/svg/Wheel";
import Group from "../../lib/resources/svg/Group";

function Rightnavbar() {
  const [activeItem, setActiveItem] = useState("");

  const handleNavbarItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className={style.navigator}>
      <div className={style.navcontainer}>
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
      </div>
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
