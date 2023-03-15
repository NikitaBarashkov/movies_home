import { useDispatch, useSelector } from 'react-redux';

import { addUser } from '../store/usersSlice';
import { logIn } from '../store/authorizationSlice';
import { setLogInErrors, setLogUpErrors } from '../store/authorizationSlice';

export const useSignUp = (username, email, password) => {
  const users = useSelector((store) => store.users.users);
  const dispatch = useDispatch();

  const isNotUnique = () => {
    return users.some(
      (user) => user.username === username || user.email === email
    );
  };

  return (e) => {
    e.preventDefault();

    const withoutErrors = {
      isWrong: false,
      wrongValue: null,
    };

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
      dispatch(setLogInErrors(withoutErrors));
      dispatch(setLogUpErrors(withoutErrors));
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
