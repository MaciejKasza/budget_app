import { useEffect } from "react";
import { createContext, useState } from "react";

const THEME_KEY = "themeMode";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("light");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem(THEME_KEY, updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
