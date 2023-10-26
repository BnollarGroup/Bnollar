import styles from "./LeftSideBar.module.css";
import nft from "lib/resources/images/icons/nft.svg";
import home from "lib/resources/images/icons/home.svg";
import comunity from "lib/resources/images/icons/comunity.svg";
import settings from "lib/resources/images/icons/settings.svg";
import hashtag from "lib/resources/images/icons/hashtag.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "lib/resources/svg/Home";
import Statistics from "lib/resources/svg/Statistics";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePage = location.pathname || "/home";

  const buttons: { text: string; icon: React.ReactNode; href: string }[] = [
    {
      text: "Home",
      icon: <Home className={styles.icon} color="gray" />,
      href: "/home",
    },
    {
      text: "Explore",
      icon: <Home className={styles.icon} color="gray" />,
      href: "/explore",
    },
    {
      text: "NFT",
      icon: <Statistics className={styles.icon} color="gray" />,
      href: "/nft",
    },
    {
      text: "Community",
      icon: <Home className={styles.icon} color="gray" />,
      href: "/grouppage",
    },
    {
      text: "Settings",
      icon: <Home className={styles.icon} color="gray" />,
      href: "/settings/:type",
    },
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
            {button.icon}

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
