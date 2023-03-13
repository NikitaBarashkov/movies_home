import { HeaderLink } from '../HeaderLink/HeaderLink';
import { LogOutButton } from '../LogOutButton/LogOutButton';
import { useUser } from '../../hooks/useUser';

import s from './UserProfile.module.css';

export const UserProfile = () => {
  const { isAuth, user } = useUser();

  if (!isAuth) {
    return (
      <div className={s.signBlock}>
        <HeaderLink to='/signin' pagesName='Sign In / Sign Up' />
      </div>
    );
  }

  return (
    <>
      <HeaderLink to='/favorite' pagesName='Favorite' />
      <HeaderLink to='/history' pagesName='History' />
      <LogOutButton />
      <span className={s.username}>{user}</span>
    </>
  );
};
