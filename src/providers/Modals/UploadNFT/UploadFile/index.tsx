import { close, collectionInputValueChange } from "features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import style from "./UploadFile.module.css";
import addIcon from "lib/resources/images/icons/addicon.png";
import UploadImgMiddleLogo from "lib/resources/images/icons/uploadimgmiddlelogo.png";
import Select from "components/Select";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function UploadNFTUploadFileModal() {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(close());
  };

  const [collectionInputValue, setCollectionInputValue] = useState("");
  const [inputValue, setInputValue] = useState<any>("");


  const handleCollectionInputChange = (value: string) => {
    setCollectionInputValue(value);
    dispatch(collectionInputValueChange(value));
  };


  return (
    <div className={style.browse}>
      <div className={style.background} onClick={handleClose} />

      <div className={style.container}>
        <div className={style.uploadcontainter}>
          <input type="file" className={style.uploadFileInput} />

          <div className={style.uploadtext}>
            <h2>Drop image here, or</h2>
            <h3 className={style.browsetext}>browse</h3>
          </div>

          <div className={style.nftimage}>
            <img className={style.addicon} src={addIcon} />
            <img className={style.uploadmiddlelogo} src={UploadImgMiddleLogo} />
          </div>
        </div>

        <div className={style.nftdescription}>
          <div className={style.collection}>
            <h1>Collection Name</h1>

            <input
              className={style.collectioninput}
              type="text"
              placeholder="My collection"
              onChange={(v) => handleCollectionInputChange(v.target.value)}
            />
          </div>

          <div className={style.category_shorturl}>
            <div className={style.category}>
              <h1>Category</h1>

              <Select
                data={[
                  {
                    value: "category",
                    text: "Select a category",
                  },
                  {
                    value: "category",
                    text: "Art",
                  },
                  {
                    value: "category",
                    text: "Gaming",
                  },
                  {
                    value: "category",
                    text: "Memberships",
                  },
                  {
                    value: "category",
                    text: "PFPs",
                  },
                  {
                    value: "category",
                    text: "Music",
                  },
                ]}
                className={style.categorySelectContainer}
              />
            </div>

            <div className={style.shorturl}>
              <h1>Short Url</h1>

              <div>
                <input type="text" placeholder="bnollar.com/" onChange={(v) => setInputValue(v)} />
                {/* value={`bnollar.com/${collectionInputValue}`} */}
                {inputValue.length < 1 ? <span>{collectionInputValue}</span> : null}
              </div>
            </div>
          </div>

          <div className={style.aboutcollection}>
            <h1>About Collection</h1>
            <textarea placeholder="Provide detailed description of your collection."></textarea>
          </div>

          <Link to="/nft">
            <button className={style.createnft} onClick={handleClose}>Create Item</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
