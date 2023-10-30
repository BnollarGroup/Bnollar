import React from 'react';
import style from "./User.module.css";
import UserProfile from "../UserProfileImg";
import UserCoverImg from "../ProfileCover";
import AboutUser from "../aboutProfile";
import Followers from "../Followers";
import SocialNetworks from "components/SocialNetworks";

function User() {
    return (
        <div className={style.container}>
            <UserCoverImg />
            <div className={style.aboutUserProfile}>
                <UserProfile />
                <AboutUser />
                <Followers />
                <div className={style.responsiveSocialNetwork}>
                <SocialNetworks />
            </div>
            </div>
            
        </div>
    );
}

export default User;
