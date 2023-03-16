import { HeaderLink } from '../HeaderLink/HeaderLink';
import { UserProfile } from '../UserProfile/UserProfile';

import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={s.nav}>
      <HeaderLink to='/' pagesName='Home' />
      <HeaderLink to='/search' pagesName='Search' />
      <UserProfile />
    </nav>
  );
};
