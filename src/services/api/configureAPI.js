import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiUrl =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";
  
// Define a thunk that dispatches those action creators
export const fetchFilms = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(apiUrl);
  const { entries, total } = response.data;
  return response.data;
});
