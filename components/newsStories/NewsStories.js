"use client";
import dynamic from "next/dynamic";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import "./newsStories.scss";
//import StoryPage from "../story/StoryPage";
//import CloseIcon from "@mui/icons-material/Close";
//import NewsStoriesItem from "./NewsStoriesItem";
import { useAdsContext } from "@/context/AdsContext";
import { useModeContext } from "@/context/ModeContext";

const NewsStoriesItem = dynamic(() => import("./NewsStoriesItem"), {
  ssr: false,
});
const StoryPage = dynamic(() => import("../story/StoryPage"), { ssr: false });
const CloseIcon = dynamic(() => import("@mui/icons-material/Close"), {
  ssr: false,
});

const NewsStories = () => {
  const { mode } = useModeContext();
  const { storyList, combineStories, changeStoryModall, singleStories } =
    useAdsContext();
  const modeStatus = mode === "dark";

  return (
    <div className="main-fluid">
      <div className="cont">
        <div className="cats">
          <div className="cats-background">
            {singleStories.map((item, idx) => {
              return (
                <NewsStoriesItem
                  key={idx}
                  item={item}
                  combineStories={combineStories}
                  modeStatus={modeStatus}
                />
              );
            })}
          </div>
        </div>
        <div className="stors">
          <div className="close" onClick={changeStoryModall}>
            <CloseIcon className="icon-close" />
          </div>
          {/* <div className="icon-wrapper">
          <div className="icon prev" style={{ cursor: "pointer !important" }}>
            <KeyboardArrowLeftIcon className="icon-direction" />
          </div>
           <div className="icon next">
            <KeyboardArrowRightIcon className="icon-direction" />
          </div> 
          </div> */}
          <StoryPage stories={storyList} />
        </div>
      </div>
    </div>
  );
};

export default NewsStories;
