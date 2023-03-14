import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import s from './Preloader.module.css';

export const Preloader = () => {
  const { isLight } = useTheme();

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      <h2 className={s.title}>Loading...</h2>
    </main>
  );
};
