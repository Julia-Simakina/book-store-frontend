import { createSlice } from "@reduxjs/toolkit";
import { BookType } from "../types";
import { fetchBooks } from "./BookThunk";

type BookSliceType = {
  bookList: BookType[];
  numberOfPages: number;
  genreIdsArr: number[];
};

const initialState: BookSliceType = {
  bookList: [],
  numberOfPages: 1,
  genreIdsArr: [],
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.bookList = action.payload.books;
      state.numberOfPages = action.payload.numberOfPages;
      state.genreIdsArr = action.payload.genreIdsArr;
    });
    builder.addCase(fetchBooks.pending, (state, action) => {
      //
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.bookList = [];
      state.numberOfPages = 1;
      state.genreIdsArr = [];
    });
  },
});

export default BookSlice.reducer;
