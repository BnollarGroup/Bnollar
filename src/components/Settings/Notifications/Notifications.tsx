import Buttons from "../Buttons/Buttons";
import contStyles from "../SettingsContainer.module.css";
import ToggleCard from "../ToggleCard/ToggleCard";
import ChevronLeft from "lib/resources/images/icons/arrow-left.svg";

const Notifications = () => {
  return (
    <div className={contStyles.containerWrapper}>
      <div className={contStyles.mobileSettings}>
        <a href="/settings/:type">
          <img src={ChevronLeft} alt="" />
        </a>
        <h1 className={contStyles.mobileSettingsTitle}>Settings</h1>
      </div>
      <form className={contStyles.settingsContainer}>
        <div className={contStyles.topPart}>
          <div className={contStyles.headerBox}>
            <h2 className={contStyles.contHeader}>Notifications</h2>
            <p className={contStyles.messageEdit}>
              Select the kinds of notifications you get about your activities,
              interests, and recommendations.
            </p>
          </div>
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
        </div>
        <Buttons updateButtonTitle="Save information" />
      </form>
    </div>
  );
};

export default Notifications;
