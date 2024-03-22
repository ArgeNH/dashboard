import type { FC } from 'react';

import { useParams } from 'react-router-dom';

import { NAV_ITEMS } from '../../constants';
import { MenuItem } from './MenuItem';
import { HelpSvg } from '../icons';

export const Menu: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const { id } = useParams();

  return (
    <ul className="flex flex-col gap-8">
      {NAV_ITEMS.map((item) => (
        <MenuItem key={item.id} {...item} collapsed={collapsed} />
      ))}
      {id && (
        <MenuItem
          name="Ayuda"
          route="/help"
          Icon={HelpSvg}
          collapsed={collapsed}
        />
      )}
    </ul>
  );
};
