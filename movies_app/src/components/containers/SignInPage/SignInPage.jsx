import { useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';
import { ChangeFormButton } from '../../ChangeFormButton/ChangeFormButton';
import { SignUpForm } from '../../SignUpForm/SignUpForm';
import { SignInForm } from '../../SignInForm/SignInForm';
import { RedirectToMain } from '../../RedirectToMain/RedirectToMain';

import s from './SignInPage.module.css';

export const SignInPage = () => {
  const { isLight } = useTheme();
  const [isSignUp, changeCurrentForm] = useState(true);

  const toggleForms = () => changeCurrentForm(!isSignUp);

  const currentForm = isSignUp ? <SignUpForm /> : <SignInForm />;

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      <RedirectToMain>
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
      </RedirectToMain>
    </main>
  );
};
