import Navbar from "components/Navbar";
import styles from "./Post.module.css";
import nft1 from "lib/resources/images/posts/postImg2.svg";
import PostHeader from "components/PostExtraction/PostHeader";
import PostComment from "components/PostExtraction/PostComment";
import WriteComment from "components/PostExtraction/WriteComment";

const Post = () => {
  return (
    <div className={styles.postWrapper}>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.post}>
          <div className={styles.postImage}>
            <img src={nft1} />
          </div>

          <div className={styles.sideBar}>
            <div className={styles.commentCard}>
              <PostHeader />
              <PostComment reply={<PostComment />} />

              <WriteComment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
