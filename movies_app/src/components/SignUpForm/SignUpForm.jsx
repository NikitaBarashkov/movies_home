import { useDispatch, useSelector } from 'react-redux';

import { addUser } from '../../store/usersSlice';
import { logIn } from '../../store/authorizationSlice';
import { useAuth } from '../../hooks/useAuth';

import s from './SignUpForm.module.css';

export const SignUpForm = () => {
  const users = useSelector((store) => store.users.users);
  const dispatch = useDispatch();

  const {
    username,
    changeUsername,
    email,
    changeEmail,
    password,
    changePassword,
  } = useAuth();

  const isNotUnique = () => {
    return users.some(
      (user) => user.username === username || user.email === email
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (users.length === 0 || !isNotUnique()) {
      dispatch(
        addUser({
          username,
          email,
          password,
        })
      );
      dispatch(
        logIn({
          isAuth: true,
          user: username,
        })
      );
    }
  };

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
      </fieldset>
    </form>
  );
};
