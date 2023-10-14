import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NFTCollection.module.css";
import Navbar from "components/Navbar/Navbar";
import NftMonkey from "lib/resources/images/icons/nft.png";
import Rightnavbar from "components/RightNavbar/RightNavbar";
import NftFilterMenu from "components/NftCollectionFilter/NftCollectionFilter";

function NftCollection() {
  const [nftPicture, setNftPicture] = useState([
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
    { img: NftMonkey, name: "Potatoz #5610", price: "1.325 ETH" },
  ]);

  const [showNewestFilter, setShowNewestFilter] = useState(false);

  const navigate = useNavigate();

  const handleNftsClick = () => {
    setShowNewestFilter(false);
    navigate("/nft-collection");
  };

  const handleCollectionsClick = () => {
    setShowNewestFilter(true);
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
            <h1 onClick={handleNftsClick}>NFTs </h1>
            <h2 onClick={handleCollectionsClick}>Collections</h2>
          </div>
          <div className={style.search}>
            <input
              className={style.searchInput}
              type="text"
              placeholder="Search NFTs"
            />
          </div>
          <NftFilterMenu showNewestFilter={showNewestFilter} />
          <div className={style.nft_market}>
            {nftPicture.map((nft, index) => {
              return (
                <div key={index} className={style.nft_description}>
                  <div className={style.nft_description_img}>
                    <img src={nft.img} alt={nft.name} />
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
