import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Post.module.css'
import nft1 from '../../resources/images/posts/postImg2.svg'
import PostHeader from '../../components/Post/PostHeader'
const Post = ()=>{
    return (
        <div className={styles.postWrapper}>
            <Navbar/>
            <div className={styles.post}>
                <div className={styles.postImage}><img src={nft1}/></div>
                <div className={styles.sideBar}>
                    <div className={styles.commentCard}>
                        <PostHeader/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post