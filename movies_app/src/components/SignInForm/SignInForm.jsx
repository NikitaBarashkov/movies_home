import { useSelector } from 'react-redux';

import { useAuth } from '../../hooks/useAuth';
import { useSignIn } from '../../hooks/useSignIn';

import s from '../SignUpForm/SignUpForm.module.css';

export const SignInForm = () => {
  const loginErrors = useSelector((store) => store.authorization.invalidLogIn);

  const {
    username: usernameOrEmail,
    changeUsername,
    password,
    changePassword,
  } = useAuth();

  const onSubmit = useSignIn(usernameOrEmail, password);

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <fieldset className={s.fieldset}>
        <label className={s.label} htmlFor='name'>
          Your name or email:
        </label>
        <input
          className={s.input}
          type='text'
          id='name'
          placeholder='name or email'
          autoFocus
          required
          value={usernameOrEmail}
          onChange={changeUsername}
          minLength='3'
          maxLength='10'
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

        <button className={s.btn__submit}>Sign In</button>

        {loginErrors.isWrong && (
          <p className={s.warning_title}>{loginErrors.wrongValue}</p>
        )}
      </fieldset>
    </form>
  );
};
