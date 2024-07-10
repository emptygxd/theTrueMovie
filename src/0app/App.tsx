import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../1pages/Layout';
import { Login } from '../1pages/Login';
import { MovieById } from '@pages/movieById';

import { Header } from '@widgets/header';

import { themeSelector } from '@shared/theme/selectors';

export const App = () => {
  const theme = useSelector(themeSelector);

  return (
    <div className="app" data-theme={theme}>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />

        <Route path="/movies">
          <Route index element={<div>all movies</div>} />
          <Route path=":movieId" element={<MovieById />} />
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

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};
