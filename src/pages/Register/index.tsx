import React, { FC, useState, useEffect, useRef } from "react";
import styles from "./Register.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "lib/resources/images/logo/bnollar_logo.svg";
import registerBg from "lib/resources/images/registration/register_bg.svg";
import imgIcon from "lib/resources/images/registration/imgIcon.svg";
import addIcon from "lib/resources/images/registration/addIcon.svg";
import Cancel from "lib/resources/images/icons/cancel.svg";
import ok from "lib/resources/images/registration/ok.svg";
import Edit from "lib/resources/images/icons/edit (2).png";
import { useNavigate } from "react-router-dom";
import registerSchema from "lib/schemas/registerSchema";
import { postData } from "api/apiService";
import { ethers } from "ethers";
import { registerWithMetaMask } from "api/metamask/MetaMask";
import { log } from "console";

interface Category {
  id: number;
  name: string;
  selected: boolean;
}

const CATEGORIES: Category[] = [
  { id: 1, name: "Business", selected: false },
  { id: 2, name: "Creative", selected: false },
  { id: 3, name: "Education", selected: false },
  { id: 4, name: "Entertainment", selected: false },
  { id: 5, name: "Fashion & Beauty", selected: false },
  { id: 6, name: "Food", selected: false },
  { id: 7, name: "Government & Politics", selected: false },
  { id: 8, name: "Health & Wealness", selected: false },
  { id: 9, name: "More", selected: false },
];

type UseCategoriesType = {
  categories: Category[];
  toggleSelect: (id: number) => void;
};

const useCategories = (): UseCategoriesType => {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);

  const toggleSelect = (id: number) => {
    setCategories((categories) => {
      return categories.map((category) => {
        return category.id === id
          ? {
            ...category,
            selected: !category.selected,
          }
          : category;
      });
    });
  };

  return { categories, toggleSelect };
};

