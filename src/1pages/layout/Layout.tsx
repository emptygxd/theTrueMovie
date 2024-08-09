import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from 'widgets';

import { themeSelector } from 'shared';

import './style.scss';

export function Layout() {
  const theme = useSelector(themeSelector);

  return (
    <>
      <div className="app" data-theme={theme}>
        <Header />

        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
