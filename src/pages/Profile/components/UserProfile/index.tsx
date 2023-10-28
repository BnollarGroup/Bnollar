import React from 'react'
import style from "./UserProfile.module.css"
import SocialNetworks from "components/SocialNetworks"
import FollowUser from "../FollowUser"

function index() {
  return (
    <div>
      <div className={style.user_name}>
        <h1>Christoh1her Reinger</h1>

      </div>
      <p className={style.about}>
        I am a hard-working and driven individual who {`isn't`} afraid
        to face a challenge.
      </p>
      <div className={style.user_ceo}>
        <p>CEO at</p>
        <span>SAMSDS</span>
      </div>
    </div>
  )
}

export default index
