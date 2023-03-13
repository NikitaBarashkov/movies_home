import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';
import { StoryBox } from '../../StoryBox/StoryBox';

import s from './HistoryPage.module.css';

export const HistoryPage = () => {
  const { isLight } = useTheme();

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      <h1 className={s.title}>History</h1>
      <section className={s.history_block}>
        <StoryBox />
      </section>
    </main>
  );
};
