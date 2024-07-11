import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/store';

export const themeSlice = (state: RootState) => state.theme; // Создаем начальное знаечение, с которого начнет свой путь createSelector

export const themeSelector = createSelector(themeSlice, (theme) => theme.theme);
