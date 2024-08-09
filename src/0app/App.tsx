import { Route, Routes } from 'react-router-dom';

import {
  Login,
  Layout,
  MovieById,
  Registration,
  NotFound,
  Movies,
} from 'pages';
import { ROUTES } from 'shared';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />

        <Route path={ROUTES.LOGOUT} element={<div>logout</div>} />

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
          <Route index element={<div>all series</div>} />
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

        <Route path={ROUTES.PERSONS}>
          <Route index element={<div>actors</div>} />
          <Route path={ROUTES.PERSON} element={<div>actor </div>} />
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
