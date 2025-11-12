import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState({});
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Context.Provider
      value={{
        selectedProject,
        setSelectedProject,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
