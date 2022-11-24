import React, { useState, useEffect } from "react";
import styles from "./Series.module.scss";
import {
  selectAllSeries,
  selectAllMovies,
} from "../../../application/redux/filmSlice";
import { useSelector } from "react-redux";
import { Pagination } from "../../components/Pagination/Pagination";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export const SearchResults = () => {
  const movies = useSelector(selectAllMovies);
  const series = useSelector(selectAllSeries);
  const currentLocation = location.pathname;
  const { date } = useParams();

  const getDateResults = (searchDate) => {
    const films = currentLocation.includes("/movies") ? movies : series;

    const results = films.filter((film) => film.releaseYear == searchDate);
    return results;
  };

  const [dateSearchResults, setDateSearchResults] = useState(
    getDateResults(date)
  );

  useEffect(() => {
    setDateSearchResults(getDateResults(date));
  }, []);

  return (
    <div className={styles.Series}>
      <Pagination
        allFilms={dateSearchResults}
        title={
          currentLocation.includes("/movies")
            ? `Movies (${date})`
            : `Series (from ${date})`
        }
        notSearchResultsPage={false}
      />
    </div>
  );
};
