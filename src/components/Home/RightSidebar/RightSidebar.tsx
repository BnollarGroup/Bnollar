import ContactsNav from '../RightSidebarContainers/ContactsNav'
import NFTsNav from '../RightSidebarContainers/NFTsNav'
import styles from './RightSidebar.module.css'

const RightSidebar = () => {
  return (
    <div className={styles.rightSideBarWrapper}>
      <div className={styles.rightSidebarCont}>
        <ContactsNav />
        <NFTsNav />
      </div>
    </div>
  )
}
export default RightSidebar
