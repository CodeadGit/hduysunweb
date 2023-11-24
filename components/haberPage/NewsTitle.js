import React from "react";
import "./newsTitle.scss";
import { useThemeContext } from "@/context/ThemeContext";

const NewsTitle = ({ title }) => {

  const { fontDec, fontInc,mode } = useThemeContext;
  const modeStatus = mode === "dark";

  return (
    <div className="newss-container-content-title">
      {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
       <h1 className={`${modeStatus ? "dark" : ""}`}> {title} </h1> 
    </div>
  );
};

export default NewsTitle;
