import React from "react";
import "./newsTitle.scss";
import { useThemeContext } from "@/context/ThemeContext";

const NewsTitle = ({ modeStatus, title }) => {

  const { fontDec, fontInc } = useThemeContext;

  return (
    <div className="newss-container-content-title">
      {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
       <h1 style={{fontSize: `${fontDec}px`}} className={modeStatus ? "dark" : ""}> {title} </h1> 
    </div>
  );
};

export default NewsTitle;
