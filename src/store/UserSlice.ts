import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types";

export type UserStateType = {
  currentUser: UserType | null;
};

export type logginedUser = {
  currentUser: UserType;
};

const initialState: UserStateType = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      console.log(">>>>>>>>> user slice", action.payload);
      state.currentUser = action.payload;
    },

    logOutUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
