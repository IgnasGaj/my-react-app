import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} img src="marvel_logo.png"></img>
      <ul className={styles.navbar}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Heroes</a>
        </li>
        <li>
          <a href="#">ANTI-Heroes</a>
        </li>
        <li>
          <a href="#">Villains</a>
        </li>
        <li>
          <a href="#">Gods</a>
        </li>
      </ul>
      <ul className={styles.navbar}>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Share</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
