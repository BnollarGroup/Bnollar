import sharedStyles from "../shared.module.css";
import styles from "./chooseBlockchain.module.css";
import Header from "../components/Header/Header";
import BlockchainContainer from "../components/BlockchainContainer/BlockchainContainer";
import { useState } from "react";

const data = [
  {
    img: "ethereum.svg",
    text: "Ethereum",
  },
  {
    img: "solana.svg",
    text: "Solana",
  },
  {
    img: "tezos.svg",
    text: "Tezos",
  },
  {
    img: "polygon.svg",
    text: "Polygon",
  },
  {
    img: "bnb.svg",
    text: "BNB",
  },
];

export default function ChooseBlockchain() {
  const [blockchain, setBlockchain] = useState<string | null>(null);

  console.log(blockchain);

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

      <main className={styles.main}>
        {data.map((item, index) => {
          return (
            <BlockchainContainer
              key={index}
              image={item.img}
              text={item.text}
              setBlockchain={setBlockchain}
            />
          );
        })}
      </main>
    </div>
  );
}
