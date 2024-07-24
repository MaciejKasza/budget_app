import React, { createContext, useState } from "react";

// Stworzenie kontekstu
export const AppContext = createContext();

// Provider kontekstu
export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};
