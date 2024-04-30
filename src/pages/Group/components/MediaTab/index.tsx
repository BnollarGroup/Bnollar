import React, { useState } from 'react'
import style from './MediaTab.module.css'
import clsx from 'clsx';
import videoPlayButtonIcon from "lib/resources/images/profile-chat/play-outline.svg";

const MediaTab = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className={style.mediaContainer}>
            <div className={style.mediaNav}>
                <div className={style.mediaNavBtns}>
                    <button className={clsx({ [style.active]: activeTab === 0 })} onClick={() => setActiveTab(0)}>Photos</button>
                    <button className={clsx({ [style.active]: activeTab === 1 })} onClick={() => setActiveTab(1)}>Videos</button>
                </div>
                <button className={style.addBtn}>
                    + Add Photo Or Video
                </button>
            </div>
            <div className={style.mediaBody}>
                {activeTab ? [0, 1, 2, 3, 4].map((single, _index) => (
                    <div className={style.mediaSingleWrap} key={_index}>
                        <img src={`https://picsum.photos/id/20${_index}/300`} />
                        <button className={style.currentUserVideoPlayButton}>
                            <img
                                src={videoPlayButtonIcon}
                                alt="video player play button"
                            />
                        </button>
                    </div>
                )) : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((single, _index) => (
                    <div className={style.mediaSingleWrap} key={_index}>
                        <img src={`https://picsum.photos/id/20${_index}/300`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MediaTab