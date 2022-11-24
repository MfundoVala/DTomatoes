import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { fetchFilms } from "../../services/api/configureAPI";
// Define a type for the slice state
const initialState = {
  movies: [],
  series: [],
  status: "idle",
  error: null,
};

const filmAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.releaseYear.localeCompare(a.releaseYear),
});

export const filmSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      const { id, programType } = action.payload;
      const film = state[programType].find((film) => film.id === id);
      film.isFavorite = !film.isFavorite;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFilms.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.status = "succeeded";
      let id = 0;
      const { entries, total } = action.payload;
      const movies = entries
        .filter((film) => film.programType === "movies")
        .sort((a, b) => b.releaseYear - a.releaseYear)
        .map((film) => {
          return { ...film, id: ++id, isFavorite: false };
        });

      const series = entries
        .filter((film) => film.programType === "series")
        .sort((a, b) => b.releaseYear - a.releaseYear)
        .map((film) => {
          return { ...film, id: ++id, isFavorite: false };
        });
      // Add any fetched posts to the array

      state.movies = movies;
      state.series = series;
    });
  },
});

export const selectAllMovies = (state) => state.films.movies;
export const selectAllSeries = (state) => state.films.series;
export const selectAllFilms = (state) =>
  state.films.movies.concat(state.films.series);

export const selectMoviesBySearchTerm = createSelector(
  [selectAllMovies],
  (movies) => (searchTerm) =>
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

export default filmSlice.reducer;
