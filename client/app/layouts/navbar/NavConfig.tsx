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
};

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
