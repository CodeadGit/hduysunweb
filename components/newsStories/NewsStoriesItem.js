import React from "react";
import "./newsStoriesItem.scss";
import { useAdsContext } from "@/context/AdsContext";
import { categoryConvertor } from "@/context/utils";
import { PlayArrow } from "@mui/icons-material";

const NewsStoriesItem = ({ combineStories, modeStatus, item }) => {

  const { category: cat } = useAdsContext();

  const { category, time, media, image } = item;

  return (
    <div
      className={`story ${cat === category && "selected"} ${
        modeStatus && "dark"
      }`}
      onClick={() => combineStories(category)}
    >
      {image ? (
        <img src={media} alt={category} />
      ) : (
        <div className="video-wrapper">
          <video autoPlay={false} src={media}>
            {/* <source src={media} type="video/mp4" />
          Your browser does not support the video tag. */}
          </video>
          <PlayArrow className="inner-icon" />
        </div>
      )}
      <div className={`story-content ${modeStatus ? "dark" : ""}`}>
        <h3>{categoryConvertor[category]}</h3>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default NewsStoriesItem;
