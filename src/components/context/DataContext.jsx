import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
        axios.get("/data.json")
       .then((response) => { setData(response.data.en);
        setLoading(false)
       })
       .catch ((err) => { setError(err)
        setError(err);
        setLoading(false)
    console.log(err) })
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
