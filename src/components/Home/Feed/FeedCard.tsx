import { useState } from 'react'
import styles from './FeedCard.module.css'
import user1 from '../../../resources/images/icons/user1.svg'
import verified from '../../../resources/images/icons/verified.svg'
import post1 from '../../../resources/images/posts/postImg1.svg'
import menuIcon from '../../../resources/images/icons/more-horiz.svg'
import { UpvoteButton, CommnetButton, ShareButton } from '../../Buttons/Buttons'
import Upperdropdown from './Dropdowns/Upperdropdown'

const FeedCard = (props: any) => {
  const [showMenuDropDown, setShowMenuDropDown] = useState(false)

  const handleMenuClick = () => {
    setShowMenuDropDown((prevState) => !prevState)
  }

  const isNft = props.isNft
  return (
    <div className={styles.feedCardWrapper}>
      <div className={styles.feedCard_user}>
        <img src={user1} />
      </div>
      <div className={styles.feedCard}>
        <div className={styles.feedCard_header}>
          <div className={styles.name_image}>
            <div className={styles.feedCard_header_name}>
              Christopher Williams
            </div>
            <div className={styles.feedCard_header_img}>
              <img src={verified} />
            </div>
            <div className={styles.feedCard_header_date}>Dec 14</div>
          </div>

          <div className={styles.feedCard_header_menu}>
            <div className={styles.menuIcon} onClick={handleMenuClick}>
              <img src={menuIcon} />
            </div>
            {showMenuDropDown && <Upperdropdown />}
          </div>
        </div>
        <div className={styles.feedCard_description}>
          <span>#Bitcoin</span> seems to be doing exactly what its done for
          about a year. Strong sell-off, consolidate & slow grind up, create a
          bear flag, RSI breaks down its trend line, bear flag breaks down for
          another strong sell-off and the cycle begins again.
        </div>
        <div className={styles.feedCard_image}>
          <img src={post1} />
        </div>
        {isNft && (
          <div className={styles.buyNowWrapper}>
            <div className={styles.buyNow_description}>
              <div>Clone X</div>
              <div>
                443 <span>ETH</span>
              </div>
            </div>
            <button className={styles.buyNow_button}>Buy now</button>
          </div>
        )}
        <div className={styles.feedCard_buttons}>
          <UpvoteButton />
          <CommnetButton />
          <ShareButton />
        </div>
      </div>
    </div>
  )
}
export default FeedCard
