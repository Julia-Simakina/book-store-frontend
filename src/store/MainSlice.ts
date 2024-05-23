import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types";

export type MainStateType = {
  currentUser: UserType | null;
};

const initialState: MainStateType = {
  currentUser: null,
};

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = action.payload;
    },

    logOutUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, logOutUser } = MainSlice.actions;
export default MainSlice.reducer;
