import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllGenres } from "../api/http/genreApi";

type fetchGenresPropsType = {
  selectedGenres: string | null;
};

export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  return getAllGenres();
});
