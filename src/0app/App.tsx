import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../1pages/Layout';
import { Login } from '../1pages/Login';
import MovieById from '../1pages/MovieById';
import { Header } from '../5shared/header/Header';

export const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="app" data-theme={isDark ? 'dark' : 'light'}>
      <div className="header">
        <Header />

        <button onClick={() => setIsDark(() => !isDark)}>darkmode</button>
      </div>

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies">
          <Route index element={<div>all movies</div>} />
          <Route path=":movieId" element={<MovieById />} />
        </Route>
        <Route path="/series" element={<div>all series</div>} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};
