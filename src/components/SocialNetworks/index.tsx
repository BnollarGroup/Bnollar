import style from "./SocialNetworks.module.css";
import Instagram from "lib/resources/images/icons/instagram.png";
import Twitter from "lib/resources/images/icons/_Twitter (2).png";
import Discord from "lib/resources/images/icons/Discord.png";

export default function SocialNetworks() {
  return (
    <div>
      <div className={style.aboutuserleft}>
        <a href="">
          <img src={Instagram} />
        </a>
        <a href="" rel="nofollow">
          <img src={Twitter} />
        </a>
        <a href="">
          <img src={Discord} />
        </a>
      </div>
    </div>
  );
}
