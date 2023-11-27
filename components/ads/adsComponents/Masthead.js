"use client";
import React from "react";
import { useAdsContext } from "@/context/AdsContext";
import Link from "next/link";

const Masthead = () => {

  const { adsList, loading, handleReadIncrementAds } = useAdsContext();

  const relatedAds = adsList?.filter((i) => i.location.includes("Masthead") && i.active);

  const width = relatedAds[0]?.en;
  const height = relatedAds[0]?.boy;
  const url = relatedAds[0]?.url;
  const image = relatedAds[0]?.image;
  const id = relatedAds[0]?.id;

  const style = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  
  const y = {
    width: `${width}px`,
    height: `${height}px`,
    margin: "0.5rem auto 0",
    display: "block",
    // border: "1px solid red",
  };

  // console.log(relatedAds);

//   console.log(width, height,url, image, id);
//   console.log(relatedAds);

  if (loading) return null;

  return (
    <>
    { relatedAds.length > 0 && (
    <Link className="ads-extended" href={url} 
   // target="_blank" 
    onClick={() => handleReadIncrementAds(id)} style={y}>
      <img
        src={image}
        alt={url}
        width={width}
        height={height}
        style={style}
      />
    </Link>
    )}
    </>
  );
};

export default Masthead;
