import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../nftCollection/NftCollection.module.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchIcon from "../../resources/images/icons/search.png";
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
import RaribleLogo from "../../resources/images/nft-collection/rarible.png";
import OpenSeaLogo from "../../resources/images/nft-collection/open_sea.png";
import X2y2Logo from "../../resources/images/nft-collection/x2y2.png";
import LooksRareLogo from "../../resources/images/nft-collection/looks_rare.png";
import SudoSwapLogo from "../../resources/images/nft-collection/sudoswap.png";

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

  const [showChainsFilter, setShowChainsFilter] = useState(false);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showMarketPlaceFilter, setShowMarketPlaceFilter] = useState(false);
  const [showCollectionFilter, setShowCollectionFilter] = useState(false);

  const navigate = useNavigate();

  const handleNftsClick = () => {
    navigate("/nft-collection");
  };

  const handleCollectiosClick = () => {
    navigate("/nft-collectionprice");
  };

  const handleChainsFilter = () => {
    setShowChainsFilter(!showChainsFilter);
  };

  const handleStatusFilter = () => {
    setShowStatusFilter(!showStatusFilter);
  };

  const handlePriceFilter = () => {
    setShowPriceFilter(!showPriceFilter);
  };

  const handleMarketPlaceFilter = () => {
    setShowMarketPlaceFilter(!showMarketPlaceFilter);
  };

  const handleCollectionFilter = () => {
    setShowCollectionFilter(!showCollectionFilter);
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
            <input
              className={style.searchInput}
              type="text"
              placeholder="Search NFTs"
            />
          </div>
          <div className={style.nftmenu}>
            <div className={style.chains}>
              <img src={Circle} className={style.circle}></img>
              <div className={style.breakDown}>
                <button className={style.breakDownbtn}>All Chains</button>
                <img
                  src={ArrowDown}
                  className={style.breakDownArrow}
                  onClick={handleChainsFilter}
                />
              </div>
              {showChainsFilter && (
                <div className={style.chainsFilterBox}>
                  <div className={style.optionBox}>
                    <img src={Circle} className={style.circle} alt="Circle1" />
                    <p className={style.options}>Ethereum</p>
                  </div>
                  <div className={style.optionBox}>
                    <img src={Circle} className={style.circle} alt="Circle" />
                    <p className={style.options}>Solana</p>
                  </div>
                  <div className={style.optionBox}>
                    <img src={Circle} className={style.circle} alt="Circle" />
                    <p className={style.options}>Tezos</p>
                  </div>
                  <div className={style.optionBox}>
                    <img src={Circle} className={style.circle} alt="Circle" />
                    <p className={style.options}>Immutable X</p>
                  </div>
                  <div className={style.optionBox}>
                    <img src={Circle} className={style.circle} alt="Circle" />
                    <p className={style.options}>Polygon</p>
                  </div>
                </div>
              )}
            </div>
            <div className={style.nftmenubtn}>
              <button className={style.nftmenubutton}>Status</button>
              <img
                src={ArrowDown}
                className={style.breakDownArrow}
                onClick={handleStatusFilter}
              />
              {showStatusFilter && (
                <div className={style.statusFilterBox}>
                  <div className={style.optionBox}>
                    <p className={style.options}>All</p>
                  </div>
                  <div className={style.optionBox}>
                    <p className={style.options}>Buy now</p>
                  </div>
                  <div className={style.optionBox}>
                    <p className={style.options}>Live auction</p>
                  </div>
                </div>
              )}
            </div>
            <div className={style.nftmenubtn}>
              <button className={style.nftmenubutton}>Price</button>
              <img
                src={ArrowDown}
                className={style.breakDownArrow}
                onClick={handlePriceFilter}
              />
              {showPriceFilter && (
                <div className={style.priceFilterBox}>
                  <div className={style.CalculationBox}>
                    <input className={style.minMaxContent} placeholder="Min" />
                    <p className={style.dash}> - </p>
                    <input className={style.minMaxContent} placeholder="Max" />
                  </div>
                  <div className={style.chooseBox}>
                    <div className={style.leftPart}>
                      <img src={Circle} className={style.circle}></img>
                      <p className={style.cryptoChoice}>ETH</p>
                    </div>
                    <img src={ArrowDown} className={style.breakDownArrow} />
                  </div>
                  <button className={style.applybtn}>Apply</button>
                </div>
              )}
            </div>
            <div className={style.nftmenubtn}>
              <button className={style.nftmenubutton}>Marketplace</button>
              <img
                src={ArrowDown}
                className={style.breakDownArrow}
                onClick={handleMarketPlaceFilter}
              />
              {showMarketPlaceFilter && (
                <div className={style.chainsFilterBox}>
                  <div className={style.optionBox}>
                    <input type="checkbox" className={style.checkBox} />
                    <img
                      src={RaribleLogo}
                      className={style.marketplaceLogo}
                      alt="Rarible Logo"
                    />
                    <p className={style.options}>Rarible</p>
                  </div>
                  <div className={style.optionBox}>
                    <input type="checkbox" className={style.checkBox} />
                    <img
                      src={OpenSeaLogo}
                      className={style.marketplaceLogo}
                      alt="OpenSea Logo"
                    />
                    <p className={style.options}>OpenSea</p>
                  </div>
                  <div className={style.optionBox}>
                    <input type="checkbox" className={style.checkBox} />
                    <img
                      src={X2y2Logo}
                      className={style.marketplaceLogo}
                      alt="x2y2 Logo"
                    />
                    <p className={style.options}>x2y2</p>
                  </div>
                  <div className={style.optionBox}>
                    <input type="checkbox" className={style.checkBox} />
                    <img
                      src={LooksRareLogo}
                      className={style.marketplaceLogo}
                      alt="LooksRare Logo"
                    />
                    <p className={style.options}>Looks Rare</p>
                  </div>
                  <div className={style.optionBox}>
                    <input type="checkbox" className={style.checkBox} />
                    <img
                      src={SudoSwapLogo}
                      className={style.marketplaceLogo}
                      alt="SudoSwap Logo"
                    />
                    <p className={style.options}>Polygon</p>
                  </div>
                </div>
              )}
            </div>
            <div className={style.nftmenubtn}>
              <button className={style.nftmenubutton}>Collection</button>
              <img
                src={ArrowDown}
                className={style.breakDownArrow}
                onClick={handleCollectionFilter}
              />
              {showCollectionFilter && (
                <div className={style.CollectionFilterBox}>
                  <div className={style.collectionFilterSearch}>
                    <img src={SearchIcon} />
                    <input
                      className={style.collectionFilterSearchInput}
                      type="text"
                      placeholder="Search by collections"
                    />
                  </div>

                  <div className={style.optionBox}>
                    <img
                      src={NftMonkey}
                      className={style.nftPiece}
                      alt="NFT Piece"
                    />
                    <div className={style.nftInfoBox}>
                      <p className={style.place}>Rarible</p>
                      <p className={style.subtext}>Subtext</p>
                    </div>
                  </div>
                  <div className={style.optionBox}>
                    <img
                      src={NftMonkey}
                      className={style.nftPiece}
                      alt="NFT Piece"
                    />
                    <div className={style.nftInfoBox}>
                      <p className={style.place}>Rarible</p>
                      <p className={style.subtext}>Subtext</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
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
