import styles from "./BlockchainContainer.module.css";
import { Dispatch, SetStateAction } from "react";

type BlockchainContainerProps = {
  image: string;
  text: string;
  setBlockchain: Dispatch<SetStateAction<string | null>>;
  setPage: Dispatch<SetStateAction<string>>;
};

export default function BlockchainContainer({
  image,
  text,
  setBlockchain,
  setPage,
}: BlockchainContainerProps) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        setBlockchain(text);
        setPage("chooseType");
      }}
    >
      <img
        src={require(`../../../../resources/images/upload-nft/chooseBlockchain/${image}`)}
        alt={`${text} icon`}
      />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
