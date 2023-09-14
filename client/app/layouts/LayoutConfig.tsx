import SvgIconStyle from '@/app/components/shared/SvgIconStyle';

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`assets/icons/${name}.svg`}
    sx={{ width: 24, height: 24 }}
  />
);

const ICONS = {
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
};

const headerConfig = [
  {
    items: [
      { path: '#', icon: ICONS.search },
      { path: '#', icon: ICONS.app },
      { path: '#', icon: ICONS.expand },
      { path: '#', icon: ICONS.notification },
    ],
  },
];

const navConfig = [
  {
    subheader: 'menu v3.5.0',
    items: [
      { title: 'Home', path: '#', icon: ICONS.user },
      { title: 'Daily', path: '#', icon: ICONS.calendar },
      { title: 'History', path: '#', icon: ICONS.history },
      { title: 'Storage', path: '#', icon: ICONS.storage },
    ],
  },
];

export default navConfig;
