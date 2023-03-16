import React, {useState} from "react";

export const ContextTheme = React.createContext();

export const ThemeProvider = ({children}) => {
  const [isLight, changeTheme] = useState(false);

  const toggleTheme = () => changeTheme(!isLight);

  return (
    <ContextTheme.Provider value={{isLight, toggleTheme}}>
      {children}
    </ContextTheme.Provider>
  );
};