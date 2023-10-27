import React, { useState } from 'react'
import style from "./UserProfileImg.module.css"
import UserIcon from "lib/resources/images/icons/user-icon.png";
import editImg from "lib/resources/images/Frame 4.png"


function index() {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={style.userimg}>
      <img src={UserIcon} className={style.profileImg} />
      <img src={editImg} alt="" className={style.editImg} onClick={handleClick} />
      {openModal && (
        <div className={style.openProfileditdrop}>
          <button className={style.dropProfilebtn}>Upload Photo</button>
          <button className={style.dropProfilebtn}>Remove</button>
        </div>
      )}
    </div>
  )
}

export default index
