import { useEffect, useState } from "react";
import styles from "./Splash.module.scss";
import { apiUrl } from "../../../services/api/configureAPI";
import { Hero } from "./Hero";

export function Splash() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl).then((response) => {
      response.json().then((data) => {
        setMovies(data);
      });
    });
  }, []);

  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
}
