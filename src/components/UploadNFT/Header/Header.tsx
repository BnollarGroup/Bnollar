import { ComponentType } from "react";
import styles from "./header.module";

type HeaderProps = {
  title: string;
  text: string;
  child: React.ReactNode;
};

export default function Header({ title, text, child }: HeaderProps) {
  return (
    <header>
      <h2>Choose Blockchain</h2>
      <p>
        Choose the most suitable blockchain for your needs. You need to connect
        wallet for creation. {child}
      </p>
    </header>
  );
}
