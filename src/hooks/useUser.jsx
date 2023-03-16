import { useSelector } from 'react-redux';

export const useUser = () => {
  return useSelector((store) => store.authorization.currentUser);
};
