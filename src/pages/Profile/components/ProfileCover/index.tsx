import React from 'react';
import style from "./ProfileCover.module.css"
import Cover from "lib/resources/images/icons/cover (2).png";
import EditCoverImg from "../EditCoverImg"


function index() {
  return (
      <div className={style.container}>
        <img src={Cover} alt="Cover" className={style.image} />
        <EditCoverImg/>
      </div>
  )
}

export default index
