import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BookType, UserType } from "../types";
import { getBooks } from "../api/http/bookApi";
import { fetchBooks } from "./BookThunk";

export type MainStateType = {
  currentUser: UserType | null;
  isStoreInit: boolean | null;
  bookList: BookType[];
};

const initialState: MainStateType = {
  currentUser: null,
  isStoreInit: null,
  bookList: [],
};

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = action.payload;
    },

    logOutUser: (state) => {
      state.currentUser = null;
    },

    initStore: (state, action: PayloadAction<boolean>) => {
      state.isStoreInit = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchBooks.fulfilled, (state, action) => {
    //   state.bookList = action.payload;
    // });
    // [fetchBooks.fulfilled.type]: (state, action) => {
    //   state.bookList = action.payload;
    // },
  },
});

export const { setUser, logOutUser, initStore } = MainSlice.actions;
export default MainSlice.reducer;
