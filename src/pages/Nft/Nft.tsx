import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Nft.module.css";
const Component = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px",

        background: "rgba(255, 255, 255, 0.04)",
        borderRadius: "10px",
      }}
    >
      {" "}
      asd
    </div>
  );
};
const Nft = () => {
  return (
    <div className={styles.nftWrapper}>
      <Navbar />
      <div className={styles.leftPanel}>
        <div className={styles.imgWrapper}></div>
        <Component />
        <Component />
        <Component />
      </div>
      <div className={styles.rightPanel}></div>
    </div>
  );
};
export default Nft;
