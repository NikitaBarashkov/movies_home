import { useDispatch, useSelector } from 'react-redux';

import { addUser } from '../store/usersSlice';
import { correctAuthorization } from '../store/authorizationSlice';
import { setLogUpErrors } from '../store/authorizationSlice';
import { useSearchGoal } from './useSearchGoal';

export const useSignUp = (username, email, password) => {
  const users = useSelector((store) => store.users.users);
  const dispatch = useDispatch();
  const { resetSearchGoal } = useSearchGoal();

  const isNotUnique = () => {
    return users.some(
      (user) => user.username === username || user.email === email
    );
  };

  return (e) => {
    e.preventDefault();

    if (users.length === 0 || !isNotUnique()) {
      dispatch(correctAuthorization(username));
      dispatch(
        addUser({
          username,
          email,
          password,
        })
      );
      resetSearchGoal();
    } else {
      dispatch(
        setLogUpErrors({
          isWrong: true,
          wrongValue: 'This name or email is already registered',
        })
      );
    }
  };
};
