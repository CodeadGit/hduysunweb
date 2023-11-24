import React from "react";
import "./amblem.scss";
import { useFetchAssetsContext } from "@/context/FetchAssetsContext";

const Amblem = ( { modeStatus } ) => {

  const { images } = useFetchAssetsContext();

  return (
    <div className="amblem-container">
      <div className={`amblem-line ${modeStatus ? "dark" : ""}`}></div>
      <div className="amblem">
        <img src={images[1]} alt="herkes-duysun" fill />
      </div>
      <div className={`amblem-line ${modeStatus ? "dark" : ""}`}></div>
    </div>
  );
};

export default Amblem;
