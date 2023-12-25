"use client";
import React from "react";
import dynamic from "next/dynamic";
//import PageSkinRight from "./ads/adsComponents/PageSkinRight";
//import PageSkinLeft from "./ads/adsComponents/PageSkinLeft";
import { useThemeContext } from "@/context/ThemeContext";
import { useAdsContext } from "@/context/AdsContext";
import { useModeContext } from "@/context/ModeContext";

const PageSkinRight = dynamic(
  () => import("./ads/adsComponents/PageSkinRight"),
  { ssr: false }
);
const PageSkinLeft = dynamic(
  () => import("./ads/adsComponents/PageSkinLeft"),
  { ssr: false }
);

const BaseWrapper = ({ children, params }) => {

  const { showAds } = useThemeContext();
  const { mode } = useModeContext();
  const { storyModall, advertPage } = useAdsContext();
  const modeStatus = mode === "dark";

  const plainStyle = {
    maxWidth: "1200px",
  };

  const storyStyle = {
    maxWidth: "100%",
  };

  const notShowAds = !advertPage || storyModall || !showAds;

  return (
    <div className={`wholePageWrapper ${mode}`}>
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
