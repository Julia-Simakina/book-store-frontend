import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type UserType = {
  id: number;
  email: string;
  password: string;
};

type UserStateType = {
  currentUser: UserType | null;
};

const initialState: UserStateType = {
  currentUser: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = action.payload;
    },

    logOutUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = null;
    }
  }
});

export const { setUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
