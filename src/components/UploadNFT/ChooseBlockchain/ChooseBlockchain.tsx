import styles from "./ChooseBlockchain.module.css";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import Header from "../components/Header/Header";
import BlockchainContainer from "../components/BlockchainContainer/BlockchainContainer";

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

type ChooseBlockchainProps = {
  setPage: Dispatch<SetStateAction<string>>;
  setBlockchain: Dispatch<SetStateAction<string | null>>;
};

export default function ChooseBlockchain({ setPage, setBlockchain }: ChooseBlockchainProps) {

  const linkTag = (
    // add link later
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
              setPage={setPage}
            />
          );
        })}
      </main>
    </div>
  );
}
