import React from 'react'
import style from "./aboutProfile.module.css"
import Verifed from "lib/resources/images/icons/twitter-verified-badge.png";
import Follower from "pages/Profile/components/Followers"
import UserProfile from "../UserProfile/index"
import SocialNetworks from "components/SocialNetworks"


function index() {
  return (
    <div className={style.profileContainer}>
      <div className={style.user_name}>
        <h1>Christoh1her Reinger</h1>
        <img src={Verifed} />
      </div>
      <p className={style.about}>
        I am a hard-working and driven individual who {`isn't`} afraid
        to face a challenge.
      </p>
      <div className={style.user_ceo}>
        <p>CEO at</p>
        <span>SAMSDS</span>
      </div>
      {/* <Follower /> */}
    </div>
  )
}

export default index
