import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../4entities/movie/slice';
import { themeReducer } from 'shared/theme';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
