import { logIn } from './authorizationSlice';
import { setHistory } from './historySlice';
import { setUsers } from './usersSlice';
import { setFavorite } from './favoriteSlice';

export const setStoreMiddleware = (store) => (next) => (action) => {
  if (action.type === 'init/initStore') {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    const history = JSON.parse(localStorage.getItem('history'));

    if (currentUser?.user) {
      store.dispatch(logIn(currentUser));
    }

    if (history?.length) {
      store.dispatch(setHistory(history));
    }

    if (users?.length) {
      store.dispatch(setUsers(users));
    }

    if (favorite?.length) {
      store.dispatch(setFavorite(favorite));
    }
  }

  return next(action);
};
