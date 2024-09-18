import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type NewType = {
  name: string;
  email: string;
  photo?: string;
};

type SetUserPayload = NewType;

type UserState = {
  name: string | null;
  email: string | null;
  photo?: string | null;
};

const initialState: UserState = {
  name: null,
  email: null,
  // photo: null,
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
