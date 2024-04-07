
import React from "react";
import styles from "./AddComment.module.css";

interface DeleteChatProps {
    setCommentIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddComment(props: DeleteChatProps) {
    const { setCommentIsOpen } = props;
    return (
        <div className={styles.container}>
            <div className={styles.addPopup}>
                <textarea name="" id="" className={styles.comment_textarea} />
                <div className={styles.buttons}>
                    <button className={styles.buttonYes} onClick={() => setCommentIsOpen(false)}>Add comment</button>
                    <button className={styles.buttonNo} onClick={() => setCommentIsOpen(false)}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default AddComment;