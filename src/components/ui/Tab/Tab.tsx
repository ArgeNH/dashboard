import type { FC, Dispatch } from 'react';
import { Link } from 'react-router-dom';

import { NavType } from '../../../../types';

interface TabProps extends NavType {
  active: boolean;
  setTabIndex: Dispatch<React.SetStateAction<number>>;
}

export const Tab: FC<TabProps> = ({
  id,
  name,
  Icon,
  route,
  active,
  setTabIndex,
}) => {
  return (
    <Link
      to={route}
      className={`inline-flex gap-2 text-lg justify-space items-end border-b-4 ${
        active ? 'border-primary-500 text-primary-700' : 'border-transparent'
      }`}
      onClick={() => setTabIndex(id - 1)}
    >
      <Icon width={26} height={26} /> {name}
    </Link>
  );
};
