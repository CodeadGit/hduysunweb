import React from "react";
import "./newsTitle.scss";
import { useThemeContext } from "@/context/ThemeContext";

const NewsTitle = ({ title, modeStatus }) => {

  const { fontDec, fontInc,mode } = useThemeContext;

  return (
    <div className={`newss-container-content-title ${modeStatus ? "dark" : ""}`}>
      {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
       <h1 className={`title ${modeStatus ? "dark" : ""}`}> {title} </h1> 
    </div>
  );
};

export default NewsTitle;
