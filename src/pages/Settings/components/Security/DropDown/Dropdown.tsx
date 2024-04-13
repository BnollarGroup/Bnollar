// Dropdown.js
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Dropdown.module.css";
import arrow from "lib/resources/images/Settings/arrow.png";

interface DropdownProps {
  items: string[];
  active: string;
  set: Dispatch<SetStateAction<string>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
}

const Dropdown = ({ items, active, set, show, setShow, onClick }: DropdownProps) => {
  const clickHandler = () => {
    setShow(!show);
  };

  useEffect(() => {
    const hideDropdown = (event: any) => {
      if (show && event.target.id !== "toggler") {
        setShow(false);
      }
    };
    window.addEventListener("click", hideDropdown);

    return () => {
      window.removeEventListener("click", hideDropdown);
    };
  }, [show, setShow]);

  return (
    <div className={styles.dropdown_wrapper} onClick={onClick}>
      <div
        id="toggler"
        onClick={clickHandler}
        className={`${styles.active} ${styles.dropdown_item}`}
      >
        <span id="toggler">{active}</span>
        <img
          id="toggler"
          className={`${show && styles.rotate}`}
          src={arrow}
          alt="arrow"
        />
      </div>
      <div className={`${styles.items_wrapper} ${show && styles.show}`}>
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
