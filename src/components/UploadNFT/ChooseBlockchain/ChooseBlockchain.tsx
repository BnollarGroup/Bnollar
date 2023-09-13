import sharedStyles from "../shared.module.css";
import styles from "./chooseBlockchain.module.css";
import Header from "../Header/Header";

export default function ChooseBlockchain() {
  const linkTag = (
    <a href="#" className={styles.link}>
      Learn more about Blockchains
    </a>
  );
  const textWithLineBreaks = (
    <>
      Choose the most suitable blockchain for your needs.
      <br className={styles.newLine} />
      You need to connect a wallet for creation.
    </>
  );
  return (
    <div className={styles.container}>
      <Header
        title="Choose Blockchain"
        text={textWithLineBreaks}
        child={linkTag}
      />
    </div>
  );
}
