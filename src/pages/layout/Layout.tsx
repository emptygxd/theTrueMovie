import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from 'widgets';

import { Loader, ScrollToTop, themeSelector } from 'shared';

import './style.scss';

const Layout = () => {
  const theme = useSelector(themeSelector);

  return (
    <>
      <div className="app" data-theme={theme}>
        <Header />

        <div className="container">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>

          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default Layout;
