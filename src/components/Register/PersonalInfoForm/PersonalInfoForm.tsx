import imgIcon from "lib/resources/images/registration/imgIcon.svg";
import addIcon from "lib/resources/images/registration/addIcon.svg";
import styles from "./PersonalInfoForm.module.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropzone from "react-dropzone";

interface PersonalInfoFormProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  displayName: string;
  setDisplayName: Dispatch<SetStateAction<string>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  coverImage: string;
  setCoverImage: Dispatch<SetStateAction<string>>;
}

const PersonalInfoForm = ({
  userName,
  setUserName,
  displayName,
  setDisplayName,
  image,
  setImage,
  coverImage,
  setCoverImage,
}: PersonalInfoFormProps) => {
  const [canCreate, setCanCreate] = useState(false);
  const { step } = useParams();
  const dropzoneRef = useRef(null);

  const navigate = useNavigate();

  const imageHandler = (file: File, imageName: string) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        if (imageName === "profile") {
          setImage(reader.result);
        } else if (imageName === "cover") {
          setCoverImage(reader.result);
        }
      }
    });
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (userName?.length > 3 && displayName?.length > 3) {
      setCanCreate(true);
    } else {
      setCanCreate(false);
    }
  }, [userName, displayName, step]);

  const handleClick = () => {
    if (canCreate) {
      navigate("/register/category");
    }
  };

  const openDialog = () => {
    if (dropzoneRef.current) {
      (dropzoneRef.current as any).open();
    }
  };

  return (
    <div>
      <Dropzone
        ref={dropzoneRef}
        onDrop={(acceptedFiles) => imageHandler(acceptedFiles[0], "cover")}
        noClick
        noKeyboard
        accept={{
          "image/png": [".png"],
          "image/jpg": [".jpg"],
          "image/jpeg": [".jpeg"],
        }}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <div {...getRootProps({ className: styles.dropzone })}>
              <input {...getInputProps()} />
              {coverImage ? (
                <img className={styles.coverImage} src={coverImage} alt="" />
              ) : (
                <p>
                  Drop image here, or{" "}
                  <span className={styles.browse} onClick={openDialog}>
                    browse
                  </span>
                </p>
              )}
            </div>
          );
        }}
      </Dropzone>
      <div className={styles.addImg}>
        <img
          className={image ? styles.uploaded : styles.notUploaded}
          src={image || imgIcon}
          alt="img icon"
        />
        <input
          type="file"
          id="file-input"
          onChange={(e) => imageHandler((e.target as any).files[0], "profile")}
          style={{ display: "none" }}
        />
        <label className={styles.plusButton} htmlFor="file-input">
          <img src={addIcon} alt="Upload File" />
        </label>
      </div>

      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        ></input>
        <button
          className={`${styles.createButton} ${canCreate && styles.active}`}
          onClick={handleClick}
        >
          Create account
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
