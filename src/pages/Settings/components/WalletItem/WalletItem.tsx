import styles from "./WalletItem.module.css";
import contStyles from "../../SettingsContainer.module.css";
import dots from "lib/resources/images/Settings/dots.png";

interface WalletItemProps {
  iconColor: string;
  id: string;
  name: string;
}

const WalletItem = ({ iconColor, id, name }: WalletItemProps) => {
  return (
    <div className={`${styles.flex} ${styles.justify_bet}`}>
      <div className={styles.flex}>
        <div
          style={{ backgroundColor: iconColor }}
          className={styles.walletIcon}
        />
        <div className={styles.name_id}>
          <h4 className={contStyles.label}>{id}</h4>
          <p className={contStyles.messageEdit}>{name}</p>
        </div>
      </div>
      <div className={styles.dotsWrapper}>
        <img src={dots} />
      </div>
    </div>
  );
};

export default WalletItem;
