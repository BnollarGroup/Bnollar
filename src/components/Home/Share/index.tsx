
import React, { ReactNode } from "react";
import styles from "./Share.module.css";
import cancelIcon from "lib/resources/images/profile-chat/cancel-block.svg";
interface DeleteChatProps {
    setShareisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShareSend(props: DeleteChatProps) {
    const { setShareisOpen } = props;
    return (
        <div className={styles.container}>
      <div className={styles.blockPopup}>
        <div className={styles.blockHead}>
          <h2 className={styles.blockTitle}>Send It</h2>
          <button
            onClick={() => setShareisOpen(false)}
            className={styles.blockCloseButton}
          >
            <img
              className={styles.blockCloseButtonIcon}
              src={cancelIcon}
              alt="close icon"
            />
          </button>
        </div>
        <div className={styles.blockBody}>
        
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <div className={styles.info}>
              <h2 className={styles.title}>Block messages and calls</h2>
              <p className={styles.text}>
                Your Bnollar account {`won't`} receive messages or calls from{" "}
                {`Owen's`}
                Bnollar account.
              </p>
              <p className={styles.text}>
                This account {`won't`} be blocked on Bnollar. You may still be
                able to see Owen’s posts, comments and reactions on Bnollar.
              </p>
              <p className={styles.text}>
                If {`you're`} in shared groups or rooms with this account,{" "}
                {`you'll`}
                still be able to see and communicate with each other. You can
                leave groups or rooms anytime.
              </p>
            </div>
            <button
              onClick={() => setShareisOpen(false)}
              className={styles.arrow}
            >
            </button>
          </div>
          <div className={styles.option}>
    
            <div className={styles.info}>
              <h2 className={styles.title}>Block messages and calls</h2>
              <p className={styles.text}>
                If {`you're`} friends, blocking Owen will unfriend them.
              </p>
              <p className={styles.text}>
                Owen’s messages and calls will also be blocked.
              </p>
            </div>
            <button
              onClick={() => setShareisOpen(false)}
              className={styles.arrowSmall}
            >
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ShareSend;