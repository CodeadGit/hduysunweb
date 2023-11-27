import React from "react";
import "./singleSliderItem.scss";
import { categoryConvertor, handleShort } from "@/context/utils";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";

const SingleSliderItem = ({ category, image, title, eng, id, mode,datePublished }) => {

  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
      className="category-headlines-slider-single"
      //target="_blank"
      >
        <img src={image} alt={title} className="slider-single-img"/>
        <div className="slider-content-top">
          <div className="slider-content-top-left">
          <span className={`disc ${modeStatus ? "dark" : ""}`}></span>
        <div className={`category ${mode ? "dark" : ""}`}>{categoryConvertor[category]}</div>
            </div>
            <div className="slider-content-top-right">
              <span className="right-date">{formattedDate}</span>
            </div>
        </div>
        <div>
        <p className={`slide-content ${mode ? "dark" : ""}`}>{handleShort(title, 9)}</p>
        </div>
      </Link>
  );
};

export default SingleSliderItem;
