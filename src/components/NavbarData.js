import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    className: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiOutlineSetting />,
    className: 'nav-text'
  },
  {
    title: 'Tracker',
    path: '/tracker',
    icon: <CgIcons.CgCalculator />,
    className: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiOutlineInfoCircle />,
    className: 'nav-text'
  },
]