import React from "react";
import styles from "./Mute.module.css";
import muteCloseLogo from "lib/resources/images/profile-chat/cancel-mute.svg";

interface MuteProps {
  setMuteIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMuteOption: React.Dispatch<React.SetStateAction<string>>;
}

function Mute(props: MuteProps) {
  const { setMuteIsOpen, setMuteOption } = props;

  return (
    <div className={styles.container}>
      <div className={styles.mutePopup}>
        <div className={styles.muteHead}>
          <h2 className={styles.muteTitle}>Mute conversation</h2>
          <button
            onClick={() => {
              setMuteOption("");
              setMuteIsOpen(false);
            }}
            className={styles.muteCloseButton}
          >
            <img
              className={styles.muteCloseButtonIcon}
              src={muteCloseLogo}
              alt="close icon"
            />
          </button>
        </div>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkboxes}>
            <input
              className={styles.muteInput}
              onChange={() => setMuteOption("mute message")}
              type="radio"
              id="muteMessage"
              name="options"
            />
            <label className={styles.inputLabel} htmlFor="muteMessage">
              Mute message notifications
            </label>
          </div>
          <div className={styles.checkboxes}>
            <input
              className={styles.muteInput}
              onChange={() => setMuteOption("mute call")}
              type="radio"
              id="muteCall"
              name="options"
            />
            <label className={styles.inputLabel} htmlFor="muteCall">
              Mute call notifications
            </label>
          </div>
          <div className={styles.checkboxes}>
            <input
              className={styles.muteInput}
              onChange={() => setMuteOption("mute message and call")}
              type="radio"
              id="muteMessageAndCall"
              name="options"
            />
            <label className={styles.inputLabel} htmlFor="muteMessageAndCall">
              Mute message and call notifications
            </label>
          </div>
          <p className={styles.checkboxInfo}>
            Chat windows will stay closed, and you won't get push notifications
            on your devices.
          </p>
        </div>
        <div className={styles.muteButtons}>
          <button
            onClick={() => {
              setMuteOption("");
              setMuteIsOpen(false);
            }}
            className={styles.muteCancel}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setMuteIsOpen(false);
            }}
            className={styles.muteSave}
          >
            Save information
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mute;
