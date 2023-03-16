import { useDispatch, useSelector } from 'react-redux';

import { correctAuthorization } from '../store/authorizationSlice';
import { setLogInErrors } from '../store/authorizationSlice';
import { useSearchGoal } from './useSearchGoal';

export const useSignIn = (usernameOrEmail, password) => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);
  const { resetSearchGoal } = useSearchGoal();

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

    if (!testRes) {
      dispatch(
        setLogInErrors({
          isWrong: true,
          wrongValue: 'There is no such username or email',
        })
      );
    } else if (testRes.password === password) {
      dispatch(correctAuthorization(testRes.username));
      resetSearchGoal();
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
