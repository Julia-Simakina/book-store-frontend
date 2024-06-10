import { createSlice } from "@reduxjs/toolkit";
import { BookType } from "../types";
import { fetchBooks } from "./BookThunk";

type SlicedCardsType = {
  slicedCards: BookType[];
  numbers: number[];
};

type BookSliceType = {
  currentPage: number;
  bookList: SlicedCardsType;
};

const initialState: BookSliceType = {
  currentPage: 1,
  bookList: {
    slicedCards: [],
    numbers: [],
  },
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    incrementCurrentPage(state) {
      state.currentPage += 1;
    },

    decrementCurrentPage(state) {
      state.currentPage -= 1;
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.bookList.slicedCards = action.payload.slicedCards;
      state.bookList.numbers = action.payload.numbers;
    });
    builder.addCase(fetchBooks.pending, (state, action) => {
      //
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.bookList.slicedCards = [];
      state.bookList.numbers = [];
    });
  },
});

export const { incrementCurrentPage, decrementCurrentPage, setCurrentPage } =
  BookSlice.actions;
export default BookSlice.reducer;
