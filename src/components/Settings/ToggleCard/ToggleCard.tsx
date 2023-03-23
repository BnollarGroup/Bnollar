import styles from './ToggleCard.module.css'
import contStyles from '../SettingsContainer.module.css'

interface ToggleCardProps {
  title: string
  description: string
  linkName?: string
}

const ToggleCard = ({ title, description, linkName }: ToggleCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <h5 className={contStyles.label}>{title}</h5>
        <p className={contStyles.message}>
          {description}{' '}
          {linkName && (
            <a href="#" className={styles.link}>
              {linkName}
            </a>
          )}
        </p>
      </div>
      <label className={styles.switch}>
        <input type="checkbox" id="push_notification" />
        <span className={styles.slider} />
      </label>
    </div>
  )
}

export default ToggleCard
