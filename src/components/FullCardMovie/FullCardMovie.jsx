import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { Card } from './Card';
import s from './FullCardMovie.module.css';

export const FullCardMovie = () => {
  const { isLight } = useTheme();

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      <Card />
    </main>
  );
};
