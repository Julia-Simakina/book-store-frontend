import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type UserType = {
  id: number;
  email: string;
  password: string;
};

type UserStateType = {
  currentUser: UserType | null;
};

const initialState: UserStateType = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = action.payload;
    },

    logOutCurrentUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, logOutCurrentUser } = userSlice.actions;
export default userSlice.reducer;
