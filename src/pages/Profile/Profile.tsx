import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import style from '../Profile/profile.module.css'
import Rightnavbar from '../../components/RightNavBar/rightnavbar'
import Cover from '../../resources/images/icons/profile-cover.png'
import UserIcon from '../../resources/images/icons/user-icon.png'
import Verifed from '../../resources/images/icons/twitter-verified-badge.png'
import Instagram from '../../resources/images/icons/instagram.png'
import Grid from '../../resources/images/icons/view-grid.png'
import UserFeedPic from '../../resources/images/icons/userfeedpic.png'
import PostImg from '../../resources/images/icons/post-img.png'


function Profile() {
  return (
    <div>
        <Navbar />
        <div className={style.profilemain}>
        <div className={style.profileright}>
            <Rightnavbar />
        </div>
        <div className={style.profileleft}>
            <div className={style.profilecover}>
                <img src={Cover} />
                <button>Edit Cover Photo</button>
            </div>
            <div className={style.aboutuser}>
                <div className={style.aboutuserright}>
                    <img src={UserIcon} />
                    <div className={style.user_name}>
                        <h1>Christopher Reinger</h1>
                        <img src={Verifed} />
                    </div>
                    <div className={style.user_about}>
                        <p>I am a hard-working and driven individual who isn't afraid to face a challenge.</p>
                        <div className={style.user_ceo}>
                            <h1>CEO at</h1>
                            <span>SAMSDS</span>
                        </div>
                        <div className={style.followers_following}>
                            <h1>124 Follower</h1>
                            <span>|</span>
                            <h2>100 Following</h2>
                        </div>
                    </div>
                </div>
                <div className={style.aboutuserleft}>
                    <img src={Instagram} />
                    <img src={Instagram} />
                    <img src={Instagram} />
                    <button>Follow</button>
                    <img src={Instagram} />
                </div>
            </div>
            <div className={style.user_feed}>
                <div className={style.feed_box}>
                    <div className={style.news}>
                        <img src={Grid} />
                    <h1>Feed</h1>
                    </div>
                    <div className={style.news}>
                    <img src={Grid} />
                    <h1>NFTs</h1>
                </div>
                <div className={style.news}>
                <img src={Grid} />
                    <h1>Media</h1>
                </div>
                </div>
                <hr></hr>
            </div>
            <div className={style.news_feed}>
                <div className={style.feed_rightside}>
                    <div className={style.upload_news}>
                        <div className={style.upload_news_author_pic}>
                            <img src={UserFeedPic} />
                        </div>
                        <div className={style.upload_news_desc}>
                                <div className={style.user_name}>
                                    <h1>Christopher Williams</h1>
                                    <img src={Verifed} />
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
                    <div className={style.post}>
                    <div className={style.post_box}>
                        <div className={style.upload_news_author_pic}>
                            <img src={UserFeedPic} />
                        </div>
                        <div className={style.upload_news_desc}>
                                <div className={style.user_name}>
                                    <h1>Christopher Williams</h1>
                                    <img src={Verifed} />
                                    <span>14 Dec</span>
                                </div>
                                <p>I am selling this NFT from Clone x collection</p>
                                <div className={style.post_img}>
                                    <img src={PostImg} />
                                </div>
                                <div className={style.buy_now}>
                                    <div className={style.price}>
                                        <h1>Clone X</h1>
                                        <h1>445 ETH</h1>
                                    </div>
                                    <div className={style.buy_btn}>
                                        <button>BUY NOW</button>
                                    </div>
                                </div>
                                <div className={style.btns}>
                                    <div className={style.upvote}>
                                        <button>433</button>
                                    </div>
                                    <div className={style.upvote}>
                                        <button>Comment</button>
                                    </div>
                                    <div className={style.upvote}>
                                        <button>Share</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className={style.feed_leftsideinformation}>
                    <div className={style.about_box}>
                        <div className={style.edit_info}>
                            <h1>About</h1>
                            <h1>Edit Information</h1>
                        </div>
                        <div className={style.user_description}>
                            <div className={style.about_user_desc}>
                                <h1>Worked at Meria</h1>
                            </div>
                            <div className={style.about_user_desc}>
                                <h1>Worked at Meria</h1>
                            </div>
                            <div className={style.about_user_desc}>
                                <h1>Worked at Meria</h1>
                            </div>
                            <div className={style.about_user_desc}>
                                <h1>Worked at Meria</h1>
                            </div>
                        </div>
                    </div>
                    <div className={style.friend_box}>
                        <div className={style.friends}>
                        <h1>Friends 133</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile