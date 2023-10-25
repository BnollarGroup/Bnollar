import React from 'react'
import style from "./UserProfileImg.module.css"
import UserIcon from "lib/resources/images/icons/user-icon.png";


function index() {
  return (
      <div className={style.userimg}>
            <img src={UserIcon} />
      </div>
  )
}

export default index
