import { createSlice } from "@reduxjs/toolkit";
import { BookType } from "../types";
import { fetchBooks } from "./BookThunk";

type SlicedCardsType = {
  slicedCards: BookType[];
  numberOfPages: number;
  currentPage: number;
};

type BookSliceType = {
  // currentPage: number;
  bookList: SlicedCardsType;
};

const initialState: BookSliceType = {
  // currentPage: 1,
  bookList: {
    slicedCards: [],
    currentPage: 1,
    numberOfPages: 1,
  },
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    incrementCurrentPage(state) {
      state.bookList.currentPage += 1;
    },

    decrementCurrentPage(state) {
      state.bookList.currentPage -= 1;
    },

    setCurrentPage(state, action) {
      state.bookList.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.bookList.slicedCards = action.payload.slicedCards;
      state.bookList.numberOfPages = action.payload.numberOfPages;
      state.bookList.currentPage = action.payload.currentPage;
    });
    builder.addCase(fetchBooks.pending, (state, action) => {
      //
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.bookList.slicedCards = [];
      state.bookList.numberOfPages = 1;
    });
  },
});

export const { incrementCurrentPage, decrementCurrentPage, setCurrentPage } =
  BookSlice.actions;
export default BookSlice.reducer;
