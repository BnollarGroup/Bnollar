import styles from "./MobileNavBar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "lib/resources/svg/Home";
import Hashtag from "lib/resources/svg/Hashtag";
import Group from "lib/resources/svg/Group";
import Notification from "lib/resources/svg/Notification";
import Messages from "lib/resources/svg/Messages";

const MobileNavBar = () => {
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
      text: "Messages",
      icon: <Messages className={styles.icon} color="gray" />,
      href: "/profile-chat",
    },
    {
      text: "Notification",
      icon: <Notification className={styles.icon} color="gray" />,
      href: "/profile-chat",
    },
    {
      text: "Community",
      icon: <Group className={styles.icon} color="gray" />,
      href: "/grouppage",
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
    </div>
  );
};
export default MobileNavBar;
