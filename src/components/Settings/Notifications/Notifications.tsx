import Buttons from '../Buttons/Buttons'
import contStyles from '../SettingsContainer.module.css'
import ToggleCard from '../ToggleCard/ToggleCard'

const Notifications = () => {
  return (
    <div className={contStyles.containerWrapper}>
      <form className={contStyles.settingsContainer}>
        <h2 className={contStyles.contHeader}>Notifications</h2>
        <p className={contStyles.message}>
          Select the kinds of notifications you get about your activities,
          interests, and recommendations.
        </p>
        <div className={contStyles.line} />
        <div className={contStyles.itemsWrapper}>
          <ToggleCard
            title="Push notification"
            description="Get push notifications to find out what's going on when you're
                not on Bnollar."
          />
          <ToggleCard
            title="Email notification"
            description="Get emails to find out what's going on when you're not on
            Bnollar. You can turn them off anytime."
            linkName="Learn more"
          />
        </div>
        <div className={contStyles.line} />

        <Buttons updateButtonTitle="Save information" />
      </form>
    </div>
  )
}

export default Notifications
