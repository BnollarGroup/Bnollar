import React, { useState } from 'react';
import style from "./EditCoverImg.module.css";
import Icon from "lib/resources/images/icons/edit.png";

const index = () => {
    const [openCover, setOperCover] = useState(false);

    const handleOpen = () => {
        setOperCover(!openCover);
    };

    return (
        <div className={style.editButtonContainer}
            onClick={handleOpen}>
            <img src={Icon} alt="" className={style.editIcon} />
            <button
                className={style.editcoverpicture}
            >
                Edit Cover Photo
            </button>


            
            {openCover && (
                <div className={style.opencovereditdrop}>
                    <button className={style.dropcoverbtn}>Upload Photo</button>
                    <button className={style.dropcoverbtn}>Reposition</button>
                    <button className={style.dropcoverbtn}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default index
