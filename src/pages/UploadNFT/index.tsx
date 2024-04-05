import { useState } from "react";
import Navbar from "components/Navbar";
import styles from "./UploadNFT.module.css";
import ChooseBlockchain from "components/UploadNFT/ChooseBlockchain/ChooseBlockchain";
import ChooseType from "components/UploadNFT/ChooseType/ChooseType";
import CreateNewNFT from "components/UploadNFT/CreateNewNFT/CreateNewNFT";

export default function UploadNft() {
  const [page, setPage] = useState<string>("chooseBlockchain");
  const [blockchain, setBlockchain] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  console.log(blockchain);
  console.log(type)

  return (
    <section className={styles.container}>
      <Navbar />

      {page === "chooseBlockchain" ? (
        <ChooseBlockchain setPage={setPage} setBlockchain={setBlockchain} />
      ) : page === "chooseType" ? (
        <ChooseType setPage={setPage} setType={setType} />
      ) : (
        <CreateNewNFT blockchain={blockchain} type={type} />
      )}
    </section>
  );
}
