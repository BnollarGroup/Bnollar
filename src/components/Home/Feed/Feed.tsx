import styles from './Feed.module.css'
import FeedCard from './FeedCard'
import FeedHeader from './FeedHeader'

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
