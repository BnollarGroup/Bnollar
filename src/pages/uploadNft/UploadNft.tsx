import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./UploadNft.module.css";
import addIcon from "../../resources/images/icons/addicon.png"
import Fruit from '../../resources/images/icons/watermelon.png'
import UploadImgMiddleLogo from '../../resources/images/icons/uploadimgmiddlelogo.png'

function UploadNft() {
  const[browseNft, setopenBrowsenft] = useState(false)
  let browsenft
  if(browseNft){
    browsenft = <div className={classes.browse}>
    <div className={classes.container}>
      <div className={classes.uploadcontainter}>
        <input  type="file" className={classes.uploadFileInput}/>
        <div className={classes.uploadtext}>
          <h2>Drop image here, or</h2>
          <h3 className={classes.browsetext}>browse</h3>
        </div>
        <div className={classes.nftimage}>
          <img  className={classes.addicon} src={addIcon} />
          <img className={classes.uploadmiddlelogo} src={UploadImgMiddleLogo} />
        </div>
      </div>
      <div className={classes.nftdescription}>
        <div className={classes.collection}>
          <h1>Collection Name</h1>
          <input className={classes.collectioninput} type="text"  placeholder="My collection"/>
        </div>
        <div className={classes.category_shorturl}>
          <div className={classes.category}>
            <h1>Cateogry</h1>
            <select>
              <option value="">Select a category</option>
            </select>
          </div>
          <div className={classes.shorturl}>
          <h1>Short Url</h1>
            <input type="text" placeholder="bnollar.com/@Name" />
          </div>
        </div>
        <div className={classes.aboutcollection}>
          <h1>About Collection</h1>
          <textarea placeholder="Provide detailed description of your collection."></textarea>
        </div>
      <button className={classes.createnft}>Create Item</button>
      </div>
    </div>
  </div>
  }

  function browseOpen(){
    setopenBrowsenft(true)
  }

  return (
    <section className={classes.upload_nft}>
      <Navbar />
      {browsenft}
      <div className={classes.createnftwidth}>
        <div className={classes.leftSide}>
          <div className={classes.createNewNft}>
            <h1>Create New NFT</h1>
            <h3>Single edition on Etherium</h3>
          </div>
          <div className={classes.name}>
            <h1>Name</h1>
            <input className={classes.nameInput} type="text" placeholder="Name"/>
          </div>
          <div className={classes.upload}>
            <h1>Upload File</h1>
            <div className={classes.openBtn}>
            <button className={classes.uploadopenbutton} onClick={browseOpen}>Upload File</button>
            <h1 className={classes.uploadopentext}>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</h1>
            </div>
          </div>
          <div className={classes.description}>
            <h1>Description</h1>
            <textarea className={classes.descriptionInput} placeholder='Provide detailed description of your item.'></textarea>
          </div>
          <div className={classes.collection}>
            <h1>Collection</h1>
            <select className={classes.collectionSelect} >
              <option value="">Select collection</option>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
            </select>
          </div>
          <div className={classes.editorials_royalties}>
            <div className={classes.editorials}>
              <h1>Number of editorials</h1>
              <input className={classes.editorialsInput} type="text" placeholder="100" />
            </div>
            <div className={classes.royalties}>
              <h1>Royalties</h1>
              <input className={classes.royaltiesInput} type="text" placeholder="10" />
            </div>
          </div>
          <div className={classes.price}>
              <h1>Price</h1>
              <div className={classes.priceinpselect}>
              <input className={classes.priceInput} type="text" placeholder="2.5" />
              <select>
                <option>ETH</option>
              </select>
              </div>
            </div>
            <div className={classes.fee_recieve}>
              <div className={classes.fee_percent}>
                <h2>Service Fee</h2>
                <h2>2.5%</h2>
              </div> 
              <div className={classes.receive}>
                <h2>You will receive</h2>
                <h2>2.4375 ETH</h2>
              </div>
            </div>
            <button className={classes.createItem}>Create Item</button>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.pic_text}>
            <div className={classes.image}>
              <img src={Fruit}/>
            </div>
            <div className={classes.text}>
              <div className={classes.img_description}>
                <h1>Description</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}
export default UploadNft;
