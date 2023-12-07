"use client";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    try {
      const newDarkMode = theme === "dark" ? "light" : "dark";
      //       setMode((prev) => (prev === "dark" ? "light" : "dark"));
      // Store the dark mode state in localStorage
      localStorage.setItem("themeMode", JSON.stringify(mode));
    } catch (error) {
      console.error("Error toggling dark mode:", error);
    }
  };
  useEffect(() => {
    // Check if dark mode is stored in localStorage
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const values = {
    mode,
    toggle,
  };

  return <ModeContext.Provider value={values}>{children}</ModeContext.Provider>;
};
export const useModeContext = () => useContext(ModeContext);
