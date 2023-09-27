"use client";
import React from "react";
import PageSkinRight from "./ads/adsComponents/PageSkinRight";
import PageSkinLeft from "./ads/adsComponents/PageSkinLeft";
import { useThemeContext } from "@/context/ThemeContext";
import { useAdsContext } from "@/context/AdsContext";

const BaseWrapper = ({ children }) => {

  const { mode, showAds } = useThemeContext();
  const { storyModall } = useAdsContext();
  const modeStatus = mode === "dark";

  // console.log(storyModall)

  const plainStyle = {
    maxWidth: "1200px",
  };

  const storyStyle = {
    maxWidth: "100%",
  };

  const notShowAds = storyModall || !showAds;

  return (
    <div className={`wholePageWrapper ${modeStatus ? "dark" : ""}`}>
      <div className={`leftPageWrapper ${notShowAds ? "none" : ""}`}>
        <PageSkinLeft />
      </div>
      <div className="centerPageWrapper" style={storyModall ? storyStyle : plainStyle}> {children} </div>
      <div className={`rightPageWrapper ${notShowAds ? "none" : ""}`}>
        <PageSkinRight />
      </div>
    </div>
  );
};

export default BaseWrapper;
