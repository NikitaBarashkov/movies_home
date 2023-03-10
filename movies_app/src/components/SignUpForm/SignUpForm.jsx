import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../store/usersSlice';

import { useAuth } from '../../hooks/useAuth';

import s from './SignUpForm.module.css';

export const SignUpForm = () => {
  const users = useSelector((store) => store.users.users);

  const {
    username,
    changeUsername,
    email,
    changeEmail,
    password,
    changePassword,
  } = useAuth();

  const dispatch = useDispatch();

  const isUnique = () => {
    return users.some((user) => {
      if (user.username === username) {
        alert(`The user with the name ${username} already exists `);
        return false;
      } else if (user.email === email) {
        alert(`The user with the mail ${email} already exists`);
        return false;
      }
    });
  };

  const addInUsers = (e) => {
    e.preventDefault();

    if (users.length === 0 || isUnique()) {
      dispatch(
        addUser({
          username,
          email,
          password,
        })
      );
    }
  };

  return (
    <form className={s.form} onSubmit={addInUsers}>
      <fieldset className={s.fieldset}>
        <label className={s.label} htmlFor='name'>
          Your name:
        </label>
        <input
          className={s.input}
          type='text'
          id='name'
          placeholder='Some name'
          autoFocus
          required
          autoComplete='name'
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
