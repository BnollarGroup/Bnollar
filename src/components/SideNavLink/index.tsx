import { Link } from "react-router-dom";
import styles from "./SideNavLink.module.css";

interface SideNavLink {
  name: string;
  image?: string;
  active: boolean;
  to?: string;
  onClick?: () => void;
}

const SideNavLink = ({ name, image, active, to, onClick }: SideNavLink) => {
  return (
    <Link
      to={to || "#"}
      className={`${styles.side_nav_link} ${active && styles.active}`}
      onClick={onClick}
    >
      {image && <img src={image} alt={name} />}
      {name}
    </Link>
  );
};

export default SideNavLink;
