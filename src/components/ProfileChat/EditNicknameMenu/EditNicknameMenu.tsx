import React, { useState } from "react";
import styles from "./EditNicknameMenu.module.css";
import cancelIcon from "../../../resources/images/profile-chat/cancel-edit.svg";
import editUserIcon from "../../../resources/images/profile-chat/edit-user-icon.png";
import editButtonIcon from "../../../resources/images/profile-chat/edit-nickname.svg";
import confirmIcon from "../../../resources/images/profile-chat/white-edit-confirm.svg";

interface EditNickNameMenuProps {
  setEditMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

function EditNicknameMenu(props: EditNickNameMenuProps) {
  const { setEditMenuIsOpen, nickname, setNickname } = props;

  const [editIsClicked, setEditIsClicked] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.editPopup}>
        <div className={styles.editHead}>
          <h2 className={styles.title}>Nicknames</h2>
          <button
            onClick={() => setEditMenuIsOpen(false)}
            className={styles.closeButton}
          >
            <img
              className={styles.CloseButtonIcon}
              src={cancelIcon}
              alt="close icon"
            />
          </button>
        </div>
        {editIsClicked ? (
          <div className={styles.editContainer}>
            <div style={{ padding: "14px 0" }}>
              <div className={styles.infoContainer}>
                <img
                  className={styles.editUserAvatar}
                  src={editUserIcon}
                  alt="user icon"
                />
                <input
                  className={styles.setNicknameInput}
                  placeholder="Name"
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={() => {
                setNickname(nickname);
                setEditMenuIsOpen(false);
              }}
              className={styles.confirmButton}
            >
              <img src={confirmIcon} alt="confirm logo" />
            </button>
          </div>
        ) : (
          <div className={styles.editContainer}>
            <div style={{ padding: "14px 0" }}>
              <div className={styles.infoContainer}>
                <img
                  className={styles.editUserAvatar}
                  src={editUserIcon}
                  alt="user icon"
                />
                <div className={styles.info}>
                  <p className={styles.name}>Kim Schneider DVM</p>
                  <p className={styles.setNickname}>Set nickname</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setEditIsClicked(true)}
              className={styles.editButton}
            >
              <img src={editButtonIcon} alt="edit logo" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditNicknameMenu;
