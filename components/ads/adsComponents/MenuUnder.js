"use client";
import React from "react";
import { useAdsContext } from "@/context/AdsContext";
import Link from "next/link";
import MenuUnderSkeleton from "./MenuUnderSkeleton";

const MenuUnderAds = () => {
  const { adsList, loading, handleReadIncrementAds } = useAdsContext();

  const relatedAds = adsList?.filter((i) => i.location.includes("-Slider altı-970x250") && i.active);

  const width = relatedAds[0]?.en;
  const height = relatedAds[0]?.boy;
  const url = relatedAds[0]?.url;
  const image = relatedAds[0]?.image;
  const id = relatedAds[0]?.id;

  const style = {
    objectFit: "contain",
    margin: "2rem auto",
  };

//  console.log(relatedAds);
  
  if (loading) return <MenuUnderSkeleton width={width} height={height} />
  
  return (
    <>
    {relatedAds.length > 0 && (
    <Link
      className="ads-extended"
      href={url}
      target="_blank"
      onClick={() => handleReadIncrementAds(id)}
    >
      <img src={image} alt={url} width={width} height={height} style={style} />
    </Link>
    )}
    </>
  );
};

export default MenuUnderAds;
