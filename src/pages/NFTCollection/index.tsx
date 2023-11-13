import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NFTCollection.module.css";
import Navbar from "components/Navbar";
import NftMonkey from "lib/resources/images/icons/nft.png";
import Rightnavbar from "components/RightNavbar";
import NftFilterMenu from "components/NftCollectionFilter";
import Layout from "providers/Layout";

interface NftFilterMenuProps {
  showNewestFilter: boolean;
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

function NftCollection() {
  const [nftPicture, setNftPicture] = useState([
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
    {
      img: NftMonkey,
      name: "Potatoz #5610",
      price: "1.325 ETH",
      chain: "Ethereum",
      status: "Buy now",
      marketplace: "Rarible",
      collection: "Rarible",
      date: "2020-11-06",
    },
  ]);

  const [showNewestFilter, setShowNewestFilter] = useState(false);
  const [selectedChains, setSelectedChains] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>(
    []
  );
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedDates, setSelectedDates] = useState<string>("");

  const filteredNFTs = nftPicture.filter((nft) => {
    const matchesChains =
      selectedChains.length === 0 || selectedChains.includes(nft.chain);
    const matchesStatus =
      selectedStatus === "" || nft.status === selectedStatus;
    const matchesPrice =
      (minPrice === "" || parseFloat(nft.price) >= parseFloat(minPrice)) &&
      (maxPrice === "" || parseFloat(nft.price) <= parseFloat(maxPrice));
    const matchesMarketplaces =
      selectedMarketplaces.length === 0 ||
      selectedMarketplaces.includes(nft.marketplace);
    const matchesCollections =
      selectedCollections.length === 0 ||
      selectedCollections.includes(nft.collection);
    const matchesDates = selectedDates === "" || nft.date === selectedDates;

    return (
      matchesChains &&
      matchesStatus &&
      matchesPrice &&
      matchesMarketplaces &&
      matchesCollections &&
      matchesDates
    );
  });

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
    <Layout>
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
            <NftFilterMenu
              showNewestFilter={showNewestFilter}
              setShowNewestFilter={setShowNewestFilter}
              selectedChains={selectedChains}
              setSelectedChains={setSelectedChains}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedMarketplaces={selectedMarketplaces}
              setSelectedMarketplaces={setSelectedMarketplaces}
              selectedCollections={selectedCollections}
              setSelectedCollections={setSelectedCollections}
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
            />
            <div className={style.nft_market}>
              {filteredNFTs.map((nft, index) => {
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
    </Layout>
  );
}

export default NftCollection;
