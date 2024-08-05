import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { themeSelector, themeActions, Menu, Toggle, UserPfp } from 'shared';

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
    <section className="header">
      <div className="header__container">
        <Menu />

        <div className="header__right">
          <Toggle callback={changeTheme} />

          <UserPfp />
        </div>
      </div>
    </section>
  );
};
