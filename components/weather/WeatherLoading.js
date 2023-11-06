import React from "react";
import "./weatherLoading.css";

const WeatherLoading = () => {
  return (
    <div className="loader">
      <div className="loader--dot"></div>
      <div className="loader--dot"></div>
      <div className="loader--dot"></div>
      <div className="loader--dot"></div>
      <div className="loader--dot"></div>
      <div className="loader--dot"></div>
      {/* <div className="loader--text"></div> */}
    </div>
  );
};

export default WeatherLoading;
