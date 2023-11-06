import React from "react";
import "./categoryNewsTitle.scss";

const CategoryNewsTitle = ({ title, modeStatus }) => {
  return (
    <h3 className={`most-read-news-title ${modeStatus ? "dark" : ""}`}>
      { title }
      <span className={modeStatus ? "dark" : ""}> Haberler </span>
    </h3>
  );
};

export default CategoryNewsTitle;
