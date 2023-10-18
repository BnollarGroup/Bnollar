import React from "react";
import classes from "./SettingsTopNav.module.css";
import Logo from "../../../resources/images/logo/bnollar_logo.svg";
import Plus from "../../../resources/images/icons/plus.svg";
import Search from ".././../../resources/images/Navbar/search.svg";
import Notifications from "../../../resources/images/Navbar/notifications.svg";
import Messanger from "../../../resources/images/Navbar/messanger.svg";
import AvatarImg from "../../../resources/images/Navbar/avatar.png";

function SettingsTopNav() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.left_cont}>
        <div className={classes.logo_cont}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={classes.search_input_cont}>
          <img src={Search} alt="search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={classes.right_cont}>
        <div className={classes.create}>
          <img src={Plus} alt="Plus" />
          <p>Create</p>
        </div>
        <div className={classes.notifications}>
          <img src={Notifications} alt="notifications" />
          <img src={Plus} alt="notifications" />
        </div>
        <div className={classes.messenger}>
          <img src={Messanger} alt="messenger" />
          <img src={Search} alt="messenger" />
        </div>
        <div className={classes.avatar}>
          <img src={AvatarImg} alt="avatar" />
        </div>
      </div>
    </nav>
  );
}

export default SettingsTopNav;
