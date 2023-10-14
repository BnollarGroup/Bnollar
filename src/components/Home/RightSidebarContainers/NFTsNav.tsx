import styles from "./ContactsNav.module.css";
import nft1 from "lib/resources/images/icons/nft1.svg";
import NFTItem from "./NFTItem/NFTItem";

const NFTsNav = () => {
  return (
    <div className={styles.containerWrapper}>
      <h2>Top NFTs</h2>
      <div className={styles.items_wrapper}>
        <NFTItem image={nft1} name="First NFT" />
        <NFTItem image={nft1} name="Second NFT" />
        <NFTItem image={nft1} name="third NFT" />
        <NFTItem image={nft1} name="fourth NFT" />
      </div>
    </div>
  );
};

export default NFTsNav;
