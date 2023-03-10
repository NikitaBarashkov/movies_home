import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RedirectToMain = ({ children }) => {
  const isAuth = useSelector((store) => store.authorization.currentUser.isAuth);

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return children;
};
