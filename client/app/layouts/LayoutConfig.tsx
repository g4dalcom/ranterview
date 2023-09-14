import SvgIconStyle from '@/app/components/shared/SvgIconStyle';

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`assets/icons/${name}.svg`}
    sx={{ width: 24, height: 24 }}
  />
);

export const ICONS = {
  user: getIcon('ic_user'),
  storage: getIcon('ic_storage'),
  history: getIcon('ic_history'),
  dashboard: getIcon('ic_dashboard'),
  calendar: getIcon('ic_calendar'),
  search: getIcon('ic_search'),
  notification: getIcon('ic_notification'),
  home: getIcon('ic_home'),
  expand: getIcon('ic_expand'),
  app: getIcon('ic_app'),
  profile: getIcon('ic_profile'),
};

const headerConfig = [
  { id: 1, path: '#', icon: ICONS.search },
  { id: 2, path: '#', icon: ICONS.app },
  { id: 3, path: '#', icon: ICONS.expand },
  { id: 4, path: '#', icon: ICONS.notification },
];

const navConfig = [
  {
    subheader: 'menu v3.5.0',
    items: [
      { id: 1, title: 'Home', path: '#', icon: ICONS.user },
      { id: 2, title: 'Daily', path: '#', icon: ICONS.calendar },
      { id: 3, title: 'History', path: '#', icon: ICONS.history },
      { id: 4, title: 'Storage', path: '#', icon: ICONS.storage },
    ],
  },
];

export { navConfig, headerConfig };
