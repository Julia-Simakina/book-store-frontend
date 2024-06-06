import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../api/http/bookApi";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  return getBooks();
});
