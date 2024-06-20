import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { Login } from './Login';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />

        <Route path="`*`" element={<Layout />} />
      </Routes>
    </div>
  );
};
