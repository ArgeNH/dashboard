import type { FolderType, NavType, PlanType } from '../../types';
import {
  AnalyticsSvg,
  DashboardSvg,
  FolderSvg,
  PlayerSvg,
  SettingsSvg,
  TrashSvg,
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

export const TabItems: NavType[] = [
  {
    id: 1,
    name: 'Biblioteca',
    route: '/videos',
    Icon: FolderSvg,
  },
  {
    id: 2,
    name: 'Papelera',
    route: '/videos/trash',
    Icon: TrashSvg,
  },
];

export const TABLE_BODY: FolderType[] = [
  {
    id: 1,
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastModified: '30/may/2023',
  },
  {
    id: 2,
    name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastModified: '22/jun/2022',
  },
  {
    id: 3,
    name: 'Comizzión',
    videos: 10,
    size: '284 MB',
    lastModified: '11/sep/2021',
  },
  {
    id: 4,
    name: 'Creador de Contenido',
    videos: 2,
    size: '4.3 GB',
    lastModified: '21/jun/2023',
  },
  {
    id: 5,
    name: 'Exportados Wil',
    videos: 14,
    size: '500 MB',
    lastModified: '5/abr/2023',
  },
  {
    id: 6,
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastModified: '30/may/2023',
  },
  {
    id: 7,
    name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastModified: '22/jun/2022',
  },
  {
    id: 8,
    name: 'Comizzión',
    videos: 10,
    size: '284 MB',
    lastModified: '11/sep/2021',
  },
  {
    id: 9,
    name: 'Creador de Contenido',
    videos: 2,
    size: '4.3 GB',
    lastModified: '21/jun/2023',
  },
  {
    id: 10,
    name: 'Exportados Wil',
    videos: 14,
    size: '500 MB',
    lastModified: '5/abr/2023',
  },
];

export const TABLE_BODY_VIDEOS: FolderType[] = [
  {
    id: 1,
    name: 'Entrenamiento.mp4',
    size: '7.3 GB',
    duration: '04:11:37',
    lastModified: '30/may/2023',
  },
  {
    id: 2,
    name: 'Salida-al-mercado-versión nueva.mp4',
    size: '1.4 GB',
    duration: '47:55',
    lastModified: '22/jun/2022',
  },
  {
    id: 3,
    name: 'Como-cerrar-una-venta.mp4',
    size: '284 MB',
    duration: '10:12',
    lastModified: '11/sep/2021',
  },
  {
    id: 4,
    name: 'Crea-un-ticket-valioso.mp4',
    size: '4.3 GB',
    duration: '03:50:22',
    lastModified: '21/jun/2023',
  },
  {
    id: 5,
    name: 'Conquista-el-mercado-digital.mp4',
    size: '500 MB',
    duration: '5:00',
    lastModified: '5/abr/2023',
  },
  {
    id: 6,
    name: 'Entrenamiento.mp4',
    size: '7.3 GB',
    duration: '04:11:37',
    lastModified: '30/may/2023',
  },
  {
    id: 7,
    name: 'Salida-al-mercado-versión nueva.mp4',
    size: '1.4 GB',
    duration: '47:55',
    lastModified: '22/jun/2022',
  },
  {
    id: 8,
    name: 'Como-cerrar-una-venta.mp4',
    size: '284 MB',
    duration: '10:12',
    lastModified: '11/sep/2021',
  },
  {
    id: 9,
    name: 'Crea-un-ticket-valioso.mp4',
    size: '4.3 GB',
    duration: '03:50:22',
    lastModified: '21/jun/2023',
  },
  {
    id: 10,
    name: 'Conquista-el-mercado-digital.mp4',
    size: '500 MB',
    duration: '5:00',
    lastModified: '5/abr/2023',
  },
];
