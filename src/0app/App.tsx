import { Route, Routes } from 'react-router-dom';

import { Layout } from 'pages';
import { Loader, ROUTES } from 'shared';
import { lazy } from 'react';

const Login = lazy(() => import('../1pages/login/Login'));
const MovieById = lazy(() => import('../1pages/movieById/MovieById'));
const Registration = lazy(() => import('../1pages/registration/Registration'));
const NotFound = lazy(() => import('../1pages/notFound/NotFound'));
const Movies = lazy(() => import('../1pages/movies/Movies'));
const Series = lazy(() => import('../1pages/series/Series'));
const ActorsById = lazy(() => import('../1pages/actorsById/ActorsById'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />

        <Route path={ROUTES.LOGOUT} element={<Loader />} />

        <Route path={ROUTES.MOVIES}>
          <Route index element={<Movies />} />
          <Route path={ROUTES.MOVIE_BY_ID} element={<MovieById />}>
            <Route
              path={ROUTES.CAST}
              element={<div>all actors of movie</div>}
            />
          </Route>
        </Route>

        <Route path={ROUTES.SERIES}>
          <Route index element={<Series />} />
          <Route
            path={ROUTES.SERIES_BY_ID}
            element={<div>the series by id</div>}
          >
            <Route
              path={ROUTES.CAST}
              element={<div>all actors of series</div>}
            />
          </Route>
        </Route>

        <Route path={ROUTES.COUNTRIES}>
          <Route index element={<div>all countries</div>} />
          <Route path={ROUTES.COUNTRY} element={<div>country</div>} />
        </Route>

        <Route path={ROUTES.GENRES}>
          <Route index element={<div>genres</div>} />
          <Route path={ROUTES.GENRE} element={<div>genre</div>} />
        </Route>

        {/* <Route path={ROUTES.MOVIES}>
          <Route index element={<Movies />} />
          <Route path={ROUTES.MOVIE_BY_ID} element={<MovieById />}>
            <Route
              path={ROUTES.CAST}
              element={<div>all actors of movie</div>}
            />
          </Route>
        </Route> */}

        <Route path={ROUTES.PERSONS}>
          <Route index element={<div>actors</div>} />
          <Route path={ROUTES.PERSON} element={<ActorsById />} />
        </Route>

        <Route path={ROUTES.USER}>
          <Route index element={<div>user</div>} />
          <Route path={ROUTES.USER_MOVIES} element={<div>USER_MOVIES </div>} />
          <Route path={ROUTES.USER_SERIES} element={<div>USER_SERIES </div>} />
          <Route
            path={ROUTES.USER_PERSONS}
            element={<div>USER_PERSONS </div>}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
