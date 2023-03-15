import styles from "./VideoCall.module.css";
import { Link } from "react-router-dom";
import contactPhoto from "../../../resources/images/profile-chat/video-call/contact-photo.png";
import userPhoto from "../../../resources/images/profile-chat/video-call/user-photo.png";
import addPeopleIcon from "../../../resources/images/profile-chat/video-call/add-people.svg";
import cameraIcon from "../../../resources/images/profile-chat/video-call/camera.svg";
import chatIcon from "../../../resources/images/profile-chat/video-call/chat.svg";
import microphoneIcon from "../../../resources/images/profile-chat/video-call/microphone.svg";
import phoneIcon from "../../../resources/images/profile-chat/video-call/phone.svg";
import videoCallIcon from "../../../resources/images/profile-chat/video-call/video-call-icon.png";

function VideoCall() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.videoCallUsers}>
          <img
            className={styles.contactPhoto}
            src={contactPhoto}
            alt="contact"
          />
          <img
            className={styles.userPhoto}
            src={userPhoto}
            alt="current user"
          />
        </div>
        <div className={styles.videoCallNav}>
          <div className={styles.navUser}>
            <img className={styles.navUserIcon} src={videoCallIcon} alt="" />
            <span className={styles.navUsername}>Bernadette Haag</span>
          </div>
          <div className={styles.navButtons}>
            <button className={styles.navButton}>
              <img src={microphoneIcon} alt="microphone icon" />
            </button>
            <button className={styles.navButton}>
              <img src={cameraIcon} alt="camera icon" />
            </button>
            <button className={styles.navButton}>
              <img src={addPeopleIcon} alt="add people icon" />
            </button>
            <button className={styles.navButtonRed}>
              <img src={phoneIcon} alt="phone icon" />
            </button>
          </div>
          <Link to="/profile-chat" className={styles.navButton}>
            <img src={chatIcon} alt="chat icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VideoCall;
