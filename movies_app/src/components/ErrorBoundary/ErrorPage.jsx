import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import s from './ErrorPage.module.css';

export const ErrorPage = () => {
  const { isLight } = useTheme();

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      <h1 className={s.title}>
        Something went wrong. Try reloading the page or going to another page.
      </h1>
    </main>
  );
};
