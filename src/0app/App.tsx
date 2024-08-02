import { Route, Routes } from 'react-router-dom';

import { Login, Layout, MovieById } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />

        <Route path="/movies">
          <Route index element={<div>all movies</div>} />
          <Route path=":movieId" element={<MovieById />}>
            <Route path="cast" element={<div>all actors of movie</div>} />
          </Route>
        </Route>

        <Route path="/series">
          <Route index element={<div>all series</div>} />
          <Route path=":seriesId" element={<div>the series by id</div>} />
        </Route>

        <Route path="/countries">
          <Route index element={<div>all countries</div>} />
          <Route path=":countryName" element={<div>country</div>} />
        </Route>

        <Route path="/genres">
          <Route index element={<div>genres</div>} />
          <Route path=":genreName" element={<div>genre</div>} />
        </Route>

        <Route path="/actors">
          <Route index element={<div>actors</div>} />
          <Route path=":actorId" element={<div>actor </div>} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};
