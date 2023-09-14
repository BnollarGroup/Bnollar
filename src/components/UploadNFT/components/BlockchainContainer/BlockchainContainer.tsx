import { set } from "react-hook-form";
import styles from "./blockchainContainer.module.css";
import { Dispatch, SetStateAction } from "react";

type BlockchainContainerProps = {
  image: string;
  text: string;
  setBlockchain: Dispatch<SetStateAction<string | null>>;
};

export default function BlockchainContainer({
  image,
  text,
  setBlockchain,
}: BlockchainContainerProps) {
  return (
    <div className={styles.container} onClick={() => setBlockchain(text)}>
      <img
        src={require(`../../../../resources/images/upload-nft/chooseBlockchain/${image}`)}
        alt={`${text} icon`}
      />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
