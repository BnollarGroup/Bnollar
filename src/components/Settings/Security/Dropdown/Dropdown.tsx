import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Dropdown.module.css";
import arrow from "../../../../lib/resources/images/Settings/arrow.png";

interface DropdownProps {
  items: string[];
  active: string;
  set: Dispatch<SetStateAction<string>>;
}

const Dropdown = ({ items, active, set }: DropdownProps) => {
  const [showItems, setShowItems] = useState(false);

  const clickHandler = () => {
    setShowItems(!showItems);
  };
  useEffect(() => {
    const hideDropdown = (event: any) => {
      if (showItems && event.target.id !== "toggler") {
        setShowItems(false);
      }
    };
    window.addEventListener("click", hideDropdown);

    return () => {
      window.removeEventListener("click", hideDropdown);
    };
  }, [showItems]);
  return (
    <div className={styles.dropdown_wrapper}>
      <div
        id="toggler"
        onClick={clickHandler}
        className={`${styles.active} ${styles.dropdown_item}`}
      >
        <span id="toggler">{active}</span>
        <img
          id="toggler"
          className={`${showItems && styles.rotate}`}
          src={arrow}
          alt="arrow"
        />
      </div>
      <div className={`${styles.items_wrapper} ${showItems && styles.show}`}>
        {items.map((item) => (
          <div
            key={item}
            onClick={() => set(item)}
            className={styles.dropdown_item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
