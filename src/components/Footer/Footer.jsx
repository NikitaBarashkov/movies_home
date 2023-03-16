import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { ChangeThemeButton } from '../ChangeThemeButton/ChangeThemeButton';

import s from './Footer.module.css';

export const Footer = () => {
  const { isLight, toggleTheme } = useTheme();

  return (
    <footer className={cn(s.footer, { [s.footer__light]: isLight })}>
      <ChangeThemeButton theme={isLight} toggleTheme={toggleTheme} />
    </footer>
  );
};
