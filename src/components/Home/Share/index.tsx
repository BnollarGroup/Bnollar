
import React, { ReactNode } from "react";
import styles from "./Share.module.css";

interface DeleteChatProps {
    setShareisOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shareElement: ReactNode
}

function Share(props: DeleteChatProps) {
    const { setShareisOpen, shareElement } = props;
    return (
        <div className={styles.container}>
            <div className={styles.addPopup}>
                <div>share share</div>
                {shareElement}
                {/* <div className={styles.buttons}>
                    <button className={styles.buttonYes} onClick={() => setShareisOpen(false)}>Add comment</button>
                    <button className={styles.buttonNo} onClick={() => setShareisOpen(false)}>Close</button>
                </div> */}
            </div>
        </div>
    );
}

export default Share;