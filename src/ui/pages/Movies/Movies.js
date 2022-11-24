import React from "react";
import styles from "./Movies.module.scss";
import { selectAllMovies } from "../../../application/redux/filmSlice";
import { useSelector } from "react-redux";
import { Pagination } from "../../components/Pagination/Pagination";

export const Movies = () => {
  const movies = useSelector(selectAllMovies);
  return (
    <>
      <div className={styles.Movies}>
        <Pagination allFilms={movies} title="Movies" />
      </div>
    </>
  );
};
