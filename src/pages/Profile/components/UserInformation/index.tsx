import React from 'react'
import style from './UserInformation.module.css'
import MeriaLogo from "lib/resources/images/icons/briefcase.png";

const index = () => {
  return (
    <div>
      <div className={style.feed_rightsideinformation}>
        <div className={style.about_box}>
          <div className={style.edit_info}>
            <p>About</p>
            <a href="#" className={style.editInfo}>
              Edit Information
            </a>
          </div>
          <div className={style.user_description}>
            <div className={style.about_user_desc}>
              <img src={MeriaLogo} />
              <p>Worked at Meria</p>
            </div>
            <div className={style.about_user_desc}>
              <img src={MeriaLogo} />
              <p>Former Pianist at Alla Pugacheva Band</p>
            </div>
            <div className={style.about_user_desc}>
              <img src={MeriaLogo} />
              <p>Studied at Georgian Technical University</p>
            </div>
            <div className={style.about_user_desc}>
              <img src={MeriaLogo} />
              <p>Lives in Yerevan, Armenia </p>
            </div>
          </div>
        </div>
        <div className={style.friend_box}>
          <div className={style.friends}>
            <p>Friends</p>
            <p className={style.friendMembers}>133</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
