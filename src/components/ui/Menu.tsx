import type { FC } from 'react';

import { NAV_ITEMS } from '../../constants';
import { MenuItem } from './MenuItem';

export const Menu: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <ul className="flex flex-col gap-8">
      {NAV_ITEMS.map((item) => (
        <MenuItem key={item.id} {...item} collapsed={collapsed} />
      ))}
    </ul>
  );
};
