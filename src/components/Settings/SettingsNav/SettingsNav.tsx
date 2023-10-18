import SideNavLink from "../../SideNavLink/SideNavLink";
import styles from "./SettingsNav.module.css";
import Chevron from "../../../resources/images/icons/chevron-right.svg";
import Logo from "../../../resources/images/logo/bnollar_logo.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface SettingsNavProps {
  active: string;
}

const SettingsNav = ({ active }: SettingsNavProps) => {
  const { type } = useParams();
  const [isTopNavVisible, setIsTopNavVisible] = useState(true);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(true);

  const handleLinkClick = () => {
    setIsTopNavVisible(false);
    setIsMobileNavVisible(false);
  };

  useEffect(() => {
    if (
      window.location.pathname === "/settings/profile" ||
      window.location.pathname === "/settings/manage_wallets" ||
      window.location.pathname === "/settings/notification" ||
      window.location.pathname === "/settings/privacy&security"
    ) {
      handleLinkClick();
    }
  }, [handleLinkClick]);

  return (
    <div className={styles.settingsNavContainer}>
      {isTopNavVisible && (
        <div className={styles.topNavMobileWrapper}>
          <div className={styles.topNavMobile}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.mobileSettings}>
            <h1 className={styles.mobileSettingsTitle}>Settings</h1>
          </div>
        </div>
      )}
      <div className={styles.settingsNavWrapper}>
        <SideNavLink
          to="/settings/profile"
          name="Profile"
          active={active === "profile"}
        />
        <SideNavLink
          to="/settings/manage_wallets"
          name="Manage wallets"
          active={active === "manage_wallets"}
        />

        <SideNavLink
          to="/settings/notification"
          name="Notifications"
          active={active === "notification"}
        />
        <SideNavLink
          name="Privacy & Security"
          to="/settings/privacy&security"
          active={
            active === "privacy&security" ||
            active === "privacy&security_messages" ||
            active === "privacy&security_comments"
          }
        />
      </div>

      {isMobileNavVisible && (
        <div className={styles.settingsNavWrapperMobile}>
          <div className={styles.linkWrapper}>
            <SideNavLink
              to="/settings/profile"
              name="Profile"
              active={active === "profile"}
              onClick={handleLinkClick}
            />
            <img src={Chevron} />
          </div>
          <div className={styles.linkWrapper}>
            <SideNavLink
              to="/settings/manage_wallets"
              name="Manage wallets"
              active={active === "manage_wallets"}
              onClick={handleLinkClick}
            />
            <img src={Chevron} />
          </div>
          <div className={styles.linkWrapper}>
            <SideNavLink
              to="/settings/notification"
              name="Notifications"
              active={active === "notification"}
              onClick={handleLinkClick}
            />

            <img src={Chevron} />
          </div>
          <div className={styles.linkWrapper}>
            <SideNavLink
              name="Privacy & Security"
              to="/settings/privacy&security"
              active={
                active === "privacy&security" ||
                active === "privacy&security_messages" ||
                active === "privacy&security_comments"
              }
              onClick={handleLinkClick}
            />
            <img src={Chevron} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsNav;
