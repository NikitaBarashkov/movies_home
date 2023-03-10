import { useSelector } from 'react-redux';

import { useAuth } from '../../hooks/useAuth';

import s from '../SignUpForm/SignUpForm.module.css';

export const SignInForm = () => {
  const users = useSelector((store) => store.users.users);

  const {
    username: usernameOrEmail,
    changeUsername,
    password,
    changePassword,
  } = useAuth();

  const checkUser = () => {
    const res = users.some((user) => {
      return (
        (usernameOrEmail === user.username && password === user.password) ||
        (usernameOrEmail === user.email && password === user.password)
      );
    });

    if (res) {
      console.log(`Hello ${usernameOrEmail}`);
    } else {
      console.log('Name, email or password wrong');
    }
  };

  return (
    <form className={s.form}>
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
        <button
          type='button'
          className={s.btn__submit}
          onClick={() => {
            console.log(users);
            console.log(checkUser());
          }}>
          Sign In
        </button>
      </fieldset>
    </form>
  );
};
