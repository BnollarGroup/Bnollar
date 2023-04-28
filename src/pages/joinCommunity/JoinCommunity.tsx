import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import style from './JoinCommunity.module.css'
import RighSideBar from '../../components/RightNavBar/rightnavbar'
import Cover from '../../resources/images/icons/cover.png'
import ArrowDown from '../../resources/images/icons/nav-arrow-down.png'

function JoinCommunity() {
    const [JoinCommunity, setJoinCommunity] = useState([
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
        {"img": Cover, "title": 'Title', "member": 'Member 24'},
    ])
  return (
    <section>
        <Navbar/>
        <div className={style.join_main}>
            <div className='rightnavbar'>
            <RighSideBar />
            </div>
            <div className={style.join_left_side}>
                <div className={style.join_search}>
                    <input type='text' placeholder='Search Group' />
                    <button className={style.join_community_button}>Create Group</button>
                </div>
                <div className={style.nftmenu}>
          <div className={style.nftmenubt}>
            <button>Recomended</button>
          </div>
          <div className={style.nftmenubt}>
            <button>Business</button>
          </div>
          <div className={style.smbtn}>
            <button>Creative</button>
          </div>
          <div className={style.lgbtn}>
            <button>Education</button>
          </div>
          <div className={style.lgbtn}>
            <button>Endertainment</button>
          </div>
          <div className={style.largebtn}>
            <button>Fashion & Beauty</button>
          </div>
          <div className={style.smbtn}>
            <button>Food</button>
          </div>
          <div className={style.extralargebtn}>
            <button>Goverment & Policits</button>
          </div>
        </div>
                <div className={style.join_community_box}>
                        {JoinCommunity.map((element) => {
                            return <div className={style.join_box}>
                            <div className={style.join_picture}>
                                <img src={element.img} />
                            </div>
                            <div className={style.join_title}>
                            <h1>{element.title}</h1>
                            <h1>{element.member}</h1>
                        </div>
                        <button className={style.join_box_button}>Join Community</button>
                            </div>
                        })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default JoinCommunity