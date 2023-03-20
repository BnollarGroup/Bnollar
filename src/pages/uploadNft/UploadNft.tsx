import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./UploadNft.module.css";
import addIcon from "../../resources/images/icons/addicon.png"

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
          <img src={addIcon} />
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
            <button className={classes.openBtn} onClick={browseOpen}>Upload File</button>
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
              <input className={classes.priceInput} type="text" placeholder="2.5" />
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
              image
            </div>
            <div className={classes.text}>
              <h1>text</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadNft;
