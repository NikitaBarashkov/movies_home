import { useDispatch } from 'react-redux';

import { initStore } from '../store/initStoreSlice';

export const useInitApp = () => {
  const dispatch = useDispatch();
  dispatch(initStore());
};
