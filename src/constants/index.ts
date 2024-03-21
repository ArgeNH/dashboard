import type { NavType, PlanType } from '../../types';
import {
  AnalyticsSvg,
  DashboardSvg,
  FolderSvg,
  PlayerSvg,
  SettingsSvg,
} from '../components/icons';

export const NAV_ITEMS: NavType[] = [
  {
    id: 1,
    name: 'Dashboard',
    route: '/',
    Icon: DashboardSvg,
  },
  {
    id: 2,
    name: 'Videos',
    route: '/videos',
    Icon: FolderSvg,
  },
  {
    id: 3,
    name: 'Player',
    route: '/player',
    Icon: PlayerSvg,
  },
  {
    id: 4,
    name: 'Analytics',
    route: '/analytics',
    Icon: AnalyticsSvg,
  },
  {
    id: 5,
    name: 'Configuraciones',
    route: '/configuraciones',
    Icon: SettingsSvg,
  },
];

export const PLAN_ITEMS: PlanType[] = [
  {
    id: 1,
    label: 'Almacenamiento',
    capacity: '23.5 GB / 1 TB',
    value: 70,
  },
  {
    id: 2,
    label: 'Banda Mensual',
    capacity: '3.4 TB / 5 TB',
    value: 60,
  },
];
