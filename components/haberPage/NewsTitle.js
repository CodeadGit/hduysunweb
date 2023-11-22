import React from "react";
import "./newsTitle.scss";
import { useThemeContext } from "@/context/ThemeContext";

const NewsTitle = ({ modeStatus, title }) => {

  const { fontDec, fontInc } = useThemeContext;

  return (
    <div className="newss-container-content-title">
      {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
       <h1 style={{fontSize:"2rem",fontWeight:"600",color:"#333333"}} className={modeStatus ? "dark" : ""}> {title} </h1> 
    </div>
  );
};

export default NewsTitle;
