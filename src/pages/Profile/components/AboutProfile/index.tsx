import style from "./AboutProfile.module.css";
import Verifed from "lib/resources/images/icons/twitter-verified-badge.png";

export default function AboutProfile() {
  return (
    <div className={style.profileContainer}>
      <div className={style.user_name}>
        <h1>Christoh1her Reinger</h1>
        <img src={Verifed} />
      </div>
      <p className={style.about}>
        I am a hard-working and driven individual who {`isn't`} afraid to face a
        challenge.
      </p>
      <div className={style.user_ceo}>
        <p>CEO at</p>
        <span>SAMSDS</span>
      </div>
      {/* <Follower /> */}
    </div>
  );
}
