import { useEffect, useState } from "react";
import ShareSend from "..";
import styles from "./DropDownMenu.module.css";
function ShareDropDownMenu() {
  const [shareIsOpen, setShareisOpen] = useState<boolean>(false);
  const sendShareToggle = () => {
    setShareisOpen((prevState) => !prevState);
  }
  useEffect(() => {
    shareIsOpen ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset';
  }, [shareIsOpen]);

  return (
    <div className={styles.dropdownMenu}>
      <div className={styles.dropdownContainer}>
        <div className={styles.opencovereditdrop}>
          <button className={styles.dropcoverbtn} onClick={sendShareToggle}>
            <span className={styles.categoryName}>Send</span>
          </button>
          <button className={styles.dropcoverbtn}><span className={styles.categoryName}>Share to Facebook</span></button>
          <button className={styles.dropcoverbtn}><span className={styles.categoryName}>Share to Twitter</span></button>
          <button className={styles.dropcoverbtn}><span className={styles.categoryName}>Iframe</span></button>
        </div>
      </div>
      {shareIsOpen && <ShareSend setShareisOpen={setShareisOpen} />}
    </div>
  );
}

export default ShareDropDownMenu;
