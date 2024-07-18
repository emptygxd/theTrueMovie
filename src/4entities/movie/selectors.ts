import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

export const userSelector = (state: RootState) => state.user;

export const userJobSelector = createSelector(userSelector, (user) => user.job);
