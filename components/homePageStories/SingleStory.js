import React from "react";
import "./singleStory.scss";
import { useCategoriesContext } from "@/context/CategoriesContext";
const SingleStory = ({ mode, item, handleStories }) => {
  const modeStatus = mode === "dark";
  const { image, category, media } = item;
  const { categoryConvertor} = useCategoriesContext()

  return (
    <div className="singleStory" onClick={() => handleStories(category)}>
      {image ? (
        <div className={`img ${modeStatus ? "dark" : ""}`}>
          {media && <img src={media || ""} alt={category} />}
        </div>
      ) : (
        <div className={`img ${modeStatus ? "dark" : ""}`}>
          <video src={media} alt={category} />
        </div>
      )}
      <p className={`title ${modeStatus ? "dark" : ""}`}>{categoryConvertor[category]}</p>
    </div>
  );
};

export default SingleStory;
