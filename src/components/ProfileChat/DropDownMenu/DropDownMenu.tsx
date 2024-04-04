import styles from "./DropDownMenu.module.css";
import editNickname from "lib/resources/images/profile-chat/edit-nickname.svg";
import dropdownSearch from "lib/resources/images/profile-chat/search-dropdown.svg";
import unmute from "lib/resources/images/profile-chat/unmute.svg";
import deleteIcon from "lib/resources/images/profile-chat/delete.svg";

interface DropDownMenuProps {
  setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownMenu: boolean;
  setDropdownMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMuteIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBlockIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropDownMenu(props: DropDownMenuProps) {
  const {
    setSearchIsOpen,
    setDropdownMenu,
    dropdownMenu,
    setMuteIsOpen,
    setBlockIsOpen,
    setEditMenuIsOpen,
    setDeleteIsOpen
  } = props;

  return (
    <div className={styles.dropdownMenu}>
      <div className={styles.dropdownContainer}>
        <button
          onClick={() => {
            setEditMenuIsOpen(true);
            setDropdownMenu(false);
          }}
          className={styles.dropdownMenuCategory}
        >
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
        <button
          onClick={() => {
            setMuteIsOpen(true);
            setDropdownMenu(false);
          }}
          className={styles.dropdownMenuCategory}
        >
          <img src={unmute} alt="unmute icon" />
          <span className={styles.categoryName}>Mute notifications</span>
        </button>
        <button
          className={styles.dropdownMenuCategory}
          onClick={() => {
            setDeleteIsOpen(true);
            setDropdownMenu(false);
          }}>
          <img src={deleteIcon} alt="delete icon" />
          <span className={styles.categoryName}>Delete chat</span>
        </button>
        <button
          onClick={() => {
            setBlockIsOpen(true);
            setDropdownMenu(false);
          }}
          className={styles.dropdownMenuButton}
        >
          Block
        </button>
        <button className={styles.dropdownMenuButton}>Report</button>
      </div>
    </div>
  );
}

export default DropDownMenu;
