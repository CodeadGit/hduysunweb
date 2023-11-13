"use client";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import "./newsStories.scss";
import StoryPage from "../story/StoryPage";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import NewsStoriesItem from "./NewsStoriesItem";
import { useAdsContext } from "@/context/AdsContext";

const NewsStories = () => {
  const { mode } = useThemeContext();
  const { storyList, combineStories, changeStoryModall, singleStories } =
    useAdsContext();
  const modeStatus = mode === "dark";

  return (
    <div className="main-fluid">
      <div className="cont">
        <div className="cats">
          <div className="cats-background">
          {singleStories.map((item) => {
            return (
              <NewsStoriesItem
                key={item.id}
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
          <div className="icon prev" style={{ cursor: "pointer !important" }}>
            <KeyboardArrowLeftIcon className="icon-direction" />
          </div>
          <div className="icon next">
            <KeyboardArrowRightIcon className="icon-direction" />
          </div>
          <StoryPage stories={storyList} />
        </div>
      </div>
    </div>
  );
};

export default NewsStories;
