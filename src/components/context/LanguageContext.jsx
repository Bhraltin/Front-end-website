import { createContext, useEffect, useState } from "react";


export const LanguageContext = createContext();

export default function LanguageContextProvider({children}) {
    const [language, setLanguage] = useState("en");

     useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        setLanguage(savedLanguage);
      }, []);


    const changeLanguage = () => {
        setLanguage(!language)
    }
    return (
        <LanguageContext.Provider value={{language, changeLanguage}}> 
        {children}
        </LanguageContext.Provider>
        
    )

}

 
 