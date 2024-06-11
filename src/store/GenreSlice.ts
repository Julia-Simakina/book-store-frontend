import { createSlice } from "@reduxjs/toolkit";
import { GenreType } from "../types";
import { fetchGenres } from "./GenreThunk";

type GenreSliceType = {
  genreList: GenreType[];
  selectedGenres: number[];
};

const initialState: GenreSliceType = {
  genreList: [],
  selectedGenres: [],
};

const GenreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.selectedGenres = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genreList = action.payload.genres;
    });
    builder.addCase(fetchGenres.pending, (state, action) => {
      //
    });
    builder.addCase(fetchGenres.rejected, (state, action) => {
      state.genreList = [];
    });
  },
});

export const { selectGenre } = GenreSlice.actions;

export default GenreSlice.reducer;
