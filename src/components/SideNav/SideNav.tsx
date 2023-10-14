import styles from "./Sidenav.module.css";
import nft from "lib/resources/images/icons/nft.svg";
import home from "lib/resources/images/icons/home.svg";
import community from "lib/resources/images/icons/comunity.svg";
import settings from "lib/resources/images/icons/settings.svg";
import hashtag from "lib/resources/images/icons/hashtag.svg";
import SideNavLink from "../SideNavLink/SideNavLink";
import { useLocation } from "react-router-dom";

const SideNav = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[1];
  return (
    <div className={styles.leftSideBarWrapper}>
      <div className={styles.leftSideBarContainer}>
        <div className={styles.leftMenu}>
          <SideNavLink name="Home" image={home} active={active === "home"} />
          <SideNavLink
            name="Explore"
            image={hashtag}
            active={active === "explore"}
          />
          <SideNavLink name="Nft" image={nft} active={active === "nft"} />
          <SideNavLink
            name="Community"
            image={community}
            active={active === "community"}
          />
          <SideNavLink
            name="Settings"
            image={settings}
            active={active === "settings"}
          />
        </div>
        <div className={styles.info}>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Help</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
          </ul>
          <span>© 2023 Bnollar</span>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
