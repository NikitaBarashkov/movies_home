import { useDispatch, useSelector } from 'react-redux';

import { logIn } from '../store/authorizationSlice';
import { setLogInErrors, setLogUpErrors } from '../store/authorizationSlice';

export const useSignIn = (usernameOrEmail, password) => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);

  const checkUser = () => {
    return users.find((user) => {
      return (
        user.username === usernameOrEmail || user.email === usernameOrEmail
      );
    });
  };

  return (e) => {
    e.preventDefault();
    const testRes = checkUser();

    const withoutErrors = {
      isWrong: false,
      wrongValue: null,
    };

    if (!testRes) {
      dispatch(
        setLogInErrors({
          isWrong: true,
          wrongValue: 'There is no such username or email',
        })
      );
    } else if (testRes.password === password) {
      dispatch(logIn({ isAuth: true, user: testRes.username }));
      dispatch(setLogInErrors(withoutErrors));
      dispatch(setLogUpErrors(withoutErrors));
    } else {
      dispatch(
        setLogInErrors({
          isWrong: true,
          wrongValue: 'Incorrect password',
        })
      );
    }
  };
};
