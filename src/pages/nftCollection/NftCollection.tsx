import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../nftCollection/NftCollection.module.css";
import Navbar from "../../components/Navbar/Navbar";
import HomeLogo from "../../resources/images/icons/home-simple-door.png";
import Hashtag from "../../resources/images/icons/hashtag.png";
import NFT from "../../resources/images/icons/stats-report.png";
import Group from "../../resources/images/icons/group.png";
import SettingsLogo from "../../resources/images/icons/settings.png";
import NftLogo from "../../resources/images/icons/Rectangle.png";
import NftMonkey from "../../resources/images/icons/nft.png";
import Circle from "../../resources/images/icons/circle.png";
import Rightnavbar from "../../components/RightNavBar/rightnavbar";
import ArrowDown from "../../resources/images/icons/nav-arrow-down.png";

function NftCollection() {
  const [nftPicture, setNftPicture] = useState([
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
    { img: NftMonkey, name: "Mutant Hound Collar #4872", price: "1.325ETH" },
  ]);

  const navigate = useNavigate();

  const handleNftsClick = () => {
    navigate("/nft-collection");
  };

  const handleCollectiosClick = () => {
    navigate("/nft-collectionprice");
  };

  return (
    <section>
      <Navbar />
      <main>
        <div className={style.menu}>
          <Rightnavbar />
        </div>
        <div className={style.nftCollectioncontainer}>
          <div className={style.nftcollectionhead}>
            <h1 onClick={handleNftsClick}>NFTs</h1>
            <h2 onClick={handleCollectiosClick}>Collections</h2>
          </div>
          <div className={style.search}>
            <input type="text" placeholder="Search NFTs" />
          </div>
          <div className={style.nftmenu}>
            <div className={style.chains}>
              <img src={Circle} className={style.circle}></img>
              <div className={style.breakDown}>
                <button>All Chains</button>
                <img src={ArrowDown} className={style.breakDownArrow} />
              </div>
            </div>
            <div className={style.nftmenubtn}>
              <button>Status</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
            <div className={style.nftmenubtn}>
              <button>Price</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
            <div className={style.nftmenubtn}>
              <button>Marketplace</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
            <div className={style.nftmenubtn}>
              <button>Collection</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
          </div>
          <div className={style.nft_market}>
            {nftPicture.map((nft, index) => {
              return (
                <div key={index} className={style.nft_description}>
                  <div className={style.nft_description_img}>
                    <img src={nft.img} />
                  </div>
                  <div className={style.nft_text}>
                    <h2>{nft.name}</h2>
                    <h1>{nft.price}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </section>
  );
}

export default NftCollection;
