import styles from "./DropDownMenu.module.css";
interface DropDownMenuProps {
  dropdownMenu: boolean;
  setDropdownMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropDownMenu(props: DropDownMenuProps) {
  const {
    setDropdownMenu,
    dropdownMenu,
  } = props;

  return (
    <div className={styles.dropdownMenu}>
      <div className={styles.dropdownContainer}>
        <button className={styles.dropdownMenuButton}>Copy group link</button>
        <button className={styles.dropdownMenuButton}>Leave group</button>
      </div>
    </div>
  );
}

export default DropDownMenu;
