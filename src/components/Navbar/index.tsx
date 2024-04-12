import style from "./Navbar.module.css";
import Logo from "lib/resources/images/logo/bnollar_logo.svg";
import Plus from "lib/resources/images/icons/plus.svg";
import Search from "lib/resources/images/Navbar/search.svg";
import Notifications from "lib/resources/images/Navbar/notifications.svg";
import Messanger from "lib/resources/images/Navbar/messanger.svg";
import AvatarImg from "lib/resources/images/Navbar/avatar.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.left_cont}>
        <div className={style.logo_cont}>
          <Link to={'/home'}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.search_input_cont}>
          <img src={Search} alt="search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={style.right_cont}>
        <div className={style.create}>
          <img src={Plus} alt="Plus" />
          <p>Create</p>
        </div>
        <div className={style.notifications}>
          <img src={Notifications} alt="notifications" />
          <img src={Plus} alt="notifications" />
        </div>
        <div className={style.messenger}>
          <img src={Messanger} alt="messenger" />
          <img src={Search} alt="messenger" />
        </div>
        <div className={style.avatar}>
          <img src={AvatarImg} alt="avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
