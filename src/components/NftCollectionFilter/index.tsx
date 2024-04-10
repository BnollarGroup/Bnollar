import React, { useState } from "react";
import NftMonkey from "lib/resources/images/icons/nft.png";
import Circle from "lib/resources/images/icons/circle.png";
import ArrowDown from "lib/resources/images/icons/nav-arrow-down.png";
import RaribleLogo from "lib/resources/images/nft-collection/rarible.png";
import OpenSeaLogo from "lib/resources/images/nft-collection/open_sea.png";
import X2y2Logo from "lib/resources/images/nft-collection/x2y2.png";
import LooksRareLogo from "lib/resources/images/nft-collection/looks_rare.png";
import SudoSwapLogo from "lib/resources/images/nft-collection/sudoswap.png";
import SearchIcon from "lib/resources/images/icons/search.png";
import style from "./NftCollectionFilter.module.css";

interface NftFilterMenuProps {
  showNewestFilter: boolean;
  setShowNewestFilter: (showNewest: boolean) => void;
  selectedChains: string[];
  setSelectedChains: (chains: string[]) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  minPrice: string;
  setMinPrice: (price: string) => void;
  maxPrice: string;
  setMaxPrice: (price: string) => void;
  selectedMarketplaces: string[];
  setSelectedMarketplaces: (marketplaces: string[]) => void;
  selectedCollections: string[];
  setSelectedCollections: (collections: string[]) => void;
  selectedDates: string;
  setSelectedDates: (date: string) => void;
}

