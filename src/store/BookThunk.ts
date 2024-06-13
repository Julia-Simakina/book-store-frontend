import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../api/http/bookApi";

type fetchBooksPropsType = {
  itemsPerPage: number;
  currentPage: number;
  selectedGenres: number[];
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (props: fetchBooksPropsType) => {
    return getBooks(
      props.itemsPerPage,
      props.currentPage,
      props.selectedGenres
    );
  }
);
