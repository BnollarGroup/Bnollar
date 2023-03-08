import FeedCard from '../../../components/Home/Feed/FeedCard'
import FeedHeader from '../../../components/Home/Feed/FeedHeader'
import styles from './Feed.module.css'

const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
      <FeedHeader />
      <FeedCard />
      <FeedCard isNft={true} />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  )
}
export default Feed
