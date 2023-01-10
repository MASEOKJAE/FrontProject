// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',              // 옮겨야 하는 내용 -> profile 안으로
    path: '/dashboard/home',
    icon: icon('ic_user'),
  },
  {
    title: '출석 데이터',
    path: '/dashboard/',
    // icon: icon('ic_analytics'),
  },
  {
    title: '성적 데이터',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {                          // calender 관리를 위해 임시 설정
  //   title: '달력 체크',
  //   path: '/dashboard/calender',
  //   // icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;