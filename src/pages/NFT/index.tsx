import React, { useState } from "react";
import Navbar from "components/Navbar";
import styles from "./NFT.module.css";
import nft1 from "lib/resources/images/icons/nftImage.svg";
import userIcon1 from "lib/resources/images/icons/userIcon3.svg";
import userIcon2 from "lib/resources/images/icons/userIcon4.svg";
import transfer from "lib/resources/images/icons/transfer.svg";
import icon from "lib/resources/images/icons/nav_arrow.svg";
import shareIcon from "lib/resources/images/icons/share-ios.png";
import { useScreenSize } from "hooks/useScreenSize";
import Layout from "providers/Layout";

const Description = () => {
  const [showDescription, setShowDescription] = React.useState(true);
  const handleClick = () => {
    setShowDescription((prevState) => !prevState);
  };

  return (
    <div className={styles.nftModuleWrapper}>
      <div className={styles.moduleName}>
        Description{" "}
        <button onClick={handleClick} className={styles.navArrowDownBtn}>
          {" "}
          <img src={icon} />{" "}
        </button>
      </div>
      {showDescription && (
        <div className={styles.moduleBody}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the {`industry's`} standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </div>
      )}
    </div>
  );
};

const Properties = () => {
  const [showProperties, setShowProperties] = useState(true);

  const handleClick = () => {
    setShowProperties((prevState) => !prevState);
  };

  const Item = () => {
    return (
      <div className={styles.propertieItem}>
        <div className={styles.propertieItemTop}>Backgorund</div>
        <div className={styles.propertieItemCenter}>Purple</div>
        <div className={styles.propertieItemBottom}>1.3%</div>
      </div>
    );
  };

  return (
    <div className={styles.propertiesWrapper}>
      <div className={styles.propertiesName}>
        Properties{" "}
        <button onClick={handleClick} className={styles.navArrowDownBtn}>
          {" "}
          <img src={icon} alt="Toggle Properties" />{" "}
        </button>
      </div>
      {showProperties && (
        <div className={styles.propertieItems}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      )}
    </div>
  );
};

const Details = () => {
  const [showDetails, setShowDetails] = useState(true);

  const handleClick = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsName}>
        Token details
        <button onClick={handleClick} className={styles.navArrowDownBtn}>
          {" "}
          <img src={icon} alt="Toggle Details" />{" "}
        </button>
      </div>
      {showDetails && (
        <div className={styles.detailsItems}>
          <div className={styles.detailsItem}>
            <div className={styles.itemName}>Contract Address</div>
            <div className={styles.itemValue}>0x7E091b…031A</div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.itemName}>Token ID</div>
            <div className={styles.itemValue}>4502665</div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.itemName}>Blockchain</div>
            <div className={styles.itemValue}>BNB Chain</div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.itemName}>Token Standard</div>
            <div className={styles.itemValue}>ERC-721</div>
          </div>
        </div>
      )}
    </div>
  );
};
const NftHistory = () => {
  return (
    <div className={styles.historyWrapper}>
      <div className={styles.historyHeader}>
        <div>
          <div className={styles.nftItemName}>CloneX #9378</div>
          <div className={styles.nftCollectionName}>CloneX</div>
        </div>
        <button className={styles.shareIconBtn}>
          <img src={shareIcon} alt="share" />
        </button>
      </div>
      <div className={styles.historyBody}>
        <div className={styles.historyCollection}>
          <div className={styles.historyUserInfo}>
            <img src={userIcon1} alt="image 1" />
            <div className={styles.historyDescription}>
              <p>Collection</p>
              <p>0x423...32X3</p>
            </div>
          </div>
          <div className={styles.historyUserInfo}>
            <img src={userIcon2} alt="image 1" />
            <div className={styles.historyDescription}>
              <p>Owner</p>
              <p>0x423...32X3</p>
            </div>
          </div>
        </div>
        <div className={styles.historyOwner}>
          <div className={styles.historyPrice}>
            <p className={styles.historyItemTop}>Price</p>
            <p className={styles.historyItemCenter}>6.194 ETH</p>
            <p className={styles.historyItemBottom}>$7,519</p>
          </div>
          <div className={styles.historyPriceOwner}>
            <p className={styles.historyItemTop}>Highest bid</p>
            <p className={styles.historyItemCenter}>1.21 wETH</p>
            <p className={styles.historyItemBottom}>By Quark</p>
          </div>
        </div>
      </div>
      <div className={styles.buyButton}>Buy now for 6.194 ETH</div>
    </div>
  );
};
const Activity = () => {
  const ActivityCard = () => {
    return (
      <div className={styles.activityCard}>
        <div className={styles.activityCardName}>
          <button className={styles.transferBtn}>
            <img src={transfer} alt="transfer" />
            Transfer
          </button>
        </div>
        <div className={styles.activityCardFooter}>
          <div>
            <span>From</span>Katama
          </div>
          <div>
            <span>To</span>Zamara
          </div>
          <div>
            <span>1 day ago</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.activityWrapper}>
      <div className={styles.activityName}>Activity</div>
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </div>
  );
};

const Nft = () => {
  const size = useScreenSize();

  const isMobile = size === "md" || size === "sm" || size === "xs";

  if (isMobile) {
    return (
      <Layout>
        <div className={styles.nftWrapper}>
          <Navbar />
          <div className={styles.imgWrapper}>
            <img src={nft1} alt="NFT" />
          </div>
          <div className={styles.nftInfoWrapper}>
            <NftHistory />
            <Activity />
            <Description />
            <Properties />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.nftWrapper}>
        <Navbar />
        <div className={styles.leftPanel}>
          <div className={styles.imgWrapper}>
            <img src={nft1} alt="NFT" />
          </div>
          <Description />
          <Details />
          <Properties />
        </div>
        <div className={styles.rightPanel}>
          <NftHistory />
          <Activity />
        </div>
      </div>
    </Layout>
  );
};

export default Nft;
