import { Link } from "react-router-dom";
import styles from "./SideNavLink.module.css";

interface SideNavLink {
  name: string;
  image?: string;
  active: boolean;
  to?: string;
}

const SideNavLink = ({ name, image, active, to }: SideNavLink) => {
  return (
    <Link
      to={to || "#"}
      className={`${styles.side_nav_link} ${active && styles.active}`}
    >
      {image && <img src={image} alt={name} />}
      {name}
    </Link>
  );
};

export default SideNavLink;
