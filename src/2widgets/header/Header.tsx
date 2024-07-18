import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { themeSelector, themeActions, Menu, Toggle } from 'shared';

import './style.scss';

export const Header = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const changeTheme = useCallback(() => {
    dispatch(
      themeActions.setTheme({
        theme: theme === 'light' ? 'dark' : 'light',
      })
    );
  }, [dispatch, theme]);

  return (
    <div className="header">
      <div className="header__container">
        <Menu />

        <Toggle callback={changeTheme} />
      </div>
    </div>
  );
};
