import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import style from './Profile_2.module.css'
import LeftNavBar from '../../components/RightNavBar/rightnavbar'
import CoverPicture from '../../resources/images/icons/coverpic.png'
import Instagram from '../../resources/images/icons/instagram.png'
import Verifed from '../../resources/images/icons/verified.svg'
import Member from '../../resources/images/icons/memeber.png'

function Profile_2() {
  return (
    <section>
      <Navbar />
      <div className={style.profile_2_main}>
      <div className={style.profile_2_leftnavbar}>
        <LeftNavBar />
      </div>
      <div className={style.profile_2_middle}>
        <div className={style.coverpicture}>
          <img src={CoverPicture} alt="" />
        </div>
        <div className={style.groupname}>
          <h1>BlockChain Developer</h1>
          <div className={style.social}>
            <img src={Instagram} alt="" />
            <img src={Instagram} alt="" />
            <img src={Instagram} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className={style.info}>
          <p>Welcome to the Blockchain 
            Developers group! This is a community 
            for developers who are interested in blockchain 
            technology and building decentralized applications.</p>
        </div>
        <div className={style.menu}>
          <div className={style.img_name}>
          <img src={Instagram} alt="" />
          <h1>Feed</h1>
          </div>
          <div className={style.img_name}>
          <img src={Instagram} alt="" />
          <h1>Feed</h1>
          </div>
          <div className={style.img_name}>
          <img src={Instagram} alt="" />
          <h1>Feed</h1>
          </div>
          <div className={style.img_name}>
          <img src={Instagram} alt="" />
          <h1>Feed</h1>
          </div>
        </div>
        <hr></hr>
        <div className={style.mainbox}>
        <div className={style.left_profile_side}>
          <div className={style.post}>
            <div className={style.writesomething}>
              <img src={Instagram} alt="" />
              <input type="text" placeholder='Write Something' />
            </div>
            <hr></hr>
            <div className={style.addsomethinginpost}>
              <div className={style.attachment}>
                <img src={Instagram} alt="" />
                <img src={Instagram} alt="" />
                <img src={Instagram} alt="" />
              </div>
              <div className={style.addbtn}>
                <button className={style.public}>Public</button> 
                <button className={style.postbtn}>POST</button>
              </div>
            </div>
            <div className={style.upload_news_desc}>
                              <div className={style.user_name}>
                                    <img className={style.userimg} src={Instagram} />
                                    <h1>Christopher Williams</h1>
                                    <img className={style.verifed_img} src={Verifed} />
                                    <span>14 Dec</span>
                                </div>
                                <p>#Bitcoin seems to be doing exactly what its done for about a year. Strong sell-off, 
                                    consolidate & slow grind up, create a 
                                    bear flag, RSI breaks down its trend line, bear flag breaks down for 
                                    another strong sell-off and the cycle 
                                    begins again.
                                </p>
                                <div className={style.rate_btns}>
                                    <div className={style.upvote}>
                                        <button>Upvote</button>
                                    </div>
                                    <div className={style.upvote}>
                                        <button>Upvote</button>
                                    </div>
                                    <div className={style.upvote}>
                                        <button>Upvote</button>
                                    </div>
                                </div>
                            </div>
          </div>
        </div>
        <div className={style.right_profile_side}>
          <div className={style.tags}>
            <h1>Tags</h1>
            <div className={style.tag_list}>
              <h1>Hashtag</h1>
              <h3>3 Post</h3>
            </div>
            <div className={style.tag_list}>
              <h1>Hashtag</h1>
              <h3>3 Post</h3>
            </div>
            <div className={style.tag_list}>
              <h1>Hashtag</h1>
              <h3>3 Post</h3>
            </div>
            <div className={style.tag_list}>
              <h1>Hashtag</h1>
              <h3>3 Post</h3>
            </div>
          </div>
          <div className={style.memberbox}>
            <div className={style.membercount}>
              <h1>Member</h1>
              <h3>4,222</h3>
            </div>
            <div className={style.memberimg}>
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
              <img src={Member} alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Profile_2