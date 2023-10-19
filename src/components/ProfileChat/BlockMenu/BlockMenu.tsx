import React from "react";
import styles from "./BlockMenu.module.css";
import cancelIcon from "lib/resources/images/profile-chat/cancel-block.svg";
import exclamationCircleIcon from "lib/resources/images/profile-chat/exclaimation-circle.svg";
import arrowRightIcon from "lib/resources/images/profile-chat/arrow-right-block.svg";

interface BlockMenuProps {
  setBlockIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BlockMenu(props: BlockMenuProps) {
  const { setBlockIsOpen } = props;
  return (
    <div className={styles.container}>
      <div className={styles.blockPopup}>
        <div className={styles.blockHead}>
          <h2 className={styles.blockTitle}>Block Owen Padberg</h2>
          <button
            onClick={() => setBlockIsOpen(false)}
            className={styles.blockCloseButton}
          >
            <img
              className={styles.blockCloseButtonIcon}
              src={cancelIcon}
              alt="close icon"
            />
          </button>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <img
              className={styles.circle}
              src={exclamationCircleIcon}
              alt="exclamation circle"
            />
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
              onClick={() => setBlockIsOpen(false)}
              className={styles.arrow}
            >
              <img src={arrowRightIcon} alt="arrow right icon" />
            </button>
          </div>
          <div className={styles.option}>
            <img
              className={styles.circle}
              src={exclamationCircleIcon}
              alt="exclamation circle"
            />
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
              onClick={() => setBlockIsOpen(false)}
              className={styles.arrowSmall}
            >
              <img src={arrowRightIcon} alt="arrow right icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockMenu;
