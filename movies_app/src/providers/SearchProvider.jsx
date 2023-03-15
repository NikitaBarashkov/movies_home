import React, { useState } from 'react';

export const ContextSearchParams = React.createContext();

export const SearchProvider = ({ children }) => {
  const [searchGoal, setSearchGoal] = useState({
    titleMovie: '',
    typeMovie: 'both',
  });

  const changeTitleSearchGoal = (e) => {
    setSearchGoal({
      ...searchGoal,
      titleMovie: e.target.value,
    });
  };

  const changeTypeSearchGoal = (e) => {
    setSearchGoal({
      ...searchGoal,
      typeMovie: e.target.id,
    });
  };

  const changeSearchGoal = (title, type) => {
    setSearchGoal({ titleMovie: title, typeMovie: type });
  };

  return (
    <ContextSearchParams.Provider
      value={{
        searchGoal,
        changeTitleSearchGoal,
        changeTypeSearchGoal,
        changeSearchGoal,
      }}>
      {children}
    </ContextSearchParams.Provider>
  );
};
