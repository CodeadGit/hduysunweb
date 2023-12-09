"use client";
import { createContext, use, useContext } from "react";
import { useState, useEffect } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
 // const savedTheme = typeof window!=="undefined"&& localStorage?.getItem("themeMode") || "";

 // const [mode, setMode] = useState(savedTheme);

  // useEffect(() => {
  //    const savedTheme = typeof window 
  //    ? localStorage?.getItem("themeMode") || ""
  //    : "";
  //    setMode(savedTheme)

  //  },[mode])
  //const toggle = () => {
   // setMode((prev) => (prev === "dark" ? "" : "dark"));
  //};
  // useEffect(() => {
  //   typeof window !== 'undefined' && localStorage?.setItem("themeMode", mode);
  // }, [mode]);

  const [mode, setMode] = useState("");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "" : "dark"));
  };
   
  const values = {
    mode,
    toggle,
  };

  return <ModeContext.Provider value={values}>{children}</ModeContext.Provider>;
};
export const useModeContext = () => useContext(ModeContext);
