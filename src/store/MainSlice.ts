import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types";

export type MainStateType = {
  currentUser: UserType | null;
  isStoreInit: boolean | null;
};

const initialState: MainStateType = {
  currentUser: null,
  isStoreInit: null,
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
});

export const { setUser, logOutUser, initStore } = MainSlice.actions;
export default MainSlice.reducer;
