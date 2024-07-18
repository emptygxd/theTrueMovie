import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type SetUserPayload = {
  name: string;
  surname: string;
  date: string;
  job: {
    position: string;
    salary: number;
  };
};

type UserState = {
  name: string | null;
  surname: string | null;
  date: string | null;
  job: {
    position: string | null;
    salary: number | null;
  };
};

const initialState: UserState = {
  name: null,
  surname: null,
  date: null,
  job: {
    position: null,
    salary: null,
  },
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
    addLetters: (state, action: PayloadAction<string>) => {
      state.name += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setNameAsync.pending, () => {
        console.log('pending');
      })
      .addCase(
        setNameAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.name += action.payload;
        }
      );
  },
});

export const setNameAsync = createAsyncThunk(
  'user/setNameAsync',
  async (value: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return value;
  }
);
export const userActions = slice.actions;
export const userReducer = slice.reducer;
