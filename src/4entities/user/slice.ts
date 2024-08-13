import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type SetUserPayload = {
  name: string;
  email: string;
  password: string;
  photo: string;
};

type UserState = {
  name: string | null;
  email: string | null;
  password: string | null;
  photo: string | null;
};

const initialState: UserState = {
  name: null,
  email: null,
  password: null,
  photo: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state = action.payload;

      return state;
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const userActions = slice.actions;
export const userReducer = slice.reducer;
