import SvgIconStyle from '@/app/components/shared/SvgIconStyle';

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`assets/icons/${name}.svg`}
    sx={{ width: 24, height: 24 }}
  />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  calendar: getIcon('ic_calendar'),
};

const navConfig = [
  {
    subheader: 'menu v3.5.0',
    items: [
      { title: 'Home', path: '#', icon: ICONS.user },
      { title: 'Daily', path: '#', icon: ICONS.calendar },
      { title: 'History', path: '#', icon: ICONS.analytics },
      { title: 'Storage', path: '#', icon: ICONS.ecommerce },
    ],
  },
];

export default navConfig;
