import styles from "./DropDownMenu.module.css";
import editNickname from "../../../resources/images/profile-chat/edit-nickname.svg";
import dropdownSearch from "../../../resources/images/profile-chat/search-dropdown.svg";
import unmute from "../../../resources/images/profile-chat/unmute.svg";
import deleteIcon from "../../../resources/images/profile-chat/delete.svg";

interface DropDownMenuProps {
  setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDropdownMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropDownMenu(props: DropDownMenuProps) {
  const { setSearchIsOpen, setDropdownMenu } = props;
  return (
    <div className={styles.dropdownMenu}>
      <div className={styles.dropdownContainer}>
        <button className={styles.dropdownMenuCategory}>
          <img src={editNickname} alt="edit nickname icon" />
          <span className={styles.categoryName}>Edit nicknames</span>
        </button>
        <button
          onClick={() => {
            setSearchIsOpen(true);
            setDropdownMenu(false);
          }}
          className={styles.dropdownMenuCategory}
        >
          <img src={dropdownSearch} alt="search icon" />
          <span className={styles.categoryName}>Search in conversation</span>
        </button>
        <button className={styles.dropdownMenuCategory}>
          <img src={unmute} alt="unmute icon" />
          <span className={styles.categoryName}>Mute notifications</span>
        </button>
        <button className={styles.dropdownMenuCategory}>
          <img src={deleteIcon} alt="delete icon" />
          <span className={styles.categoryName}>Delete chat</span>
        </button>
        <button className={styles.dropdownMenuButton}>Block</button>
        <button className={styles.dropdownMenuButton}>Report</button>
      </div>
    </div>
  );
}

export default DropDownMenu;
