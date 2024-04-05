import styles from "./TypeContainer.module.css";
import { Dispatch, SetStateAction } from "react";

type TypeContainerProps = {
  image: string;
  title: string;
  text: string;
  setPage: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string | null>>;
};

export default function TypeContainer({
  image,
  title,
  text,
  setPage,
  setType
}: TypeContainerProps) {
  return (
    <div className={styles.container} onClick={() => {
      setPage("createNewNFT"); setType(title)
    }}>
      <img
        src={require(`../../../../lib/resources/images/upload-nft/chooseType/${image}`)}
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
