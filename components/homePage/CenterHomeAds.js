import React from "react";
import Image from "next/image";
import center from "./assets/center.png";
import "./center.scss";

const CenterHomeAds = () => {

  return (
    <div className="imgContainer">
      <Image src={center} alt="center-ad"/>
    </div>
  );
};

export default CenterHomeAds;
