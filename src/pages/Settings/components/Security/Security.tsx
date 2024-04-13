// Security.js
import contStyles from "../../SettingsContainer.module.css";
import styles from "./Security.module.css";
import ToggleCard from "../ToggleCard/ToggleCard";
import Dropdown from "./DropDown/Dropdown";
import LinkCard from "./LinkCard/LinkCard";
import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import ChevronLeft from "lib/resources/images/icons/arrow-left.svg";

const Security = () => {
  const [activeMention, setActiveMention] = useState("Everyone");
  const [activeTags, setActiveTags] = useState("Everyone");
  const [showDropdownMention, setShowDropdownMention] = useState(false);
  const [showDropdownTags, setShowDropdownTags] = useState(false);

  const dropdownItems = [
    "Everyone",
    "Friends",
    "Only me",
    "Friends of friends",
  ];

  const toggleDropDowns = () => {
    if (showDropdownMention) {
      setShowDropdownMention(false);
    } else if (showDropdownTags) {
      setShowDropdownTags(false);
    }
  }
  return (
    <div className={contStyles.containerWrapper}>
      <div className={contStyles.mobileSettings}>
        <a href="/settings/:type">
          <img src={ChevronLeft} alt="" />
        </a>
        <h1 className={contStyles.mobileSettingsTitle}>Settings</h1>
      </div>
      <div className={contStyles.settingsContainer}>
        <h2 className={contStyles.contHeader}>Privacy & Policy</h2>
        <div className={contStyles.line} />
        <div className={contStyles.itemsWrapper}>
          <ToggleCard
            title="Private account"
            description="When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers won't be affected."
          />
          <ToggleCard
            title="Activity status"
            description="Allow accounts that you follow and anyone you message to see when you were last active or are currently active on Instagram apps. When this is turned off, you won't be able to see the activity status of other accounts."
          />
          <div className={styles.flex_between}>
            <div className={contStyles.labelWrap}>
              <h5 className={contStyles.label}>Mention</h5>
              <p className={contStyles.messageEdit}>Allow @mentions from</p>
            </div>
            <Dropdown
              items={dropdownItems}
              active={activeTags}
              set={setActiveTags}
              show={showDropdownMention}
              setShow={setShowDropdownMention}
              onClick={toggleDropDowns}
            />
          </div>
          <div className={styles.flex_between}>
            <div className={contStyles.labelWrap}>
              <h5 className={contStyles.label}>Tags</h5>
              <p className={contStyles.messageEdit}>Allow tags from</p>
            </div>
            <Dropdown
              items={dropdownItems}
              active={activeMention}
              set={setActiveMention}
              show={showDropdownTags}
              setShow={setShowDropdownTags}
              onClick={toggleDropDowns}
            />
          </div>
          <LinkCard
            title="Messages"
            description="Manage message settings"
            path="/settings/privacy&security_messages"
          />
          <LinkCard
            title="Comments"
            description="Edit comment settings"
            path="/settings/privacy&security_comments"
          />
        </div>
        <div className={contStyles.line} />

        <Buttons updateButtonTitle="Save information" />
      </div>
    </div>
  );
};

export default Security;
