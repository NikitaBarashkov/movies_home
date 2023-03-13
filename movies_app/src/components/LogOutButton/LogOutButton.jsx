import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { logOut } from '../../store/authorizationSlice';

import s from './LogOutButton.module.css';

export const LogOutButton = () => {
  const dispatch = useDispatch();
  const { isLight } = useTheme();

  const onClick = () => dispatch(logOut({ isAuth: false, user: null }));

  return (
    <button
      className={cn(s.btn, { [s.btn__light]: isLight })}
      type='button'
      onClick={onClick}>
      Log Out
    </button>
  );
};
