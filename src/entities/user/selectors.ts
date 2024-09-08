import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app';

export const userSelector = (state: RootState) => state.user;

export const userNameSelector = createSelector(
  userSelector,
  (user) => user.name
);
export const userPicSelector = createSelector(
  userSelector,
  (user) => user.photo
);
