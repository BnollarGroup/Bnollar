import style from "./FollowUser.module.css";
import menuIcon from "lib/resources/images/icons/more-horiz.svg";

function FollowUser() {
  return (
    <div className={style.feedCard_header_menu}>
      <div className={style.socialNetworks}></div>
      <div className={style.menuItem}>
        <button className={style.button}>follow</button>
        <img src={menuIcon} />
      </div>
      <div className={style.follow}></div>
    </div>
  );
}

export default FollowUser;
