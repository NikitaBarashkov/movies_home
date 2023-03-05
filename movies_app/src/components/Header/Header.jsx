import logo from '../../assets/images/main/logo_main.png';

import s from './Header.module.css';
import cn from 'classnames';

import { HeaderLink } from "../HeaderLink/HeaderLink";
import { useTheme } from '../../hooks/useTheme';

export const Header = () => {
  const { isLight } = useTheme();

  return (
    <header className={ cn(s.header, {[s.header__light]: isLight}) }>
      <div className={s.wrapper}>
        <img className={s.logo} src={logo} alt='logo'/>
        <nav className={s.nav}> 
          <HeaderLink to='/' pagesName='Home' />
          <HeaderLink to='/search' pagesName='Search' />
          <HeaderLink to='/favorite' pagesName='Favorite' />
          <div className={s.signBlock}>
            <HeaderLink to='/signin' pagesName='Sign In' />
          </div>
        </nav>
      </div>
    </header>
  );
};