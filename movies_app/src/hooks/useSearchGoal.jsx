import { useState } from "react";

export const useSearchGoal = () => {
  const [searchGoal, setSearchGoal] = useState({
    titleMovie: '',
    typeMovie: 'both',
  });

  const changeTitleSearchGoal = (e) => {
    setSearchGoal({
      ...searchGoal,
      titleMovie: e.target.value,
    })
  };
  
  const changeTypeSearchGoal = (e) => {
    setSearchGoal({
      ...searchGoal,
      typeMovie: e.target.id
    })
  };

  return [
    searchGoal, 
    changeTitleSearchGoal, 
    changeTypeSearchGoal
  ];
};