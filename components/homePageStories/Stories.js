"use client";
import React from "react";
import "./stories.scss";

import { useThemeContext } from "@/context/ThemeContext";
import SingleStory from "./SingleStory";
import { useAdsContext } from "@/context/AdsContext";
import StoriesSkeleton from "./StoriesSkeleton";
// import { categories } from "@/context/utils";

const Stories = () => {

  const { navigateStory, mode } = useThemeContext();

  const { storiesList, storiesLoading, combineStories, handleStories } = useAdsContext();

  const uniqueCategories = [...new Set(storiesList.map((i) => i.category))];

  const singleStories = storiesList.filter((i) => {
    
    if (uniqueCategories.includes(i.category)) {
      const idx = uniqueCategories.indexOf(i.category);
      uniqueCategories.splice(idx,1);
      return i;
    }
  });

  // console.log(x)

  // console.log(uniqueCategories);

  if (storiesLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StoriesSkeleton />
      </div>
    );
  };

  return (
    <div className="storiesContainer">
      {singleStories?.map((item, idx) => {
        // console.log(item)
        return (
          <SingleStory
            key={idx}
            item={item}
            mode={mode}
            handleStories={handleStories}
          />
        );
      })}
    </div>
  );
};

export default Stories;
