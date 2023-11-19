"use client";
import React from "react";
import { useAdsContext } from "@/context/AdsContext";
import Link from "next/link";

const PageSkinLeft = () => {

  const { adsList, loading, handleReadIncrementAds } = useAdsContext();

  const relatedAds = adsList.filter((i) => i.location.includes("Sol pageskin") && i.active);

 // console.log(relatedAds);

  const style = {
    display: "flex",
    flexDirection: "column",
    width:"100%",
    gap: "0.5rem",
  };

  if (loading) {
    return null;
  };

  return (
    <div style={style}>
      {relatedAds.map((i,idx) => {
        return <SingleLeftAds key={idx} item={i} handleReadIncrementAds={handleReadIncrementAds} />
      })}
    </div>
  );
};

export default PageSkinLeft;

function SingleLeftAds({item, handleReadIncrementAds}) {

  const { image, url, boy, en, id} = item;

  return (
    <Link href={url ||"/"} target="_blank" onClick={() => handleReadIncrementAds(id)}>
      <img
        src={image}
        alt=""
        width={en}
        height={boy}
        style={{ objectFit: "contain", width: "100%" }}
      />
    </Link>
  );
};
