import React, { useState } from "react";
import style from "./RightNavbar.module.css";
import Home from "lib/resources/svg/Home";
import Hashtag from "lib/resources/svg/Hashtag";
import Statistics from "lib/resources/svg/Statistics";
import Wheel from "lib/resources/svg/Wheel";
import Group from "lib/resources/svg/Group";
import { useNavigate } from "react-router-dom";

function Rightnavbar() {
  const [activeItem, setActiveItem] = useState("NFT");
  // const [page, setPage] = useState<string>("");

  const navigate = useNavigate();

  const handleNavbarItemClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className={style.container}>
      <div className={style.navcontainer}>
        <div
          className={`${style.navbar} ${
            activeItem === "Home" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("/home")}
        >
          <Home
            strokeColor={
              activeItem === "Home" ? "#ffffff" : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1
            style={{
              color:
                activeItem === "Home"
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.403)",
            }}
          >
            Home
          </h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "Explore" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("/explore")}
        >
          <Hashtag
            strokeColor={
              activeItem === "Explore"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1
            style={{
              color:
                activeItem === "Explore"
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.403)",
            }}
          >
            Explore
          </h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "NFT" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("/nft-collection")}
        >
          <Statistics
            strokeColor={
              activeItem === "NFT" ? "#ffffff" : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1
            style={{
              color:
                activeItem === "NFT" ? "#ffffff" : "rgba(255, 255, 255, 0.403)",
            }}
          >
            NFT
          </h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "Community" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("/grouppage")}
        >
          <Group
            strokeColor={
              activeItem === "Community"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1
            style={{
              color:
                activeItem === "Community"
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.403)",
            }}
          >
            Community
          </h1>
        </div>
        <div
          className={`${style.navbar} ${
            activeItem === "Settings" ? style.active : ""
          }`}
          onClick={() => handleNavbarItemClick("/settings/:type")}
        >
          <Wheel
            strokeColor={
              activeItem === "Settings"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.403)"
            }
          />
          <h1
            style={{
              color:
                activeItem === "Settings"
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.403)",
            }}
          >
            Settings
          </h1>
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
