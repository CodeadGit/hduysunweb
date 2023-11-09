import React from "react";
import Image from "next/image";
import most1 from "../homePage/assets/most1.png";
import { useAdsContext } from "@/context/AdsContext";
import "./adsImage.scss";

const AdsImage = () => {

  const { adsList} = useAdsContext();

  const relatedAds = adsList.filter(
    (i) => i.location.includes("Haber arası3") && i.active
  );

  return (
    <div className="most">
      {relatedAds.map((i) => (
        <img
          className="most-img"
          src={i.image}
          alt=""
          width={i.en}
          height={i.boy}
          style={{ objectFit: "contain", width: "100%" }}
        />
      ))}
    </div>
  );
};

export default AdsImage;
