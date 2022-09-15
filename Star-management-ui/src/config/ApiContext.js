import React, { createContext, useContext } from "react";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

  const isAdmin = true;
  const contextValue = {
    isAdmin
  };

  return (
      <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};