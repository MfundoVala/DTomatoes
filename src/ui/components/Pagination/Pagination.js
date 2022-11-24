import { useState, useEffect, useReducer } from "react";
import styles from "./Pagination.module.scss";
import FilmCard from "../FilmCard/FilmCard";
import IconLink from "../IconLink/IconLink";
import leftChevron from "../../../assets/icons/left-chevron.svg";
import rightChevron from "../../../assets/icons/right-chevron.svg";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div style={{ margin: 30, marginBottom: -40 }}>
      <IconLink img={leftChevron} link={false} onClick={handleClick} />
    </div>
  );
}

export const Pagination = ({
  allFilms,
  title,
  notSearchResultsPage = true,
}) => {
  const [films, setFilms] = useState(allFilms); // get and store films from props updated by child component SearchBar

  const totalPages = Math.ceil(films.length / 10); // decide page number needed to display 10 films per page

  const [currentPage, setCurrentPage] = useState(1); // current page number of pagination
  const [filmsPerPage] = useState(10);

  const indexOfLastFilm = currentPage * filmsPerPage; // index of last film on current page
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;

  const [currentFilms, setCurrentFilms] = useState(
    // currentFilms is the films that are currently being displayed
    films.slice(indexOfFirstFilm, indexOfLastFilm)
  );

  useEffect(() => {
    setCurrentFilms(films.slice(indexOfFirstFilm, indexOfLastFilm)); //update current films when page changes
  }, [currentPage, films]);

  const paginate = (pageNumber) => {
    setCurrentFilms(
      films
        .slice(indexOfFirstFilm, indexOfLastFilm)
        .sort((a, b) => a.releaseYear < b.releaseYear) // sort films by release year
    );
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {!notSearchResultsPage && <BackButton />}
      {notSearchResultsPage && (
        <SearchBar
          setCurrentFilms={setFilms} // pass setFilms function to child component SearchBar to update films on change of search input
          setCurrentPage={setCurrentPage}
          searchMovies={title === "Movies"}
          currentFilms={currentFilms}
        />
      )}

      <div className={styles.Container}>
        <h1>Popular {title}</h1>
        <div className={styles.Pagination}>
          {currentFilms.length > 0 ? (
            currentFilms.map((film) => (
              <FilmCard
                img={film.images.posterArt.url}
                title={film.title}
                year={film.releaseYear}
                description={film.description}
                key={film.id}
                testid={"Film_Card " + film.id}
              />
            ))
          ) : (
            <h1 className={styles.h1Text}>No Programs found...</h1>
          )}
          <div
            className={styles.paginationButtonContainer}
            data-testid="Pagination_Buttons"
          >
            <IconLink
              img={leftChevron}
              link={false}
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
            />
            {Array.from(Array(totalPages), (e, i) => {
              return (
                <a
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={
                    currentPage === i + 1
                      ? styles.activePaginationButton
                      : styles.paginationButton
                  }
                  data-testid={"Pagination_Button_" + (i + 1)}
                >
                  <h3>{i + 1}</h3>
                </a>
              );
            })}
            <IconLink
              img={rightChevron}
              link={false}
              onClick={() => {
                if (currentPage < totalPages) {
                  paginate(currentPage + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
