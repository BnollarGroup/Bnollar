import React, { useState } from "react";
import Navbar from "components/Navbar";
import ChooseBlockchain from "components/UploadNFT/ChooseBlockchain/ChooseBlockchain";
import ChooseType from "components/UploadNFT/ChooseType/ChooseType";
import styles from "./UploadNFT.module.css";
import addIcon from "lib/resources/images/icons/addicon.png";
import Fruit from "lib/resources/images/icons/watermelon.png";
import UploadImgMiddleLogo from "lib/resources/images/icons/uploadimgmiddlelogo.png";

// export default function UploadNft() {
//   const [page, setPage] = useState<string>("chooseBlockchain");
//   return (
//     <section className={styles.container}>
//       <Navbar />

//       {page === "chooseBlockchain" ? (
//         <ChooseBlockchain setPage={setPage} />
//       ) : page === "chooseType" ? (
//         <ChooseType setPage={setPage} />
//       ) : null}
//     </section>
//   );
// }

function UploadNft() {
  const [browseNft, setopenBrowsenft] = useState(false);
  let browsenft;
  if (browseNft) {
    browsenft = (
      <div className={styles.browse}>
        <div className={styles.container}>
          <div className={styles.uploadcontainter}>
            <input type="file" className={styles.uploadFileInput} />
            <div className={styles.uploadtext}>
              <h2>Drop image here, or</h2>
              <h3 className={styles.browsetext}>browse</h3>
            </div>
            <div className={styles.nftimage}>
              <img className={styles.addicon} src={addIcon} />
              <img
                className={styles.uploadmiddlelogo}
                src={UploadImgMiddleLogo}
              />
            </div>
          </div>
          <div className={styles.nftdescription}>
            <div className={styles.collection}>
              <h1>Collection Name</h1>
              <input
                className={styles.collectioninput}
                type="text"
                placeholder="My collection"
              />
            </div>
            <div className={styles.category_shorturl}>
              <div className={styles.category}>
                <h1>Cateogry</h1>
                <select>
                  <option value="">Select a category</option>
                </select>
              </div>
              <div className={styles.shorturl}>
                <h1>Short Url</h1>
                <input type="text" placeholder="bnollar.com/@Name" />
              </div>
            </div>
            <div className={styles.aboutcollection}>
              <h1>About Collection</h1>
              <textarea placeholder="Provide detailed description of your collection."></textarea>
            </div>
            <button className={styles.createnft}>Create Item</button>
          </div>
        </div>
      </div>
    );
  }

  function browseOpen() {
    setopenBrowsenft(true);
  }

  return (
    <section className={styles.upload_nft}>
      <Navbar />
      {browsenft}
      <div className={styles.createnftwidth}>
        <div className={styles.leftSide}>
          <div className={styles.createNewNft}>
            <h1>Create New NFT</h1>
            <h3 className={styles.inscription}>Single edition on Etherium</h3>
          </div>
          <div className={styles.containerOfInputsAndNames}>
            <div className={styles.name}>
              <h1>Name</h1>
              <input
                className={styles.nameInput}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className={styles.upload}>
              <h1>Upload File</h1>
              <div className={styles.openBtn}>
                <button
                  className={styles.uploadopenbutton}
                  onClick={browseOpen}
                >
                  Upload File
                </button>
                <h1 className={styles.uploadopentext}>
                  PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                </h1>
              </div>
            </div>
            <div className={styles.description}>
              <h1>Description</h1>
              <textarea
                className={styles.descriptionInput}
                placeholder="Provide detailed description of your item."
              ></textarea>
            </div>
            <div className={styles.collection}>
              <h1>Collection</h1>
              <select className={styles.collectionSelect}>
                <option value="">Select collection</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className={styles.editorials_royalties}>
              <div className={styles.editorials}>
                <h1>Number of editorials</h1>
                <input
                  className={styles.editorialsInput}
                  type="text"
                  placeholder="100"
                />
              </div>
              <div className={styles.royalties}>
                <h1>Royalties</h1>
                <div className={styles.royaltiesPercent}>
                  <input
                    className={styles.royaltiesInput}
                    type="text"
                    placeholder="10"
                  />
                  <h3>%</h3>
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <h1>Price</h1>
              <div className={styles.priceinpselect}>
                <input
                  className={styles.priceInput}
                  type="text"
                  placeholder="2.5"
                />
                <select>
                  <option>ETH</option>
                </select>
              </div>
            </div>
            <div className={styles.fee_recieve}>
              <div className={styles.fee_percent}>
                <h2>Service Fee</h2>
                <h3>2.5%</h3>
              </div>
              <div className={styles.receive}>
                <h2>You will receive</h2>
                <h3>2.4375 ETH</h3>
              </div>
            </div>
          </div>
          <button className={styles.createItem}>Create Item</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.pic_text}>
            <div className={styles.image}>
              <img src={Fruit} className={styles.image}/>
            </div>
            <div className={styles.text}>
              <div className={styles.img_description}>
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
