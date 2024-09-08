import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

export const themeSlice = (state: RootState) => state.theme;

export const themeSelector = createSelector(themeSlice, (theme) => theme.theme);
