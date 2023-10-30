import React from 'react'
import style from "./Follow.module.css"
import SocialNetworks from "components/SocialNetworks"

function index() {
    return (
        <div className={style.followers_following}>
            <div className={style.followerContainer}>
                <p className={style.followerQuantity}>124</p>
                <p className={style.follower}>Follower</p>
            </div>
            <span>|</span>
            <div className={style.followerContainer}>
                <p className={style.followerQuantity}>100</p>
                <p className={style.follower}>Following</p>
            </div>
        </div>
    )
}

export default index
