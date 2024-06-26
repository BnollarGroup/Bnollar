import React from "react";
import Header from "../components/Header/Header";
import TypeContainer from "../components/TypeContainer/TypeContainer";
import styles from "./ChooseType.module.css";
import { Dispatch, SetStateAction } from "react";

const data = [
  {
    image: "single.png",
    title: "Single",
    text: "If you want to highlight the uniqueness and individuality of your item",
  },
  {
    image: "multiple.png",
    title: "Multiple",
    text: "If you want to share your NFT with a large number of community members",
  },
];

type ChooseTypeProps = {
  setPage: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string | null>>;
};

export default function ChooseType({ setPage, setType }: ChooseTypeProps) {
  return (
    <div className={styles.container}>
      <Header
        title="Choose Type"
        text="Choose “Single” for one of a kind or “Multiple” if you want to sell one collectible multiple times"
        child={null}
      />

      <div className={styles.main}>
        {data.map((item, i) => {
          return (
            <TypeContainer
              image={item.image}
              title={item.title}
              text={item.text}
              setPage={setPage}
              setType={setType}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
