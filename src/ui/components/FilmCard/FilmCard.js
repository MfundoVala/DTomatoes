import styles from "./FilmCard.module.scss";
import { useState } from "react";

const FilmCard = ({ img, title, year, description, testid }) => {
  const [showMore, setShowMore] = useState(false);
  const [fullTitle, setFullTitle] = useState(false);

  return (
    <div
      className={showMore ? styles.FilmCardActive : styles.FilmCard}
      onMouseLeave={() => setShowMore(false)}
      data-testid={testid}
    >
      <div
        className={styles.FilmCardImage}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <div
          onMouseEnter={() => setFullTitle(true)}
          onMouseLeave={() => setFullTitle(false)}
          className={styles.FilmCardOverlay}
        >
          <h2>
            {fullTitle
              ? title
              : title.substring(0, 15) + (title.length > 15 ? "..." : "")}
          </h2>
          <a
            onClick={() => setShowMore(!showMore)}
            className={styles.description}
          >
            <h4>{year}</h4>
            <h3>
              {showMore ? description : description.substring(0, 150)}
              {description.length > 150
                ? !showMore && (
                    <span style={{ fontWeight: 700 }}>... see more</span>
                  )
                : null}
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
