import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { CardPlan, Menu } from './ui';

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    localStorage.setItem('collapsed', JSON.stringify(!collapsed));
  };

  useEffect(() => {
    const isCollapsed = localStorage.getItem('collapsed');
    if (isCollapsed) {
      setCollapsed(JSON.parse(isCollapsed));
    }
  }, []);

  return (
    <aside
      className={`flex-col bg-white rounded-xl p-4 text-black hidden md:flex ${
        collapsed
          ? 'w-20 gap-8 bg-gray-800 transition-all duration-300 ease-in-out'
          : 'w-[22%] gap-12 bg-gray-700 transition-all duration-300 ease-in-out'
      }`}
    >
      <button className="font-medium self-end p-2" onClick={toggleCollapse}>
        {collapsed ? <>&#5171;</> : <>&#5176;</>}
      </button>

      <img
        className="rounded-2xl object-cover self-center"
        alt="logo-dashboard"
        src="./logo.png"
        width={80}
        height={80}
      />
      <Menu collapsed={collapsed} />

      {!collapsed && <CardPlan />}
    </aside>
  );
};

export default Sidebar;
