import styles from "./LeftSideBar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "lib/resources/svg/Home";
import Statistics from "lib/resources/svg/Statistics";
import Hashtag from "lib/resources/svg/Hashtag";
import Group from "lib/resources/svg/Group";
import Wheel from "lib/resources/svg/Wheel";

const LeftSidebar = () => {
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
      icon: <Hashtag className={styles.icon} color="gray" />,
      href: "/explore",
    },
    {
      text: "NFT",
      icon: <Statistics className={styles.icon} color="gray" />,
      href: "/nft",
    },
    {
      text: "Community",
      icon: <Group className={styles.icon} color="gray" />,
      href: "/grouppage",
    },
    {
      text: "Settings",
      icon: <Wheel className={styles.icon} color="gray" />,
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
export default LeftSidebar;
