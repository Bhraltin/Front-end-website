import {createContext, useEffect, useState} from "react";

export const ThemeContext= createContext();


export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
   localStorage.getItem("theme", theme);
  
  }, []);

  const toggle = () => {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      {children}
      </ThemeContext.Provider>
  )
} 
