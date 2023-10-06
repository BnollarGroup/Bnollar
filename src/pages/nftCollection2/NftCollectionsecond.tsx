import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import style from "../nftCollection2/nftCollection2.module.css";
import NftPic from "../../resources/images/icons/nfts.png";
import NftFilterMenu from "../../components/NftCollectionFilter/NftCollectionFilter";
import Rightnavbar from "../../components/RightNavBar/rightnavbar";
import Chevron from "../../resources/images/icons/chevron-right.svg";

interface NftFilterMenuProps {
  showNewestFilter: boolean;
}

function NftCollectionsecond({ showNewestFilter }: NftFilterMenuProps) {
  const [nftCollectionSecond, setNftCollectionSecond] = useState([
    {
      img: NftPic,
      name: "Potatoz",
      volume: 931.5 + "ETH",
      price: 2.5 + " " + "ETH",
      owners: 243,
      items: 9.999,
      percent: "+" + 24 + "%",
    },
    {
      img: NftPic,
      name: "Potatoz",
      volume: 931.5 + "ETH",
      price: 2.5 + " " + "ETH",
      owners: 243,
      items: 9.999,
      percent: "+" + 24 + "%",
    },
    {
      img: NftPic,
      name: "Potatoz",
      volume: 931.5 + "ETH",
      price: 2.5 + " " + "ETH",
      owners: 243,
      items: 9.999,
      percent: "+" + 24 + "%",
    },
    {
      img: NftPic,
      name: "Potatoz",
      volume: 931.5 + "ETH",
      price: 2.5 + " " + "ETH",
      owners: 243,
      items: 9.999,
      percent: "+" + 24 + "%",
    },
    {
      img: NftPic,
      name: "Potatoz",
      volume: 931.5 + "ETH",
      price: 2.5 + " " + "ETH",
      owners: 243,
      items: 9.999,
      percent: "+" + 24 + "%",
    },
  ]);

  const navigate = useNavigate();

  const handleNftsClick = () => {
    navigate("/nft-collection");
  };

  const handleCollectionsClick = () => {
    navigate("/nft-collectionprice");
  };

  return (
    <section>
      <Navbar />
      <div className={style.nftcollection2_main}>
        <div>
          <Rightnavbar />
        </div>
        <div className={style.leftside}>
          <div className={style.description}>
            <h1 onClick={handleNftsClick}>NFTs</h1>
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
          <div className={style.nftmenuposition}>
            <div className={style.nfts}>
              <div className={style.nfts_sections}>
                <h1>Collection</h1>
                <h1>Day volume</h1>
                <h1>Floor price</h1>
                <h1>Owners</h1>
                <h1>Items</h1>
              </div>
              <div className={style.nfts_cols}>
                <div className={style.nfts_cols_loop}>
                  {nftCollectionSecond.map((element, index) => {
                    return (
                      <div key={index} className={style.nft_position}>
                        <div className={style.nft_element}>
                          {/* <div className={style.nft_img_name_wrap}> */}
                          <div className={style.nft_img_name}>
                            <img src={element.img} />
                            <h1>{element.name}</h1>
                          </div>
                          <img
                            src={Chevron}
                            className={style.right_arrow}
                            alt="Right arrow"
                          />
                          <div className={style.volume_percent}>
                            <h1>{element.volume}</h1>
                            <h2>{element.percent}</h2>
                          </div>
                          <h1 className={style.price}>{element.price}</h1>
                          <h1 className={style.owners}>{element.owners}</h1>
                          <h1 className={style.items}>{element.items}</h1>
                        </div>

                        <div className={style.nft_element_mobile}>
                          <div className={style.nft_element_mobile_flex}>
                            <div className={style.nft_img_name_wrap}>
                              <div className={style.nft_img_name}>
                                <img src={element.img} />
                                <h1>{element.name}</h1>
                              </div>
                              <img
                                src={Chevron}
                                className={style.right_arrow}
                                alt="Right arrow"
                              />
                            </div>
                            <div className={style.nfts_sections_mobile_wrap}>
                              <div className={style.nfts_sections_mobile}>
                                {/* <h1>Collection</h1> */}
                                <h1>Day volume</h1>
                                <h1>Floor price</h1>
                                <h1>Owners</h1>
                                <h1>Items</h1>
                              </div>
                              <div className={style.info_wrap}>
                                <div className={style.volume_percent}>
                                  <h1>{element.volume}</h1>
                                  <h2>{element.percent}</h2>
                                </div>
                                <h1 className={style.price}>{element.price}</h1>
                                <h1 className={style.owners}>
                                  {element.owners}
                                </h1>
                                <h1 className={style.items}>{element.items}</h1>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={style.line}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftCollectionsecond;
