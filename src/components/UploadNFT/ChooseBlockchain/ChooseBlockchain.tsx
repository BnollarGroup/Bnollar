import sharedStyles from "../shared.module.css";
import styles from "./chooseBlockchain.module.css";
import Header from "../Header/Header";

export default function ChooseBlockchain() {
  const linkTag = (
    <a href="#" className={styles.link}>
      Learn more about Blockchains
    </a>
  );
  return (
    <div className={styles.container}>
      <Header
        title="Choose Blockchain"
        text="Choose the most suitable blockchain for your needs. You need to connect wallet for creation."
        child={linkTag}
      />
    </div>
  );
}
