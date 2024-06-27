import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../0app/store';

export const userSelector = (state: RootState) => state.user;

export const userJobSelector = createSelector(userSelector, user => user.job);
