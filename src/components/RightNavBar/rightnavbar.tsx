import React from "react";
import style from "../RightNavBar/rightnavbar.module.css";
import HomeLogo from "../../resources/images/icons/home-simple-door.png";
import Hashtag from "../../resources/images/icons/hashtag.png";
import NFT from "../../resources/images/icons/stats-report.png";
import Group from "../../resources/images/icons/group.png";
import SettingsLogo from "../../resources/images/icons/settings.png";
import NftLogo from "../../resources/images/icons/Rectangle.png";
import NftMonkey from "../../resources/images/icons/monkey.png";

function rightnavbar() {
  return (
    <div className={style.navigator}>
      <div className={style.navcontainer}>
        <div className={style.navbar}>
          <img src={HomeLogo} />
          <h1>Home</h1>
        </div>
        <div className={style.navbar}>
          <img src={Hashtag} />
          <h1>Explore</h1>
        </div>
        <div className={style.navbar}>
          <img src={NFT} />
          <h1>NFT</h1>
        </div>
        <div className={style.navbar}>
          <img src={Group} />
          <h1>Community</h1>
        </div>
        <div className={style.navbar}>
          <img src={SettingsLogo} />
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

export default rightnavbar;
