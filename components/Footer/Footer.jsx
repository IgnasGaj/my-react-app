import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <footer>
        <ul className={styles.contacts}>
          <li>Marvel INC.</li>
          <li>Adress: 200 Park Avenue/Earth-1218</li>
          <li>Phone number: 212-970-4133</li>
          <li>Email : avengers@marvel.com</li>
        </ul>
        <ul className={styles.contacts}>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
          <li>
            <a href="#">Threads</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
