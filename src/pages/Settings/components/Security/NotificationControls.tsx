// NotificationControls.js
import contStyles from "../../SettingsContainer.module.css";
import styles from "./Security.module.css";
import Dropdown from "./DropDown/Dropdown";
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
  const [showDropdownPhone, setShowDropdownPhone] = useState(false);
  const [showDropdownFollow, setShowDropdownFollow] = useState(false);
  const [showDropdownFOF, setShowDropdownFOF] = useState(false);
  const [showDropdownOthers, setShowDropdownOthers] = useState(false);

  const dropdownItems = ["Chat", "Message requests", "someitem"];

  const toggleDropdowns = (dropdownType: string) => {
    switch (dropdownType) {
      case 'phone':
        setShowDropdownPhone(!showDropdownPhone);
        setShowDropdownFollow(false);
        setShowDropdownFOF(false);
        setShowDropdownOthers(false);
        break;
      case 'follow':
        setShowDropdownPhone(false);
        setShowDropdownFollow(!showDropdownFollow);
        setShowDropdownFOF(false);
        setShowDropdownOthers(false);
        break;
      case 'fOF':
        setShowDropdownPhone(false);
        setShowDropdownFollow(false);
        setShowDropdownFOF(!showDropdownFOF);
        setShowDropdownOthers(false);
        break;
      case 'others':
        setShowDropdownPhone(false);
        setShowDropdownFollow(false);
        setShowDropdownFOF(false);
        setShowDropdownOthers(!showDropdownOthers);
        break;
      default:
        break;
    }
  };

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
              <Dropdown
                items={dropdownItems}
                active={phone}
                set={setPhone}
                show={showDropdownPhone}
                setShow={setShowDropdownPhone}
                onClick={() => toggleDropdowns('phone')}
              />
            </div>
            <div className={styles.flex_between}>
              <h5 className={contStyles.label}>Accounts you follow</h5>
              <Dropdown
                items={dropdownItems}
                active={follow}
                set={setFollow}
                show={showDropdownFollow}
                setShow={setShowDropdownFollow}
                onClick={() => toggleDropdowns('follow')}
              />
            </div>
            <div className={styles.flex_between}>
              <h5 className={contStyles.label}>Friends of friends</h5>
              <Dropdown
                items={dropdownItems}
                active={fOF}
                set={setFOF}
                show={showDropdownFOF}
                setShow={setShowDropdownFOF}
                onClick={() => toggleDropdowns('fOF')}
              />
            </div>
            <div className={styles.flex_between}>
              <h5 className={contStyles.label}>Others</h5>
              <Dropdown
                items={dropdownItems}
                active={others}
                set={setOthers}
                show={showDropdownOthers}
                setShow={setShowDropdownOthers}
                onClick={() => toggleDropdowns('others')}
              />
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
