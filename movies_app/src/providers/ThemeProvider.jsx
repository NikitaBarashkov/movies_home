import React, {useState} from "react";

export const ContextTheme = React.createContext();

export const ThemeProvider = ({children}) => {
  const [isLigth, changeTheme] = useState(false);

  return (
    <ContextTheme.Provider value={{isLigth, changeTheme}}>
      {children}
    </ContextTheme.Provider>
  );
};