function NftFilterMenu({
  showNewestFilter,
  setShowNewestFilter,
  selectedChains,
  setSelectedChains,
  selectedStatus,
  setSelectedStatus,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  selectedMarketplaces,
  setSelectedMarketplaces,
  selectedCollections,
  setSelectedCollections,
  selectedDates,
  setSelectedDates,
}: NftFilterMenuProps) {
  const [showChainsFilter, setShowChainsFilter] = useState(false);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showMarketPlaceFilter, setShowMarketPlaceFilter] = useState(false);
  const [showCollectionFilter, setShowCollectionFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);

  const handleChainFilter = (chain: string) => {
    if (chain === "All Chains") {
      setSelectedChains([
        "All Chains",
        "Ethereum",
        "Solana",
        "Tezos",
        "Immutable X",
        "Polygon",
      ]);
    } else {
      const updatedSelectedChains = selectedChains.includes("All Chains")
        ? [chain]
        : [chain, ...selectedChains.filter((c) => c !== "All Chains")];
      setSelectedChains(updatedSelectedChains);
    }
    setShowChainsFilter(!showChainsFilter);
    setShowStatusFilter(false);
    setShowPriceFilter(false);
    setShowMarketPlaceFilter(false);
    setShowCollectionFilter(false);
    setShowDateFilter(false);
  };

  const handleMarketPlacesFilter = (marketplace: string) => {
    const updatedSelectedMarketplaces = selectedMarketplaces.includes(
      marketplace
    )
      ? selectedMarketplaces.filter((m) => m !== marketplace)
      : [...selectedMarketplaces, marketplace];
    setSelectedMarketplaces(updatedSelectedMarketplaces);
  };

  const handleChainsFilter = () => {
    if (selectedChains.includes("All Chains")) {
      setSelectedChains([]);
    } else {
      setSelectedChains([
        "All Chains",
        "Ethereum",
        "Solana",
        "Tezos",
        "Immutable X",
        "Polygon",
      ]);
    }
    setShowChainsFilter(!showChainsFilter);
    setShowStatusFilter(false);
    setShowPriceFilter(false);
    setShowMarketPlaceFilter(false);
    setShowCollectionFilter(false);
    setShowDateFilter(false);
  };

  const handleChainFilterDropdown = () => {
    setShowChainsFilter(!showChainsFilter);
    setShowStatusFilter(false);
    setShowPriceFilter(false);
    setShowMarketPlaceFilter(false);
    setShowCollectionFilter(false);
    setShowDateFilter(false);
  }

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
            <img
              src={Circle}
              className={style.circle}
              alt="Circle"
              onClick={handleChainFilterDropdown}
            />
            <div className={style.breakDown} onClick={handleChainFilterDropdown}>
              <button className={style.breakDownbtn}>All Chains</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
            {showChainsFilter && (
              <div className={style.chainsFilterBox}>
                {!selectedChains.includes('All Chains') &&
                  <div
                    className={style.optionBox}
                    onClick={() => {
                      setShowChainsFilter(false);
                      handleChainFilter("All Chains");
                    }}
                  >
                    <img src={Circle} className={style.circle} alt="Circle" />
                    <p className={style.options}>All Chains</p>
                  </div>
                }
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowChainsFilter(false);
                    handleChainFilter("Ethereum");
                  }}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Ethereum</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowChainsFilter(false);
                    handleChainFilter("Solana");
                  }}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Solana</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowChainsFilter(false);
                    handleChainFilter("Tezos");
                  }}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Tezos</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowChainsFilter(false);
                    handleChainFilter("Immutable X");
                  }}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Immutable X</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowChainsFilter(false);
                    handleChainFilter("Polygon");
                  }}
                >
                  <img src={Circle} className={style.circle} alt="Circle" />
                  <p className={style.options}>Polygon</p>
                </div>
              </div>
            )}
          </div>
          <div className={style.nftmenubtn} onClick={handleStatusFilter}>
            <button className={style.nftmenubutton}>Status</button>
            <img src={ArrowDown} className={style.breakDownArrow} />
            {showStatusFilter && (
              <div className={style.statusFilterBox}>
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowStatusFilter(false);
                    setSelectedStatus("");
                  }}
                >
                  <p className={style.options}>All</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowStatusFilter(false);
                    setSelectedStatus("Buy now");
                  }}
                >
                  <p className={style.options}>Buy now</p>
                </div>
                <div
                  className={style.optionBox}
                  onClick={() => {
                    setShowStatusFilter(false);
                    setSelectedStatus("Live auction");
                  }}
                >
                  <p className={style.options}>Live auction</p>
                </div>
              </div>
            )}
          </div>
          <div className={style.nftmenubtnWrapper}>
            <div className={style.nftmenubtn} onClick={handlePriceFilter}>
              <button className={style.nftmenubutton}>Price</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
            {showPriceFilter && (
              <div className={style.priceFilterBox}>
                <div className={style.CalculationBox}>
                  <input onChange={(e) => setMinPrice(e.target.value)} type="number" className={style.minMaxContent} placeholder="Min" />
                  <p className={style.dash}> - </p>
                  <input onChange={(e) => setMaxPrice(e.target.value)} type="number" className={style.minMaxContent} placeholder="Max" />
                </div>
                {/* <div className={style.chooseBox}>
                  <div className={style.leftPart}>
                    <img src={Circle} className={style.circle}></img>
                    <p className={style.cryptoChoice}>ETH</p>
                  </div>
                  <img src={ArrowDown} className={style.breakDownArrow} />
                </div> */}
                <button
                  className={style.applybtn}
                  onClick={() => setShowPriceFilter(false)}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
          <div className={style.nftmenubtnWrapper}>
            <div className={style.nftmenubtn} onClick={handleMarketPlaceFilter}>
              <button className={style.nftmenubutton}>Marketplace</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
            {showMarketPlaceFilter && (
              <div className={style.chainsFilterBox}>
                <div className={style.optionBox}>
                  <input
                    type="checkbox"
                    className={style.checkBox}
                    checked={selectedMarketplaces.includes("Rarible")}
                    onChange={() => handleMarketPlacesFilter("Rarible")}
                  />
                  <img
                    src={RaribleLogo}
                    className={style.marketplaceLogo}
                    alt="Rarible Logo"
                  />
                  <p className={style.options}>Rarible</p>
                </div>
                <div className={style.optionBox}>
                  <input
                    type="checkbox"
                    className={style.checkBox}
                    checked={selectedMarketplaces.includes("OpenSea")}
                    onChange={() => handleMarketPlacesFilter("OpenSea")}
                  />
                  <img
                    src={OpenSeaLogo}
                    className={style.marketplaceLogo}
                    alt="OpenSea Logo"
                  />
                  <p className={style.options}>OpenSea</p>
                </div>
                <div className={style.optionBox}>
                  <input
                    type="checkbox"
                    className={style.checkBox}
                    checked={selectedMarketplaces.includes("x2y2")}
                    onChange={() => handleMarketPlacesFilter("x2y2")}
                  />
                  <img
                    src={X2y2Logo}
                    className={style.marketplaceLogo}
                    alt="x2y2 Logo"
                  />
                  <p className={style.options}>x2y2</p>
                </div>
                <div className={style.optionBox}>
                  <input
                    type="checkbox"
                    className={style.checkBox}
                    checked={selectedMarketplaces.includes("Looks Rare")}
                    onChange={() => handleMarketPlacesFilter("Looks Rare")}
                  />
                  <img
                    src={LooksRareLogo}
                    className={style.marketplaceLogo}
                    alt="LooksRare Logo"
                  />
                  <p className={style.options}>Looks Rare</p>
                </div>
                <div className={style.optionBox}>
                  <input
                    type="checkbox"
                    className={style.checkBox}
                    checked={selectedMarketplaces.includes("Polygon")}
                    onChange={() => handleMarketPlacesFilter("Polygon")}
                  />
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
          <div className={style.nftmenubtnWrapper}>
            <div className={style.nftmenubtn} onClick={handleCollectionFilter}>
              <button className={style.nftmenubutton}>Collection</button>
              <img src={ArrowDown} className={style.breakDownArrow} />
            </div>
            {showCollectionFilter && (
              <div className={style.CollectionFilterBox}>
                <div className={style.collectionFilterSearch}>
                  <img src={SearchIcon} />
                  <input
                    className={style.collectionFilterSearchInput}
                    type="text"
                    placeholder="Search by collections"
                    onChange={(e) => setSelectedCollections([...selectedCollections, e.target.value])}
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
          <div className={style.nftmenubtn} onClick={handleDateFilter}>
            <button className={style.nftmenubutton}>Newest</button>
            <img src={ArrowDown} className={style.breakDownArrow} />
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
    </div >
  );
}

export default NftFilterMenu;
