import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import contStyles from "../../SettingsContainer.module.css";
import styles from "./Profile.module.css";
import ChevronLeft from "lib/resources/images/icons/arrow-left.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import settingsProfileSchema from "lib/schemas/settingsProfileSchema";

interface formState {
  username: string;
  displayName: string;
  email: string;
  websiteURL: string;
  twitter: string;
  instagram: string;
}

const Profile = () => {
  const initialFormState = {
    username: "",
    displayName: "",
    email: "",
    websiteURL: "",
    twitter: "",
    instagram: "",
  };

  const [formState, setFormState] = useState<formState>({
    ...initialFormState,
  });

  const changeHandler = (property: string, value: string) => {
    const updatedState = { ...formState, [property]: value };
    setFormState(updatedState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(settingsProfileSchema),
  });

  console.log(errors);

  const handleProfileSubmit = (data: {
    username: string;
    displayName: string;
    email: string;
    websiteURL?: string | null;
    twitter?: string | null;
    instagram?: string | null;
  }) => {
    console.log(data);
    console.log("handleProfileSubmit called");
  };

  return (
    <div className={contStyles.containerWrapper}>
      <div className={contStyles.mobileSettings}>
        <a href="/settings/:type">
          <img src={ChevronLeft} alt="" />
        </a>
        <h1 className={contStyles.mobileSettingsTitle}>Settings</h1>
      </div>
      <form
        className={contStyles.settingsContainer}
        onSubmit={handleSubmit(handleProfileSubmit)}
      >
        <div className={styles.profileDetails}>
          <div className={contStyles.headerBox}>
            <h2 className={contStyles.contHeader}>Profile</h2>
            <p className={contStyles.messageEdit}>Edit your profile details</p>
          </div>
          <div className={contStyles.line} />
          <div className={styles.inputsFlex}>
            <div className={styles.inputWrapper}>
              <p className={contStyles.message}>Username</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Username..."
                {...register("username")}
              />
              {errors.username && (
                <p className={styles.error_message}>
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <p className={contStyles.message}>Display name</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Display name..."
                {...register("displayName")}
              />
              {errors.displayName && (
                <p className={styles.error_message}>
                  {errors.displayName.message}
                </p>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <p className={contStyles.message}>Email address</p>
              <input
                className={styles.input}
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className={styles.error_message}>{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={contStyles.headerBox}>
            <h2 className={contStyles.contHeader}>Social link</h2>
            <p className={contStyles.messageEdit}>
              Add your existing social links to build a stronger reputation
            </p>
          </div>
          <div className={contStyles.line} />
          <div className={styles.inputWrapper}>
            <p className={contStyles.message}>Website URL</p>
            <input
              className={styles.input}
              type="text"
              placeholder="https://"
              {...register("websiteURL")}
            />
            {errors.websiteURL && (
              <p className={styles.error_message}>
                {errors.websiteURL.message}
              </p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <p className={contStyles.message}>Twitter</p>
            <input
              className={styles.input}
              type="text"
              placeholder="Twitter username"
              {...register("twitter")}
            />
            {errors.twitter && (
              <p className={styles.error_message}>{errors.twitter.message}</p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <p className={contStyles.message}>Instagram</p>
            <input
              className={styles.input}
              type="text"
              placeholder="Instagram username"
              {...register("instagram")}
            />
            {errors.instagram && (
              <p className={styles.error_message}>{errors.instagram.message}</p>
            )}
          </div>
        </div>
        <div className={contStyles.line} />

        <Buttons updateButtonTitle="Update profile" />
      </form>
    </div>
  );
};

export default Profile;
