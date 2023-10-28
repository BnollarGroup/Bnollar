import React from 'react'
import style from "./Follow.module.css"
import SocialNetworks from "components/SocialNetworks"

function index() {
    return (
        <div className={style.followers_following}>
            <p>124 Follower</p>
            <span>|</span>
            <p>100 Following</p>
        </div>
    )
}

export default index
