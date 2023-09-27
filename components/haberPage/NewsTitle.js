import React from "react";
import "./newsTitle.scss";

const NewsTitle = ({ modeStatus, title }) => {
  return (
    <div className="newss-container-content-title">
      {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
      <h1 className={modeStatus ? "dark" : ""}> {title} </h1>
    </div>
  );
};

export default NewsTitle;
