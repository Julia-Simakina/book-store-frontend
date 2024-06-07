import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../api/http/bookApi";

type fetchBooksPropsType = {
  endIndex: number;
  startIndex: number;
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (props: fetchBooksPropsType) => {
    return getBooks(props.startIndex, props.endIndex);
  }
);
