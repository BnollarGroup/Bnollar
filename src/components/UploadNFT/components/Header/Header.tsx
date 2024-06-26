import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
  text: React.ReactNode;
  child: React.ReactNode;
};

export default function Header({ title, text, child }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        {text} {child}
      </p>
    </header>
  );
}
