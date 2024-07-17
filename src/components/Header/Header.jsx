import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.g}>G</h1>
      <h1 className={styles.o}>o</h1>
      <h1 className={styles.o2}>o</h1>
      <h1 className={styles.g2}>g</h1>
      <h1 className={styles.l}>l</h1>
      <h1 className={styles.e}>e</h1>
      <h1 className={styles.books}> Books</h1>
    </div>
  );
};

export default Header;