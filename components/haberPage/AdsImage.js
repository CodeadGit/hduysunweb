import React from "react";
import Image from "next/image";
import most1 from "../homePage/assets/most1.png";
import "./adsImage.scss";

const AdsImage = () => {
  return (
    <div className="most">
      <Image src={most1} alt="google-news" fill />
    </div>
  );
};

export default AdsImage;
