import React from "react";
import "./amblem.scss";
import Image from "next/image";
import amblem from "../homePage/assets/amblem.png";

const Amblem = ( { modeStatus } ) => {

  return (
    <div className="amblem-container">
      <div className={`amblem-line ${modeStatus ? "dark" : ""}`}></div>
      <div className="amblem">
        <Image src={amblem} alt="herkes-duysun" fill />
      </div>
      <div className={`amblem-line ${modeStatus ? "dark" : ""}`}></div>
    </div>
  );
};

export default Amblem;
