import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface MenuItemProps {
  name: string;
  route: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  collapsed: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
  name,
  route,
  Icon,
  collapsed,
}) => {
  const { pathname } = useLocation();

  return (
    <li
      className={`p-2 rounded-md ${
        pathname === route
          ? 'text-white font-bold bg-primary-700 transition-all duration-300 ease-in-out hover:bg-primary-900'
          : 'text-black transition-all duration-300 ease-in-out hover:bg-secondary-200'
      }`}
    >
      <a
        className="flex flex-row justify-start items-center gap-8"
        href={route}
      >
        <Icon />
        {!collapsed && <h3 className="text-xl">{name}</h3>}
      </a>
    </li>
  );
};
