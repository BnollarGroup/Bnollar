import { useState } from "react";
import Navbar from "components/Navbar";
import styles from "./UploadNFT.module.css";
import ChooseBlockchain from "components/UploadNFT/ChooseBlockchain/ChooseBlockchain";
import ChooseType from "components/UploadNFT/ChooseType/ChooseType";
import CreateNewNFT from "components/UploadNFT/CreateNewNFT/CreateNewNFT";

export default function UploadNft() {
  const [page, setPage] = useState<string>("chooseBlockchain");
  return (
    <section className={styles.container}>
      <Navbar />

      {page === "chooseBlockchain" ? (
        <ChooseBlockchain setPage={setPage} />
      ) : page === "chooseType" ? (
        <ChooseType setPage={setPage} />
      ) : (
        <CreateNewNFT />
      )}
    </section>
  );
}
