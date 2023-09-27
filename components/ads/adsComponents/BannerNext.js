"use client";
import React from "react";
import { useAdsContext } from "@/context/AdsContext";
import Link from "next/link";

const BannerNext = () => {
  const { adsList, loading, handleReadIncrementAds } = useAdsContext();

  const relatedAds = adsList?.filter((i) => i.location.includes("Manşet yanı"));

  // const width = relatedAds[0]?.en;
  // const height = relatedAds[0]?.boy;
  const url = relatedAds[0]?.url;
  const image = relatedAds[0]?.image;
  const id = relatedAds[0]?.id;

  //   console.log(width, height);

  const containerStyle = {
    width: "272px",
    display: "block",
    // border: "1px solid red",
  };

  const Imagestyle = {
    objectFit: "cover",
    width: "100%",
    aspectRatio: "3/2",
    display: "inline-block",
    // border: "1px solid green",
  };

  if (loading) return null;

  return (
    <div>
      <Link
        href={url || "/"}
        target="_blank"
        onClick={() => handleReadIncrementAds(id)}
        style={containerStyle}
      >
        <img src={image} alt={url} style={Imagestyle}/>
      </Link>
    </div>
  );
};

export default BannerNext;
