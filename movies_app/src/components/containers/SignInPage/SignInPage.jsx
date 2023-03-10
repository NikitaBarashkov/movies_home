import { useState } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useTheme } from '../../../hooks/useTheme';
import { ChangeFormBtn } from '../../ChangeFormBtn/ChangeFormBtn';
import { SignUpForm } from '../../SignUpForm/SignUpForm';
import { SignInForm } from '../../SignInForm/SignInForm';

import s from './SignInPage.module.css';

export const SignInPage = () => {
  const { isLight } = useTheme();
  const [isSignUp, changeCurrentForm] = useState(true);

  const authorizedUser = useSelector(
    (store) => store.authorization.currentUser
  );

  const toggleForms = () => changeCurrentForm(!isSignUp);

  const currentForm = isSignUp ? <SignUpForm /> : <SignInForm />;

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      {authorizedUser.isAuth ? (
        <Navigate to='/' />
      ) : (
        <section className={s.container}>
          <ChangeFormBtn
            nameBtn='Sign Up'
            changeForm={toggleForms}
            classMode={isSignUp}
          />
          <ChangeFormBtn
            nameBtn='Sign In'
            changeForm={toggleForms}
            classMode={!isSignUp}
          />
          <h1 className={s.title}>
            Enter the necessary data to {isSignUp ? 'register' : 'sign in'}
          </h1>
          {currentForm}
        </section>
      )}
    </main>
  );
};
