export const setLocStorageMiddleware = (store) => (next) => (action) => {
  console.log('action.type', action.type);
  console.log('store', store);

  if (
    action.type === 'authorized/logIn' ||
    action.type === 'authorized/logOut'
  ) {
    localStorage.setItem('currentUser', JSON.stringify(action.payload));
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

  return next(action);
};
