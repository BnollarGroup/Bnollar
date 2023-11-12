import { close } from "features/modal/modalSlice";
import { useAppDispatch } from "hooks/useRedux";
import style from "./UploadFile.module.css";
import addIcon from "lib/resources/images/icons/addicon.png";
import UploadImgMiddleLogo from "lib/resources/images/icons/uploadimgmiddlelogo.png";
import Select from "components/Select";
import { useState } from "react";

export default function UploadNFTUploadFileModal() {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(close());
  };
const [ inputValue, setInputValue ] = useState<any>("");
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
                { inputValue.length < 1 ? <span>@Name</span> : null }
              </div>
            </div>
          </div>

          <div className={style.aboutcollection}>
            <h1>About Collection</h1>
            <textarea placeholder="Provide detailed description of your collection."></textarea>
          </div>

          <button className={style.createnft}>Create Item</button>
        </div>
      </div>
    </div>
  );
}
