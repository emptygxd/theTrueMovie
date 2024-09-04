import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Cast, Layout, SearchResult } from 'pages';

import { Loader, ROUTES } from 'shared';

const Login = lazy(() => import('../1pages/login/Login'));
const Main = lazy(() => import('../1pages/main/Main'));
const MovieById = lazy(() => import('../1pages/movieById/MovieById'));
const Registration = lazy(() => import('../1pages/registration/Registration'));
const NotFound = lazy(() => import('../1pages/notFound/NotFound'));
const Movies = lazy(() => import('../1pages/movies/Movies'));
const ActorsById = lazy(() => import('../1pages/actorById/ActorById'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />

        <Route path={ROUTES.LOGOUT} element={<Loader />} />

        <Route path={ROUTES.MAIN} element={<Main />} />

        <Route path={ROUTES.SEARCH_RESULT}>
          <Route index element={<Navigate to={ROUTES.MAIN} replace />} />
          <Route path={ROUTES.SEARCH_QUERY} element={<SearchResult />} />
        </Route>

        <Route path={ROUTES.MOVIES}>
          <Route index element={<Movies />} />
          <Route path={ROUTES.MOVIE_BY_ID}>
            <Route index element={<MovieById />} />
            <Route path={ROUTES.CAST} element={<Cast />} />
          </Route>
        </Route>

        <Route path={ROUTES.PERSONS}>
          <Route index element={<div>actors</div>} />
          <Route path={ROUTES.PERSON} element={<ActorsById />} />
        </Route>

        {/* <Route path={ROUTES.USER}>
          <Route index element={<div>user</div>} />
          <Route path={ROUTES.USER_MOVIES} element={<div>USER_MOVIES </div>} />
          <Route path={ROUTES.USER_SERIES} element={<div>USER_SERIES </div>} />
          <Route
            path={ROUTES.USER_PERSONS}
            element={<div>USER_PERSONS </div>}
          />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
