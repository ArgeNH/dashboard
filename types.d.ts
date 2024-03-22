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

export type FolderType = {
  id: number;
  name: string;
  videos?: number;
  duration?: string;
  size: string;
  lastModified: string;
};
