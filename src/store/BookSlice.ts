import { createSlice } from "@reduxjs/toolkit";
import { BookType } from "../types";
import { fetchBooks } from "./BookThunk";

type BookSliceType = {
  bookList: BookType[];
  numberOfPages: number;
};

const initialState: BookSliceType = {
  bookList: [],
  numberOfPages: 1,
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.bookList = action.payload.books;
      state.numberOfPages = action.payload.numberOfPages;
    });
    builder.addCase(fetchBooks.pending, (state, action) => {
      //
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.bookList = [];
      state.numberOfPages = 1;
    });
  },
});

export default BookSlice.reducer;
