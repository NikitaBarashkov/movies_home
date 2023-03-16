import { useSelector } from 'react-redux';

import { useSignUp } from '../../hooks/useSignUp';
import { useAuth } from '../../hooks/useAuth';

import s from './SignUpForm.module.css';

export const SignUpForm = () => {
  const logUpErrors = useSelector((store) => store.authorization.invalidLogUp);

  const {
    username,
    changeUsername,
    email,
    changeEmail,
    password,
    changePassword,
  } = useAuth();

  const onSubmit = useSignUp(username, email, password);

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <fieldset className={s.fieldset}>
        <label className={s.label} htmlFor='name'>
          Your name:
        </label>
        <input
          className={s.input}
          type='text'
          id='name'
          placeholder='name'
          autoFocus
          required
          value={username}
          onChange={changeUsername}
          minLength='3'
          maxLength='10'
        />

        <label className={s.label} htmlFor='email'>
          Your email:
        </label>
        <input
          className={s.input}
          type='email'
          id='email'
          placeholder='email@gmail.com'
          required
          value={email}
          onChange={changeEmail}
        />

        <label className={s.label} htmlFor='password'>
          Your password:
        </label>
        <input
          className={s.input}
          type='password'
          id='password'
          placeholder='password'
          required
          value={password}
          onChange={changePassword}
          minLength='5'
          maxLength='10'
        />
        <button className={s.btn__submit}>Sign Up</button>

        {logUpErrors.isWrong && (
          <p className={s.warning_title}>{logUpErrors.wrongValue}</p>
        )}
      </fieldset>
    </form>
  );
};
