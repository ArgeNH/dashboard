import type { FC } from 'react';

export type NavType = {
  id: number;
  name: string;
  route: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
};

export type PlanType = {
  id: number;
  label: string;
  capacity: string;
  value: number;
};
