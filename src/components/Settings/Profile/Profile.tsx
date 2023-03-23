import { useState } from 'react'
import Buttons from '../Buttons/Buttons'
import contStyles from '../SettingsContainer.module.css'
import styles from './Profile.module.css'

interface formState {
  username: string
  displayName: string
  email: string
  websiteURL: string
  twitter: string
  instagram: string
}

const Profile = () => {
  const initialFormState = {
    username: '',
    displayName: '',
    email: '',
    websiteURL: '',
    twitter: '',
    instagram: '',
  }

  const [formState, setFormState] = useState<formState>({ ...initialFormState })

  const changeHandler = (property: string, value: string) => {
    const updatedState = { ...formState, [property]: value }
    setFormState(updatedState)
  }
  return (
    <div className={contStyles.containerWrapper}>
      <form className={contStyles.settingsContainer}>
        <div className={styles.profileDetails}>
          <h2 className={contStyles.contHeader}>Profile</h2>
          <p className={contStyles.message}>Edit your profile details</p>
          <div className={contStyles.line} />
          <div className={styles.inputsFlex}>
            <div className={styles.inputWrapper}>
              <p className={contStyles.message}>Username</p>
              <input
                className={styles.input}
                onChange={(e) => changeHandler('username', e.target.value)}
                type="text"
                placeholder="Username..."
                value={formState.username}
              />
            </div>
            <div className={styles.inputWrapper}>
              <p className={contStyles.message}>Display name</p>
              <input
                className={styles.input}
                onChange={(e) => changeHandler('displayName', e.target.value)}
                type="text"
                value={formState.displayName}
                placeholder="Display name..."
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <p className={contStyles.message}>Email address</p>
            <input
              className={styles.input}
              onChange={(e) => changeHandler('email', e.target.value)}
              type="email"
              value={formState.email}
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <div className={styles.socialLinks}>
          <h2 className={contStyles.contHeader}>Social link</h2>
          <p className={contStyles.message}>
            Add your existing social links to build a stronger reputatior
          </p>
          <div className={contStyles.line} />
          <div className={styles.inputWrapper}>
            <p className={contStyles.message}>Website URL</p>
            <input
              className={styles.input}
              onChange={(e) => changeHandler('websiteURL', e.target.value)}
              type="text"
              value={formState.websiteURL}
              placeholder="https://"
            />
          </div>
          <div className={styles.inputWrapper}>
            <p className={contStyles.message}>Twitter</p>
            <input
              className={styles.input}
              onChange={(e) => changeHandler('twitter', e.target.value)}
              type="text"
              value={formState.twitter}
              placeholder="Twitter username"
            />
          </div>
          <div className={styles.inputWrapper}>
            <p className={contStyles.message}>Instagram</p>
            <input
              className={styles.input}
              onChange={(e) => changeHandler('instagram', e.target.value)}
              type="text"
              value={formState.instagram}
              placeholder="Instagram username"
            />
          </div>
        </div>
        <div className={contStyles.line} />

        <Buttons updateButtonTitle="Update profile" />
      </form>
    </div>
  )
}

export default Profile
