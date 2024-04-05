import { useEffect, useState } from "react";
import styles from "./CreateNewNFT.module.css";
import Fruit from "lib/resources/images/icons/watermelon.png";
import emptyPic from "lib/resources/images/upload-nft/createNewNFT/emptyPic.png";
import emptyText from "lib/resources/images/upload-nft/createNewNFT/emptyText.png";
import Select from "components/Select";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { change } from "features/modal/modalSlice";
import { useScreenSize } from "hooks/useScreenSize";
import clsx from "clsx";

type newNftProps = {
  blockchain: string | null;
  type: string | null;
}
function CreateNewNFT({ blockchain, type }: newNftProps) {
  const dispatch = useAppDispatch();
  const size = useScreenSize();
  const { collectionInputValue } = useAppSelector((state) => state.modals);
  const [categories, setCategories] = useState<
    { value: string; text: string; onClick?: () => void }[]
  >([]);

  console.log("collectionInputValue", collectionInputValue);

  const [collection, setCollection] = useState("select-category");
  const [price, setPrice] = useState("2.5");
  const [image, setImage] = useState<any>();
  const [description, setDescription] = useState("");

  const isMobile = size === "md" || size === "sm" || size === "xs";

  useEffect(() => {
    if (!collectionInputValue) {
      return;
    }

    setCategories([
      { text: collectionInputValue, value: collectionInputValue },
    ]);
  }, [collectionInputValue]);
  const handleCollectionChange = (selectedValue: string) => {
    if (selectedValue === 'add-category') {
      // Dispatch action or perform any other necessary actions for adding category
      dispatch(change('uploadNFT-uploadFile'));
      // Update the collection state to 'select-category' after performing the action
      setCollection('select-category');
    } else {
      // Update the collection state for other options
      setCollection(selectedValue);
    }
  };

  if (!isMobile) {
    return (
      <section className={styles.upload_nft}>
        <div className={styles.createnftwidth}>
          <div className={styles.leftSide}>
            <div className={styles.createNewNft}>
              <h1>Create New NFT</h1>
              <h3 className={styles.inscription}>{type} edition on {blockchain}</h3>
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
                {!image}
                <div
                  className={clsx(styles.openBtn, image && styles.autoHeight)}
                >
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
                  maxLength={126}
                  className={styles.descriptionInput}
                  placeholder="Provide detailed description of your item."
                  onChange={(v) => setDescription(v.target.value)}
                />
              </div>

              <div className={styles.collection}>
                <h1>Collection</h1>

                <Select
                  value={collection}
                  onChange={handleCollectionChange}
                  // onChange={(e) => setCollection(e.target.value as any)}
                  data={[
                    {
                      value: "select-category",
                      text: "Select a category"
                    },
                    {
                      value: "add-category",
                      text: "Add category",
                      onClick: () => {
                        setCollection('select-category');
                        dispatch(change("uploadNFT-uploadFile"));
                      },
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
                  <h3>{+price - (+price * 2.5) / 100} ETH</h3>
                </div>
              </div>
            </div>
            <button className={styles.createItem}>Create Item</button>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.pic_text}>
              <div className={styles.image}>
                {!image ? (
                  <img src={emptyPic} className={styles.image} />
                ) : (
                  <img
                    src={image}
                    alt="Uploaded image"
                    className={styles.smallUploadedImage}
                  />
                )}
              </div>
              <div className={styles.text}>
                {description.length > 1 ? (
                  <div className={styles.img_description}>
                    <h1>{description}</h1>
                  </div>
                ) : (
                  <div className={styles.emptyTextDiv}>
                    <img src={emptyText} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
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
            {!image}
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
              maxLength={126}
              className={styles.descriptionInput}
              placeholder="Provide detailed description of your item."
              onChange={(v) => setDescription(v.target.value)}
            />
          </div>

          <div className={styles.collection}>
            <h1>Collection</h1>

            <Select
              value={collection}
              onChange={handleCollectionChange}
              // onChange={(e) => setCollection(e.target.value as any)}
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
                ...categories,
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
              <h3>+price - {(+price * 2.5) / 100} ETH</h3>
            </div>
          </div>
        </div>
        <button className={styles.createItem}>Create Item</button>
      </div>
    </>
  );
}

export default CreateNewNFT;
