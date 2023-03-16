export const setLocStorageMiddleware = (store) => (next) => (action) => {
  if (
    action.type === 'authorized/correctAuthorization' ||
    action.type === 'authorized/logOut'
  ) {
    const result = next(action);
    const updateStore = store.getState();

    localStorage.setItem(
      'currentUser',
      JSON.stringify(updateStore.authorization.currentUser)
    );
    return result;
  }

  if (action.type === 'users/addUser') {
    const result = next(action);
    const updateStore = store.getState();

    localStorage.setItem('users', JSON.stringify(updateStore.users.users));

    return result;
  }

  if (action.type === 'history/addOnHistory') {
    const result = next(action);
    const updateStore = store.getState();

    localStorage.setItem(
      'history',
      JSON.stringify(updateStore.history.history)
    );

    return result;
  }

  if (
    action.type === 'favorite/addOnFavorite' ||
    action.type === 'favorite/removeFromFavorite'
  ) {
    const result = next(action);
    const updateStore = store.getState();

    localStorage.setItem(
      'favorite',
      JSON.stringify(updateStore.favorite.favorite)
    );

    return result;
  }

  return next(action);
};
