import { useContext } from "react";
import { ContextTheme } from "../providers/ThemeProvider";

export const useTheme = () => {
  const theme = useContext(ContextTheme);
  
  return theme;
} 
