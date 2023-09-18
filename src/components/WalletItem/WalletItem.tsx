import classes from "./WalletItem.module.css";
import { Link } from "react-router-dom";

interface WalletItemProps {
  image?: string;
  title: string;
  callback?: () => void;
}

const WalletItem = ({ image, title, callback }: WalletItemProps) => {
  const handleClick = () => {
    if (callback) {
      callback();
    }
  };

  return (
    <button onClick={handleClick} className={classes.wallet_item}>
      {image ? <img src={image} alt="wallet" /> : null}
      <p
        className={classes.wallet_name}
        style={!image ? { opacity: "40%" } : {}}
      >
        {title}
      </p>
    </button>
  );
};

export default WalletItem;
