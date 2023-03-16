import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export const PrivateRoute = () => {
  const { isAuth } = useUser();

  if (!isAuth) {
    return <Navigate to='/signin' />;
  }

  return <Outlet />;
};
