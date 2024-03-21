import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

export const Layout = () => {
  return (
    <div className="flex h-screen p-4 gap-4">
      <Sidebar />
      <section className={`w-full rounded-xl bg-white px-10 py-8`}>
        <Outlet />
      </section>
    </div>
  );
};
