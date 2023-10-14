import styles from "./TypeContainer.module.css";
import { Dispatch, SetStateAction } from "react";

type TypeContainerProps = {
  image: string;
  title: string;
  text: string;
  setPage: Dispatch<SetStateAction<string>>;
};

export default function TypeContainer({
  image,
  title,
  text,
  setPage,
}: TypeContainerProps) {
  return (
    <div className={styles.container} onClick={() => setPage("createNewNFT")}>
      <img
        src={require(`../../../../resources/images/upload-nft/chooseType/${image}`)}
        alt={`${title} choose type`}
        className={styles.icon}
      />
      <div className={styles.text_div}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
