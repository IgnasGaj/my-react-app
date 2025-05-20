import { useState } from "react";
import styles from "./styles.module.css";

const Article = ({ imgUrl, title, description, tier }) => {
  const [isShow, setShow] = useState(false);
  const toggleTier = () => setShow(!isShow);
  return (
    <div className={styles.wrapper}>
      <div className={styles.character_wrapper}>
        <img className={styles.spider_man_img} src={imgUrl} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.tier_list}>
            <button className={styles.tier_btn} onClick={toggleTier}>
              {isShow ? "Hide Tier" : "Show Tier"}
            </button>

            {isShow && <h2>{tier}</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
