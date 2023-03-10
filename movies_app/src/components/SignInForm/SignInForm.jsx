import { useSelector, useDispatch } from 'react-redux';

import { logIn } from '../../store/authorizationSlice';
import { setLoginErrors } from '../../store/authorizationSlice';
import { useAuth } from '../../hooks/useAuth';

import s from '../SignUpForm/SignUpForm.module.css';

export const SignInForm = () => {
  const users = useSelector((store) => store.users.users);
  const loginErrors = useSelector((store) => store.authorization.wrongInput);
  const dispatch = useDispatch();

  const {
    username: usernameOrEmail,
    changeUsername,
    password,
    changePassword,
  } = useAuth();

  const checkUser = () => {
    return users.find((user) => {
      return (
        user.username === usernameOrEmail || user.email === usernameOrEmail
      );
    });
  };

  const letEntryUser = (e) => {
    e.preventDefault();
    const testRes = checkUser();

    if (!testRes) {
      dispatch(
        setLoginErrors({
          isWrong: true,
          wrongValue: 'There is no such username or email',
        })
      );
    } else if (testRes.password === password) {
      dispatch(logIn({ isAuth: true, user: testRes.username }));
    } else {
      dispatch(
        setLoginErrors({
          isWrong: true,
          wrongValue: 'Incorrect password',
        })
      );
    }
  };

  return (
    <form className={s.form} onSubmit={letEntryUser}>
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
