import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userActions } from 'entities';

import { Loader, ROUTES } from 'shared';

export const Logout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(userActions.clearUser());
    navigation(ROUTES.LOGIN);
  });
  return <Loader />;
};
