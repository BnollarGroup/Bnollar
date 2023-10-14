import React, { useState } from "react";
import NftMonkey from "../../lib/resources/images/icons/nft.png";
import Circle from "../../lib/resources/images/icons/circle.png";
import ArrowDown from "../../lib/resources/images/icons/nav-arrow-down.png";
import RaribleLogo from "../../lib/resources/images/nft-collection/rarible.png";
import OpenSeaLogo from "../../lib/resources/images/nft-collection/open_sea.png";
import X2y2Logo from "../../lib/resources/images/nft-collection/x2y2.png";
import LooksRareLogo from "../../lib/resources/images/nft-collection/looks_rare.png";
import SudoSwapLogo from "../../lib/resources/images/nft-collection/sudoswap.png";
import SearchIcon from "../../lib/resources/images/icons/search.png";
import style from "./NftCollectionFilter.module.css";

interface NftFilterMenuProps {
  showNewestFilter: boolean;
}

function NftFilterMenu({ showNewestFilter }: NftFilterMenuProps) {
  const [showChainsFilter, setShowChainsFilter] = useState(false);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showMarketPlaceFilter, setShowMarketPlaceFilter] = useState(false);
  const [showCollectionFilter, setShowCollectionFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);

  const handleChainsFilter = () => {
    setShowChainsFilter(!showChainsFilter);
    setShowStatusFilter(false);
    setShowPriceFilter(false);
    setShowMarketPlaceFilter(false);
    setShowCollectionFilter(false);
    setShowDateFilter(false);
  };

  const handleStatusFilter = () => {
    setShowStatusFilter(!showStatusFilter);
    setShowChainsFilter(false);
    setShowPriceFilter(false);
    setShowMarketPlaceFilter(false);
    setShowCollectionFilter(false);
    setShowDateFilter(false);
  };

  const handlePriceFilter = () => {
    setShowPriceFilter(!showPriceFilter);
    setShowChainsFilter(false);
    setShowStatusFilter(false);
    setShowMarketPlaceFilter(false);
    setShowCollectionFilter(false);
    setShowDateFilter(false);
  };

  const handleMarketPlaceFilter = () => {
    setShowMarketPlaceFilter(!showMarketPlaceFilter);
    setShowChainsFilter(false);
    setShowStatusFilter(false);
    setShowPriceFilter(false);
    setShowCollectionFilter(false);
    setShowDateFilter(false);
  };

  const handleCollectionFilter = () => {
    setShowCollectionFilter(!showCollectionFilter);
    setShowChainsFilter(false);
    setShowStatusFilter(false);
    setShowPriceFilter(false);
    setShowMarketPlaceFilter(false);
    setShowDateFilter(false);
  };

  const handleDateFilter = () => {
    setShowDateFilter(!showDateFilter);
    setShowCollectionFilter(false);
    setShowChainsFilter(false);
    setShowStatusFilter(false);
    setShowPriceFilter(false);
    setShowMarketPlaceFilter(false);
  };

  return (
    <div className={style.nftmenuMain}>
      <div className={style.nftmenuWrapper}>
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
                <div
                  className={style.optionBox}
                  onClick={() => setShowChainsFilter(false)}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Ethereum</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => setShowChainsFilter(false)}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Solana</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => setShowChainsFilter(false)}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Tezos</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => setShowChainsFilter(false)}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Immutable X</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => setShowChainsFilter(false)}
                >
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
                <div
                  className={style.optionBox}
                  onClick={() => setShowStatusFilter(false)}
                >
                  <p className={style.options}>All</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => setShowStatusFilter(false)}
                >
                  <p className={style.options}>Buy now</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => setShowStatusFilter(false)}
                >
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
                <button
                  className={style.applybtn}
                  onClick={() => setShowPriceFilter(false)}
                >
                  Apply
                </button>
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

                <div
                  className={style.optionBox}
                  onClick={() => setShowCollectionFilter(false)}
                >
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
                <div
                  className={style.optionBox}
                  onClick={() => setShowCollectionFilter(false)}
                >
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
        {showNewestFilter && (
          <div className={style.nftmenubtn}>
            <button className={style.nftmenubutton}>Newest</button>
            <img
              src={ArrowDown}
              className={style.breakDownArrow}
              onClick={handleDateFilter}
            />
            {showDateFilter && (
              <div className={style.dateFilterBox}>
                <div
                  className={style.optionBox}
                  onClick={() => setShowDateFilter(false)}
                >
                  <p className={style.options}>Newest</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => setShowDateFilter(false)}
                >
                  <p className={style.options}>Oldest</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NftFilterMenu;
