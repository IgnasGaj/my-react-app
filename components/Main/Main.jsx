import { useState } from "react";
import styles from "./styles.module.css";
import Article from "../Article/Article";

const Main = () => {
  const [articles, setArticles] = useState([
    {
      id: "1",
      imgSrc: "spider-man.png",
      title: "Spider-Man",
      description:
        "Spider-Man centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: With great power comes great responsibility.",
      tier: "8-C",
    },
    {
      id: "2",
      imgSrc: "iron-man.png",
      title: "Iron-Man",
      description:
        "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
      tier: "10-A",
    },
    {
      id: "3",
      imgSrc: "hulk.png",
      title: "Hulk",
      description:
        "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
      tier: "9-B",
    },
    {
      id: "4",
      imgSrc: "thor.png",
      title: "Thor",
      description:
        "Thor is the son of Odin and Fjorgynn, or Jord, and is married to Sif. He is a big eater and enjoys the honey-based drink mead. As the champion of order in the world, he battles against giants and other monsters. It might be because of his power and strength that he appears in so many stories.",
      tier: "3-C",
    },
    {
      id: "5",
      imgSrc: "loki.png",
      title: "Loki",
      description:
        "Loki is considered a trickster god, known for being neither fully good nor evil since his main aim was always to create chaos. Despite his father being a giant, he is still counted a member of the Aesir—a tribe of deities including Odin, Frigg, Tyr, and Thor.",
      tier: "7-C",
    },
    {
      id: "6",
      imgSrc: "hawkeye.png",
      title: "Hawkeye",
      description:
        "An expert marksman and fighter, Clint Barton puts his talents to good use by working for S.H.I.E.L.D. as a special agent. The archer known as Hawkeye also boasts a strong moral compass that at times leads him astray from his direct orders.",
      tier: "9-B",
    },
    {
      id: "7",
      imgSrc: "dr.strange.png",
      title: "Doctor Strange",
      description:
        "A Master of the Mystic Arts, Doctor Strange has phenomenally powerful magical abilities that enable him to skillfully conjure myriad spells. Strange has been able to use his spells to bind opponents and create complex shields and barriers, among many other uses for both defense and attack.",
      tier: "5-A",
    },
  ]);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.characters_title}>Main Characters</h2>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            imgSrc={article.imgSrc}
            title={article.title}
            description={article.description}
            tier={article.tier}
          />
        );
      })}
    </div>
  );
};

export default Main;
