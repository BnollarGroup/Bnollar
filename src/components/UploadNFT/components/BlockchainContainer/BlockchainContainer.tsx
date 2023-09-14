import styles from "./blockchainContainer.module.css";

type BlockchainContainerProps = {
  image: string;
  text: string;
};

export default function BlockchainContainer({
  image,
  text,
}: BlockchainContainerProps) {
  return (
    <div className={styles.container}>
      <img
        src={require(`../../../../resources/images/upload-nft/chooseBlockchain/${image}`)}
        alt={`${text} icon`}
      />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
