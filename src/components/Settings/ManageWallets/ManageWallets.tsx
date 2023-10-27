import contStyles from "../SettingsContainer.module.css";
import styles from "./ManageWallets.module.css";
import WalletItem from "../WalletItem/WalletItem";
import ChevronLeft from "lib/resources/images/icons/arrow-left.svg";
import plus from "lib/resources/images/Settings/plus.png";
import Buttons from "../Buttons/Buttons";

const ManageWallets = () => {
  return (
    <div className={contStyles.containerWrapper}>
      <div className={contStyles.mobileSettings}>
        <a href="/settings/:type">
          <img src={ChevronLeft} alt="" />
        </a>
        <h1 className={contStyles.mobileSettingsTitle}>Settings</h1>
      </div>
      <div className={contStyles.settingsContainer}>
        <div className={contStyles.topPart}>
          <div className={contStyles.headerBox}>
            <h2 className={contStyles.contHeader}>Manage Wallets</h2>
            <p className={contStyles.messageEdit}>
              Add one or more wallets to showcase all your NFTs in one place.
            </p>
          </div>
          <div className={contStyles.line} />
          <div className={contStyles.itemsWrapper}>
            <WalletItem
              iconColor="#6E87E8"
              id="0x1968b1254115E9782...6B1d"
              name="Ethereum"
            />
            <WalletItem
              iconColor="#8551DD"
              id="0x1968b1254115E9782...6B1d"
              name="Polygon"
            />
            <button className={styles.linkNew}>
              <img src={plus} />
              <span>Link new wallet</span>
            </button>
          </div>
          <div className={contStyles.line} />
        </div>
        <Buttons updateButtonTitle="Save information" />
      </div>
    </div>
  );
};

export default ManageWallets;
