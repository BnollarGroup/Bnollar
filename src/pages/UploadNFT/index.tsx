import React, { useState } from "react";
import Navbar from "components/Navbar";
import ChooseBlockchain from "components/UploadNFT/ChooseBlockchain/ChooseBlockchain";
import ChooseType from "components/UploadNFT/ChooseType/ChooseType";
import styles from "./UploadNFT.module.css";
import addIcon from "lib/resources/images/icons/addicon.png";
import Fruit from "lib/resources/images/icons/watermelon.png";
import UploadImgMiddleLogo from "lib/resources/images/icons/uploadimgmiddlelogo.png";
import ArrowDown from "lib/resources/svg/ArrowDown";
import Select from "components/Select";
import { useAppDispatch } from "hooks/useRedux";
import { change } from "features/modal/modalSlice";

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
  const dispatch = useAppDispatch();

  return (
    <section className={styles.upload_nft}>
      <Navbar />
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
                  onClick={() => dispatch(change("uploadNFT-uploadFile"))}
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
              />
            </div>

            <div className={styles.collection}>
              <h1>Collection</h1>

              <Select
                data={[
                  {
                    value: "category",
                    text: "Select a category",
                  },
                ]}
                className={styles.collectionSelect}
              />
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
              <img src={Fruit} className={styles.image} />
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
