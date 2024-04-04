
import React from "react";
import styles from "./DeleteChat.module.css";

interface DeleteChatProps {
    setDeleteIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    nickname : string
}

function DeleteChat(props: DeleteChatProps) {
    const { setDeleteIsOpen, nickname } = props;
    return (
        <div className={styles.container}>
            <div className={styles.deletePopup}>
                <p className={styles.question}>Are you sure you want to delete {nickname} ?</p>
                <div className={styles.buttons}>
                    <button className={styles.buttonYes} onClick={() => setDeleteIsOpen(false)}>Yes</button>
                    <button className={styles.buttonNo} onClick={() => setDeleteIsOpen(false)}>No</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteChat;