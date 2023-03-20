import React, { useState } from 'react'
import style from "../nftCollection/NftCollection.module.css"
import Navbar from '../../components/Navbar/Navbar'
import HomeLogo from '../../resources/images/icons/home-simple-door.png'
import Hashtag from "../../resources/images/icons/hashtag.png"
import NFT from "../../resources/images/icons/stats-report.png"
import Group from '../../resources/images/icons/group.png'
import SettingsLogo from '../../resources/images/icons/settings.png'
import NftLogo from '../../resources/images/icons/Rectangle.png'
import NftMonkey from '../../resources/images/icons/monkey.png'
import Rightnavbar from '../../components/RightNavBar/rightnavbar'

function NftCollection() {
  const[nftPicture, setNftPicture] = useState([
    {"img": NftLogo, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
    {"img": NftMonkey, "name": "Mutant Hound Collar #4872" ,"price": "1.325ETH"},
  ])
  return (
    <section>
      <Navbar />
      <main>
      <div className={style.menu}>
        <Rightnavbar />
      </div>
      <div className={style.nftCollectioncontainter}>
        <div className={style.nftcollectionhead}>
          <h1>NFTs</h1>
          <h2>Collections</h2>
        </div>
        <div className={style.search}>
          <input type="text" placeholder='Search NFTs' />
        </div>
        <div className={style.nft_market}>
          {nftPicture.map((nft) => {
            return <div className={style.nft_description}>
              <div className={style.nft_description_img}>
                <img src={nft.img}/>
              </div>
              <div className={style.nft_text}>
              <h2>{nft.name}</h2>
              <h1>{nft.price}</h1>
              </div>
            </div>
          })}
        </div>
      </div>
      </main>
    </section>
  )
}

export default NftCollection