import { useState } from "react";
import styles from "./CreateNewNFT.module.css";
import Fruit from "lib/resources/images/icons/watermelon.png";
import Select from "components/Select";
import { useAppDispatch } from "hooks/useRedux";
import { change } from "features/modal/modalSlice";
import clsx from "clsx";

function CreateNewNFT() {
  const dispatch = useAppDispatch();

  const [collection, setCollection] = useState("select-category");
  const [price, setPrice] = useState("2.5");
  const [image, setImage] = useState<any>();

  return (
    <section className={styles.upload_nft}>
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
              {!image && <h1>Upload File</h1>}
              <div className={clsx(styles.openBtn, image && styles.autoHeight)}>
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded image"
                    className={styles.uploadedImage}
                  />
                ) : (
                  <>
                    <input
                      type="file"
                      className={styles.uploadFileInput}
                      onChange={(e) => {
                        const file = e.currentTarget.files?.[0] as File;
                        const url = URL.createObjectURL(file);

                        setImage(url);
                      }}
                      accept="image/png image/gif image/webp video/mp4 audio/mp3"
                    />
                    <button className={styles.uploadopenbutton}>
                      Upload File
                    </button>
                    <h1 className={styles.uploadopentext}>
                      PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                    </h1>
                  </>
                )}
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
                value={collection}
                onChange={(e) => setCollection(e.target.value as any)}
                data={[
                  {
                    value: "select-category",
                    text: "Select a category",
                  },
                  {
                    value: "add-category",
                    text: "Add category",
                    onClick: () => dispatch(change("uploadNFT-uploadFile")),
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
                  type="number"
                  placeholder="100"
                />
              </div>
              <div className={styles.royalties}>
                <h1>Royalties</h1>
                <div className={styles.royaltiesPercent}>
                  <input
                    className={styles.royaltiesInput}
                    type="number"
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
                  type="number"
                  placeholder="2.5"
                  onChange={(v) => setPrice(v.target.value)}
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
                <h3>{(+price * 2.5) / 100} ETH</h3>
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

export default CreateNewNFT;
