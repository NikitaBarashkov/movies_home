import cn from 'classnames';
import { Link } from 'react-router-dom';

import { NavBar } from '../NavBar/NavBar';
import { useTheme } from '../../hooks/useTheme';

import logo from '../../assets/images/main/logo_main.png';
import s from './Header.module.css';

export const Header = () => {
  const { isLight } = useTheme();

  return (
    <header className={cn(s.header, { [s.header__light]: isLight })}>
      <div className={s.wrapper}>
        <Link to='/'>
          <img className={s.logo} src={logo} alt='logo' />
        </Link>
        <NavBar />
      </div>
    </header>
  );
};
