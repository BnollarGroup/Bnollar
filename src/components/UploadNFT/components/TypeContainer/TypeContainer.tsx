import styles from "./typeContainer.module.css";

type TypeContainerProps = {
  image: string;
  title: string;
  text: string;
};

export default function TypeContainer({
  image,
  title,
  text,
}: TypeContainerProps) {
  return (
    <div className={styles.container}>
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
