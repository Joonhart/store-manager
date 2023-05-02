import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode)
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

const updateDarkMode = (darkMode) => {
    darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
}

export const useDarkMode = () => useContext(DarkModeContext);
