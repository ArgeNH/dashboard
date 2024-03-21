import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Videos } from './pages/Videos';
import { Layout } from './pages/Layout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
