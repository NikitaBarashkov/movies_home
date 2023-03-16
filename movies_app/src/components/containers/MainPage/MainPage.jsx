import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';

import s from './MainPage.module.css';

export const MainPage = () => {
  const { isLight } = useTheme();

  return (
    <main className={s.main}>
      <div className={cn(s.title, { [s.title__light]: isLight })}>
        <h1>All your favorite movies in one place</h1>
        <NavLink to='search'>
          <button className={s.btn} type='button'>
            Get started
          </button>
        </NavLink>
      </div>
    </main>
  );
};
