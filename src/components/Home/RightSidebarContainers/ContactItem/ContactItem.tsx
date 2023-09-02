import styles from './ContactItem.module.css'

interface ContactItemProps {
  image: string
  name: string
  active: boolean
}
const ContactItem = ({ image, name, active }: ContactItemProps) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactIconWrapper}>
        {active && <div className={styles.activeIcon} />}
        <img src={image} alt="user icon" />
      </div>
      <span>{name}</span>
    </div>
  )
}

export default ContactItem
