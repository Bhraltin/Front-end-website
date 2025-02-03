import {createContext, useEffect, useState} from "react";

export const ThemeContext= createContext();


export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
      </ThemeContext.Provider>
  )
} 
