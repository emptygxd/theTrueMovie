import { useDispatch, useSelector } from 'react-redux';

import { themeActions } from 'shared/theme';
import { themeSelector } from 'shared/theme/selectors';

import './style.scss';
import { Menu } from 'shared/components/menu/Menu';
import { Toggle } from 'shared/components/toggle';

export const Header = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(
      themeActions.setTheme({
        theme: theme === 'light' ? 'dark' : 'light',
      })
    );
  };

  return (
    <div className="header">
      <div className="header__container">
        <Menu />

        <Toggle callback={changeTheme} />
      </div>
    </div>
  );
};