const Register: FC = () => {
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [showRegister, setShowRegister] = useState(true);
  const [showSelectCategory, setShowSelectCategory] = useState(false);
  const [showAllSet, setShowAllSet] = useState(false);
  const { categories, toggleSelect } = useCategories();
  const [dropText, setDropText] = useState("Drop image here,");
  const [active, setActive] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [coverImageTag, setCoverImageTag] = useState<string | null>(null);
  const [profileImageTag, setProfileImageTag] = useState<string | null>(null);
  const inputRefCover = useRef<HTMLInputElement | null>(null);
  const inputRefProfile = useRef<HTMLInputElement | null>(null);
  const [isCoverImageUploaded, setIsCoverImageUploaded] = useState(false);
  const [showProfileImgSettings, setShowProfileImgSettings] = useState(false);
  const [profileUrl, setProfileUrl] = useState<string>("");
  const [coverUrl, setCoverUrl] = useState<string>("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitHandler = async (data: {
    displayName: string;
    username: string;
    walletAddress: string,
    profilePicture?: string,
    coverPicture?: string
  }) => {
    setUserName(data.username);
    setDisplayName(data.displayName);
    setWalletAddress(data.walletAddress);
    setShowSelectCategory(true);
    setShowRegister(false);
    try {
      // Constructing data object with the expected format
      const postingData = {
        wallet_address: data.walletAddress,
        display_name: data.displayName,
        username: data.username,
        profile_picture: profileImage, // You can add profile picture if available
        cover_picture: coverImage    // You can add cover picture if available
      };

      // console.log(data);
      // console.log(postingData);
      // console.log(inputRefProfile);
      // console.log(JSON.stringify(postingData))
      // Posting user registration data to the specified URL
      // await postData('http://64.226.94.204:1337/api/accounts/register', postingData, 'application/json');
      await registerWithMetaMask(postingData);

      // const registerWithMetaMaskk = async () => {
      //   try {
      //     // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      //     // const account = accounts[0];
      //     // console.log('Registering with account:', account);
      //     console.log(postingData.wallet_address, postingData.display_name, postingData.username )
      //     // Call your backend registration endpoint
      //     fetch('http://64.226.94.204:1337/api/accounts/register/', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ wallet_address: postingData.wallet_address , display_name: postingData.display_name, username: postingData.username }),
      //     })
      //       .then(response => {
      //         // if (!response.ok) {
      //         //   throw new Error('Network response was not ok');
      //         // }
      //         console.log('Registration successful');
      //       })
      //       .catch(error => console.error('Registration failed:', error));
      //   } catch (error) {
      //     console.error('MetaMask registration error:', error);
      //   }
      // }
      // registerWithMetaMaskk();

    } catch (err) {
      console.error(err);
    }
  };


  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
      displayCoverFile();
      setIsCoverImageUploaded(true);
      console.log(isCoverImageUploaded);
      console.log("browsing");
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
      displayProfileFile();
      setShowProfileImgSettings(false);
      console.log("browsing");
    }
  };

  const handleProfileSettingView = () => {
    setShowProfileImgSettings(!showProfileImgSettings);
    console.log(showProfileImgSettings);
  };

  const handleRemoveProfile = () => {
    setProfileImage(null);
    setProfileImageTag(null);
    setShowProfileImgSettings(false);
  };

  const handleRemoveCover = () => {
    setCoverImage(null);
    setCoverImageTag(null);
    setIsCoverImageUploaded(false);
  };

  useEffect(() => {
    console.log(isCoverImageUploaded);
    displayCoverFile();
  }, [coverImage, isCoverImageUploaded]);

  useEffect(() => {
    displayProfileFile();
  }, [profileImage]);

  const handleContinue = () => {
    setShowSelectCategory(false);
    setShowAllSet(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDropText("Release to Upload,");
    setActive(!active);
    console.log("metor");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDropText("Drop image here,");
    setActive(false);
    console.log("luminu");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(false);
    console.log("iamai");
    setIsCoverImageUploaded(true);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setCoverImage(droppedFile);
      displayCoverFile();
    }
  };

  function displayCoverFile() {
    if (coverImage) {
      let fileType = coverImage.type;
      let validExtensions = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/svg",
      ];
      if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          let fileURL = fileReader.result as string;
          setCoverUrl(fileURL);
          const imgTag = `<img src="${fileURL}" alt="Dropped Image" />`;
          setCoverImageTag(imgTag);
        };
        fileReader.readAsDataURL(coverImage);
      } else {
        alert("Cover image format not supported!");
      }
    }
  }

  function displayProfileFile() {
    if (profileImage) {
      let fileType = profileImage.type;
      let validExtensions = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/svg",
      ];
      if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          let fileURL = fileReader.result as string;
          setProfileUrl(fileURL);
          const imgTag = `<img src="${fileURL}" alt="Dropped Image" />`;
          setProfileImageTag(imgTag);
        };
        fileReader.readAsDataURL(profileImage);
      } else {
        alert("Profile image format not supported!");
      }
    }
  }

  const handleFinish = () => {
    navigate("/home");
  };

  return (
    <section className={styles.register}>
      <div className={styles.logo_img_box}>
        <img src={Logo} alt="logo" className={styles.logo_img} />
      </div>
      <div className={styles.left_register}>
        {showRegister && (
          <div className={styles.register_wrapper}>
            <div>
              <h1 className={styles.title}>Registration</h1>
              <p className={styles.text}>
                Choose your Bnollar username. You can always change it later.
              </p>
              <div className={styles.addImg_wrapper}>
                {showProfileImgSettings && (
                  <div className={styles.settingButtonWrapper}>
                    <button
                      className={styles.uploadBtn}
                      onClick={() => inputRefProfile.current?.click()}
                    >
                      Upload photo
                    </button>
                    <input
                      type="file"
                      id="profile-input"
                      hidden
                      onChange={handleProfileChange}
                      ref={inputRefProfile}
                    />
                    <button
                      className={styles.removeBtn}
                      onClick={handleRemoveProfile}
                    >
                      Remove
                    </button>
                  </div>
                )}
                <div
                  className={styles.addCoverImg}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={active ? { border: "1px solid #EF8031" } : {}}
                >
                  {coverImageTag ? (
                    <div className={styles.actualCoverImgWrapper}>
                      <div
                        className={styles.actualCoverImg}
                        dangerouslySetInnerHTML={{ __html: coverImageTag }}
                      />
                      {isCoverImageUploaded && (
                        <button
                          className={styles.removeCoverButton}
                          onClick={handleRemoveCover}
                        >
                          Remove cover
                          <img src={Cancel} alt="" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div>
                      <p className={styles.dropCoverImgText}>
                        {dropText} or{" "}
                        <span onClick={() => inputRefCover.current?.click()}>
                          {" "}
                          browse
                        </span>
                      </p>
                      <input
                        type="file"
                        id="cover-input"
                        hidden
                        ref={inputRefCover}
                        onChange={handleCoverChange}
                      />
                    </div>
                  )}
                </div>

                <div
                  className={styles.addImg}
                  style={profileImageTag ? { overflow: "hidden" } : undefined}
                >
                  {profileImageTag ? (
                    <>
                      <div
                        className={styles.actualProfileImg}
                        dangerouslySetInnerHTML={{ __html: profileImageTag }}
                      />
                      <img
                        src={Edit}
                        className={styles.uploadIcon}
                        alt="Upload File"
                        onClick={handleProfileSettingView}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={imgIcon}
                        className={styles.imgIcon}
                        alt="img icon"
                      />
                      <img
                        src={addIcon}
                        className={styles.uploadIcon}
                        alt="Upload File"
                        onClick={() => inputRefProfile.current?.click()}
                      />
                      <input
                        type="file"
                        id="profile-input"
                        hidden
                        onChange={handleProfileChange}
                        ref={inputRefProfile}
                      />
                    </>
                  )}
                </div>
              </div>
              <form
                className={styles.input_wrapper}
                onSubmit={handleSubmit(submitHandler)}
              >
                <div className={styles.input_block}>
                  <input
                    type="text"
                    placeholder="Username"
                    {...register("username", {
                      onChange: (e: any) => {
                        setUserName(e.target.value);
                      },
                    })}
                    className={
                      !errors.username && userName.trim() !== ""
                        ? styles.validInput
                        : styles.inputDefault
                    }
                  ></input>
                  <input
                    type="text"
                    placeholder="Display name"
                    {...register("displayName", {
                      onChange: (e: any) => {
                        setDisplayName(e.target.value);
                      },
                    })}
                    className={
                      !errors.displayName && displayName.trim() !== ""
                        ? styles.validInput
                        : styles.inputDefault
                    }
                  ></input>
                  <input
                    type="text"
                    placeholder="Wallet Adress"
                    {...register("walletAddress", {
                      onChange: (e: any) => {
                        setWalletAddress(e.target.value);
                      },
                    })}
                    className={
                      !errors.walletAddress && walletAddress.trim() !== ""
                        ? styles.validInput
                        : styles.inputDefault
                    }
                  ></input>
                </div>
                <button
                  type="submit"
                  className={
                    !errors.username &&
                      !errors.displayName &&
                      !errors.walletAddress &&
                      userName.trim() !== "" &&
                      displayName.trim() !== "" &&
                      walletAddress.trim() !== ""
                      ? styles.submitted
                      : styles.initial
                  }
                >
                  Create account
                </button>
              </form>
            </div>
          </div>
        )}
        {showSelectCategory && (
          <div className={styles.categories}>
            <h1 className={styles.title}>Select category</h1>
            <p className={styles.text}>For a personalised experience</p>
            <div className={styles.categoriesWrapper}>
              {categories.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.selected
                      ? styles.categorieSelected
                      : styles.categoriesNotSelected
                  }
                  onClick={() => {
                    toggleSelect(item.id);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className={styles.continue}>
              <button className={styles.continue_btn} onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        )}
        {showAllSet && (
          <div className={styles.allSetWrapper}>
            <div>
              <img src={ok} alt="ok" />
            </div>
            <div>
              <h1 className={styles.title}>You’re all set</h1>
              <p className={styles.text}>
                {`We're`} excited to have you on board. Your account is all set
                up and ready for you to start using.
              </p>
            </div>
            <div className={styles.finish}>
              <button onClick={handleFinish}>Finish</button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.right_image}>
        <img src={registerBg} alt="nft" />
        <div className={styles.owner}>
          <p>
            Eras by <span>Aeforia</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
