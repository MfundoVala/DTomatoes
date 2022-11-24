import { useState } from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../../assets/icons/search.svg";
import calendarIcon from "../../../assets/icons/calendar.svg";
import {
  selectAllMovies,
  selectAllSeries,
} from "../../../application/redux/filmSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

const SearchBar = ({
  currentFilms,
  setCurrentFilms,
  setCurrentPage,
  searchMovies = true,
}) => {
  const movies = useSelector(selectAllMovies);
  const series = useSelector(selectAllSeries);

  const getSearchResults = (searchTerm) => {
    const films = searchMovies ? movies : series;

    const results = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return results;
  };

  const handleChange = (event) => {
    const results = getSearchResults(event.target.value);
    setCurrentFilms(results);
    setCurrentPage(1);
  };

  const currentDates = [
    ...new Set(currentFilms.map((film) => film.releaseYear)), // get unique dates from current film dates
  ];

  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.SearchBar} data-testid="Search_Bar">
        <div className={styles.searchBarContainer}>
          <div className={styles.searchImage}>
            <img src={searchIcon} alt="search icon" />
          </div>

          <input
            onChangeCapture={(e) => handleChange(e)}
            placeholder="Search"
            className={styles.input}
          ></input>

          <DatePicker
            showYearPicker
            dateFormat="yyyy"
            calendarClassName={styles.DatePicker}
            includeDates={currentDates.map((date) => new Date(date, 0, 1))}
            minDate={new Date(currentDates[currentDates.length - 1], 0, 1)}
            maxDate={new Date(currentDates[0], 11, 31)}
            yearItemNumber={12}
            onChange={(date) => {
              const year = date.getFullYear();
              navigate(
                `/${
                  location.pathname === "/movies" ? "movies" : "series"
                }/${year}`
              );
            }}
            customInput={
              <div>
                <img
                  src={calendarIcon}
                  style={{ position: "absolute", left: "1vw", top: 5 }}
                />
                <input
                  className={styles.DateInput}
                  placeholder={JSON.stringify(startDate).slice(1, 5)}
                />
              </div>
            }
          ></DatePicker>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
