import contStyles from "../SettingsContainer.module.css";
import styles from "./Security.module.css";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";
import ChevronLeft from "lib/resources/images/icons/arrow-left.svg";
import goBack from "lib/resources/images/Settings/goBack.png";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";

interface NotificationControlsProps {
  type: string;
}

const NotificationControls = ({ type }: NotificationControlsProps) => {
  const [phone, setPhone] = useState("Chat");
  const [follow, setFollow] = useState("Chat");
  const [fOF, setFOF] = useState("Chat");
  const [others, setOthers] = useState("Message requests");

  const dropdownItems = ["Chat", "Message requests", "someitem"];
  return (
    <div className={contStyles.containerWrapper}>
      <div className={contStyles.mobileSettings}>
        <a href="/settings/privacy&security">
          <img src={ChevronLeft} alt="" />
        </a>
        <h1 className={contStyles.mobileSettingsTitle}>Privacy & Policy</h1>
      </div>
      <div className={contStyles.settingsContainer}>
        <div className={contStyles.topPart}>
          <div className={contStyles.arrow_header}>
            <Link to="/settings/privacy&security" className={styles.linkBack}>
              <img src={goBack} alt="" />
            </Link>
            <h2 className={contStyles.contHeader}>{type} controls</h2>
          </div>

          <div className={contStyles.line} />
          <div className={contStyles.itemsWrapper}>
            <div className={styles.flex_between}>
              <h5 className={contStyles.label}>
                People with your phone number
              </h5>
              <Dropdown items={dropdownItems} active={phone} set={setPhone} />
            </div>
            <div className={styles.flex_between}>
              <h5 className={contStyles.label}>Accounts you follow</h5>
              <Dropdown items={dropdownItems} active={follow} set={setFollow} />
            </div>
            <div className={styles.flex_between}>
              <h5 className={contStyles.label}>Friends of friends</h5>
              <Dropdown items={dropdownItems} active={fOF} set={setFOF} />
            </div>
            <div className={styles.flex_between}>
              <h5 className={contStyles.label}>Others</h5>
              <Dropdown items={dropdownItems} active={others} set={setOthers} />
            </div>
          </div>
          <div className={contStyles.line} />
        </div>
        <Buttons updateButtonTitle="Save information" />
      </div>
    </div>
  );
};

export default NotificationControls;
