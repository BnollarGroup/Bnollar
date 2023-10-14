import globalStyles from "../Security.module.css";
import contStyles from "../../SettingsContainer.module.css";
import arrow from "../../../../lib/resources/images/Settings/arrow.png";
import { Link } from "react-router-dom";

interface LinkCardProps {
  title: string;
  description: string;
  path: string;
}

const LinkCard = ({ title, description, path }: LinkCardProps) => {
  return (
    <Link to={path} className={globalStyles.flex_between}>
      <div>
        <h5 className={contStyles.label}>{title}</h5>
        <p className={contStyles.message}>{description}</p>
      </div>
      <img src={arrow} alt="arrow" />
    </Link>
  );
};

export default LinkCard;
