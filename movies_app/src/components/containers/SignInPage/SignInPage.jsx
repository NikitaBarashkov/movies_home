import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';
import { ChangeFormButton } from '../../ChangeFormButton/ChangeFormButton';
import { SignUpForm } from '../../SignUpForm/SignUpForm';
import { SignInForm } from '../../SignInForm/SignInForm';

import s from './SignInPage.module.css';

const SignInPage = () => {
  const { isLight } = useTheme();
  const [isSignUp, changeCurrentForm] = useState(true);
  const isAuth = useSelector((store) => store.authorization.currentUser.isAuth);

  const toggleForms = () => changeCurrentForm(!isSignUp);

  const currentForm = isSignUp ? <SignUpForm /> : <SignInForm />;

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      <section className={s.container}>
        <ChangeFormButton
          text='Sign Up'
          onClick={toggleForms}
          active={isSignUp}
        />
        <ChangeFormButton
          text='Sign In'
          onClick={toggleForms}
          active={!isSignUp}
        />
        <h1 className={s.title}>
          Enter the necessary data to {isSignUp ? 'register' : 'sign in'}
        </h1>
        {currentForm}
      </section>
    </main>
  );
};

export default SignInPage;
