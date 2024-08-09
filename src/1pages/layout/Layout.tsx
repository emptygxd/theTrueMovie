import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from 'widgets';

import { themeSelector } from 'shared';

import './style.scss';
import { Suspense } from 'react';

const Layout = () => {
  const theme = useSelector(themeSelector);

  return (
    <>
      <div className="app" data-theme={theme}>
        <Header />

        <div className="container">
          <Suspense fallback={<div>loading</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Layout;
