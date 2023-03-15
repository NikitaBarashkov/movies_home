import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { logOut } from '../../store/authorizationSlice';
import { useSearchGoal } from '../../hooks/useSearchGoal';

import s from './LogOutButton.module.css';

export const LogOutButton = () => {
  const dispatch = useDispatch();
  const { isLight } = useTheme();
  const { changeSearchGoal } = useSearchGoal();

  const onClick = () => {
    dispatch(logOut({ isAuth: false, user: null }));
    changeSearchGoal('', 'both');
  };

  return (
    <button
      className={cn(s.btn, { [s.btn__light]: isLight })}
      type='button'
      onClick={onClick}>
      Log Out
    </button>
  );
};
