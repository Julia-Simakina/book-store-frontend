import { createSlice } from "@reduxjs/toolkit";
import { BookType } from "../types";
import { fetchBooks } from "./BookThunk";

type BookSliceType = {
  bookList: BookType[];
};

const initialState: BookSliceType = {
  bookList: [],
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.bookList = action.payload;
    });
    builder.addCase(fetchBooks.pending, (state, action) => {
      //
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.bookList = [];
    });
  },
});

export default BookSlice.reducer;
