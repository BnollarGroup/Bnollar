import style from "./User.module.css";
import Followers from "../Followers";
import SocialNetworks from "components/SocialNetworks";
import WritePost from "components/Home/FeedHeader";
import Cover from "../Cover";
import Avatar from "../UserProfileImg";
import UserInformation from "../aboutProfile";
import About from "../UserInformation";

export default function InformationSection() {
  return (
    <div className={style.container}>
      <Cover />

      <div className={style.aboutUserProfile}>
        <Avatar />
        <UserInformation />
        <Followers />

        <div className={style.responsiveSocialNetwork}>
          <SocialNetworks />
        </div>
      </div>

      <div className={style.postInformation}>
        <div className={style.UserInformation}>
          <About />
        </div>

        <div className={style.writePost}>
          <WritePost />
        </div>
      </div>
    </div>
  );
}
