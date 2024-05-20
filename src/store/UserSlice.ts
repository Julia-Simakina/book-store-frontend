import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  id?: number;
  email: string;
  password: string;
  tokens?: any;
  user?: any; //переделать
  fullName?: null;
  ayOfBirth?: null;
  deletedAt?: null;
  createdAt?: string;
  updatedAt?: string;
};

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
  name: "user",
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

export const { setUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
