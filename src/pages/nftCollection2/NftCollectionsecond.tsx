import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import style from '../nftCollection2/nftCollection2.module.css'
import RightSideBar from '../../components/RightNavBar/rightnavbar'
import NftPic from '../../resources/images/icons/nfts.png'
import ArrowDown from '../../resources/images/icons/nav-arrow-down.png'

function NftCollectionsecond() {
    const[nftCollectionSecond, setNftCollectionSecond] = useState([
        {"img": NftPic, "name": "Potatoz", "volume": 931.5 + "ETH", "price": 2.5 + "ETH", "owners": 243, "items": 9.999, "percent": 25 + "%" },
        {"img": NftPic, "name": "Potatoz", "volume": 931.5 + "ETH", "price": 2.5 + "ETH", "owners": 243, "items": 9.999, "percent": 25 + "%" },
        {"img": NftPic, "name": "Potatoz", "volume": 931.5 + "ETH", "price": 2.5 + "ETH", "owners": 243, "items": 9.999, "percent": 25 + "%" },
        {"img": NftPic, "name": "Potatoz", "volume": 931.5 + "ETH", "price": 2.5 + "ETH", "owners": 243, "items": 9.999, "percent": 25 + "%" },
        {"img": NftPic, "name": "Potatoz", "volume": 931.5 + "ETH", "price": 2.5 + "ETH", "owners": 243, "items": 9.999, "percent": 25 + "%" }
    ])
  return (
    <section>
        <Navbar />
        <div className={style.nftcollection2_main} >
            <div className={style.rightside}>
                <RightSideBar />
            </div>
            <div className={style.leftside}>
                <div className={style.description}>
                    <h1>Nft</h1>
                    <h2>Collection</h2>
                </div>
                <div className={style.searchinput}>
                    <input type="text" placeholder='Search NFTs' />
                </div>
                <div className={style.nftmenuposition}>
                    <div className={style.nftmenu}>
          <div className={style.chains}>
            <button>All Chains</button>
            <img src={ArrowDown}/>
          </div>
          <div className={style.nftmenubt}>
            <button>Status</button>
            <img src={ArrowDown}/>
          </div>
          <div className={style.nftmenubt}>
            <button>Price</button>
            <img src={ArrowDown}/>
          </div>
          <div className={style.lgbtn}>
            <button>Marketplace</button>
            <img src={ArrowDown}/>
          </div>
          <div className={style.lgbtn}>
            <button>Collection</button>
            <img src={ArrowDown}/>
          </div>
          </div>
          <div>
          <div className={style.smbtn}>
            <button>Newest</button>
            <img src={ArrowDown}/>
          </div>
          </div>
        </div>
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
                            {nftCollectionSecond.map((element) => {
                                return <div className={style.nft_postition}>
                                <div className={style.nft_element}>
                                    <div className={style.nft_img_name}>
                                        <img src={element.img} />
                                        <h1>{element.name}</h1>
                                    </div>
                                    <div className={style.volume_percent}>
                                        <h1>{element.volume}</h1>
                                        <h2>{element.percent}</h2>
                                    </div>
                                    <h1>{element.price}</h1>
                                    <h1>{element.owners}</h1>
                                    <h1>{element.items}</h1>
                                </div>
                                <div className={style.line}></div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NftCollectionsecond