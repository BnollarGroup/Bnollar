import styles from './ContactsNav.module.css'
import user1 from '../../../resources/images/icons/user1.svg'
import ContactItem from './ContactItem/ContactItem'

const ContactsNav = () => {
  return (
    <div className={styles.containerWrapper}>
      <h2>Contacts</h2>
      <div className={styles.items_wrapper}>
        <ContactItem image={user1} name="First User" active={true} />
        <ContactItem image={user1} name="Second User" active={false} />
        <ContactItem image={user1} name="Third User" active={true} />
      </div>
    </div>
  )
}

export default ContactsNav
