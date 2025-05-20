import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Article from "../Article/Article";
import Spinner from "../Spinner/Spinner";

const Main = () => {
  const [heroes, setHeroes] = useState(null);

  const fetchHeroes = async () => {
    const response = await axios.get(
      "https://682c7bdad29df7a95be74eba.mockapi.io/marvels/heroes"
    );

    setHeroes(response.data);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  console.log(heroes);

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.characters_title}>Main Characters</h2>
      {heroes ? (
        <>
          {heroes.map((hero) => {
            return (
              <Article
                key={hero.id}
                title={hero.title}
                imgUrl={hero.imgUrl}
                description={hero.description}
                tier={hero.tier}
              />
            );
          })}
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Main;
