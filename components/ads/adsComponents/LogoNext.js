"use client";
import React from "react";
import { useAdsContext } from "@/context/AdsContext";
import Link from "next/link";

const LogoNext = () => {

  const { adsList, loading, handleReadIncrementAds } = useAdsContext();

  const relatedAds = adsList?.filter((i) => i.location.includes("Logo yanı"));

  const width = relatedAds[0]?.en;
  const height = relatedAds[0]?.boy;
  const url = relatedAds[0]?.url;
  const image = relatedAds[0]?.image;
  const id = relatedAds[0]?.id;

//  console.log(width, height,url, image, id);
//  console.log(relatedAds)

  const style = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  
  const y = {
    width: `${width}px`,
    height: `${height}px`,
    margin: "0 auto",
    display: "block",
    marginTop: "0.5rem",
  };

  if (loading) return null;

  return (
    <Link 
    className="ads-extended"
    href={url || "/"} target="_blank" onClick={() => handleReadIncrementAds(id)} style={y}>
      <img
        src={image}
        alt={url}
        style={style}
      />
    </Link>
  );
};

export default LogoNext;
