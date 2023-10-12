import classes from "./WalletItem.module.css";
import { useNavigate } from "react-router-dom";

interface WalletItemProps {
  title: string;
  callback: () => void;
  disabled?: boolean;
  image?: string;
}

const WalletItem = ({
  title,
  callback,
  disabled = false,
  image,
}: WalletItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register/:step");
    if (callback) {
      callback();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={classes.wallet_item}
      disabled={disabled}
    >
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
