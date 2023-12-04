import React from "react";
import Link from "next/link";
import "./cardItem.scss";
import { handleShort } from "@/context/utils";
import moment from "moment";
import { categoryConvertorFunc } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";
const CardItem = ({ item, modeStatus }) => {
  const { image, title, eng, id, category, datePublished, tags } = item;
  const { handleReadIncrement } = useThemeContext();

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
     // target="_blank"
      className={`card ${modeStatus ? "dark" : ""}`}
      onClick={() => handleReadIncrement(category, id)}
    >
      <div className="card-wrapper">
        <img src={image} alt={title} className="image" />
      </div>
      <div className="content">
        <div className="content-top">
          <div className="content-top-left">
            <span className={`disc ${modeStatus ? "dark" : ""}`}></span>
            <span
              className={`content-top-left-category ${
                modeStatus ? "dark" : ""
              }`}
            >
              {categoryConvertorFunc(category)}
            </span>
          </div>
          <div className="content-top-right">
            <span
              className={`content-top-right-time ${modeStatus ? "dark" : ""}`}
            >
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="content-bottom">
          <p className={`content-bottom-title ${modeStatus ? "dark" : ""}`}>
            {handleShort(title, 6)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
