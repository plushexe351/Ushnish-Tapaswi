import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <Context.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </Context.Provider>
  );
};
