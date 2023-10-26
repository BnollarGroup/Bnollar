import styles from "./LeftSideBar.module.css";
import nft from "lib/resources/images/icons/nft.svg";
import home from "lib/resources/images/icons/home.svg";
import comunity from "lib/resources/images/icons/comunity.svg";
import settings from "lib/resources/images/icons/settings.svg";
import hashtag from "lib/resources/images/icons/hashtag.svg";
import { useLocation, useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePage = location.pathname || "/home";

  const buttons: { text: string; icon: string; href: string }[] = [
    {
      text: "Home",
      icon: home,
      href: "/home",
    },
    {
      text: "Explore",
      icon: hashtag,
      href: "/explore",
    },
    {
      text: "NFT",
      icon: nft,
      href: "/nft",
    },
    { text: "Community", icon: comunity, href: "/grouppage" },
    { text: "Settings", icon: settings, href: "/settings/:type" },
  ];

  return (
    <div className={styles.leftSideBarWrapper}>
      <div className={styles.leftMenu}>
        {buttons.map((button, i) => (
          <button
            className={
              activePage === button.href
                ? `${styles.leftMenuButton} ${styles.leftMenuButtonActive}`
                : styles.leftMenuButton
            }
            key={i}
            onClick={() => navigate(button.href)}
          >
            <img src={button.icon} alt="home" />

            {button.text}
          </button>
        ))}
      </div>

      <div className={styles.info}>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <span>© 2023 Bnollar</span>
      </div>
    </div>
  );
};
export default LeftSideBar;
