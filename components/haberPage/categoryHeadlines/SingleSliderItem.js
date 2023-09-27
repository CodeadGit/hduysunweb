import React from "react";
import "./singleSliderItem.scss";
import { categoryConvertor, handleShort } from "@/context/utils";
import Link from "next/link";

const SingleSliderItem = ({ category, image, title, eng, id, mode }) => {

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
      className="category-headlines-slider-single"
      target="_blank">
        <img src={image} alt={title} />
        <h5 className={mode ? "dark" : ""}>{categoryConvertor[category]}</h5>
        <p className={`slide-content ${mode ? "dark" : ""}`}>{handleShort(title, 6)}</p>
      </Link>
  );
};

export default SingleSliderItem;
