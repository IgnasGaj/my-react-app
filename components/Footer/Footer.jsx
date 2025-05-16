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
            <a href="#">
              <img className={styles.socials_img} src="instagram.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className={styles.socials_img} src="facebook.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className={styles.socials_img} src="youtube.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className={styles.socials_img} src="share.svg" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
