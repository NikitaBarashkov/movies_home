import logo from '../../assets/images/main/logo_main.png';

import s from './Header.module.css';
import cn from 'classnames';

import { HeaderLink } from "../HeaderLink/HeaderLink";
import { useTheme } from '../../hooks/useTheme';

export const Header = () => {
  const { isLigth } = useTheme();

  return (
    <header className={isLigth ? cn(s.header, s.header__ligth) : s.header}>
      <div className={s.wrapper}>
        <img className={s.logo} src={logo} alt='logo'/>
        <nav className={s.nav}> 
          <HeaderLink to='/' pagesName='Home' />
          <HeaderLink to='/search' pagesName='Search' />
          <HeaderLink to='/favorite' pagesName='Favotite' />
          <div className={s.signBlock}>
            <HeaderLink to='/signin' pagesName='Sign In' />
          </div>
        </nav>
      </div>
    </header>
  );
};