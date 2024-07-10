import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  theme: 'light' | 'dark';
};

type ThemeValuesType = 'light' | 'dark' | null;

let isInitialState = localStorage.getItem('theme') as ThemeValuesType;

if (isInitialState === null) {
  isInitialState = 'light';
  localStorage.setItem('theme', isInitialState);
}

const initialState: ThemeState = {
  theme: isInitialState,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      localStorage.setItem('theme', action.payload.theme);
      state.theme = action.payload.theme;
    },
  },
});

export const themeActions = slice.actions;
export const themeReducer = slice.reducer;
