import React from "react";
import Link from "next/link";
import "./cardItem.scss";
import { handleShort } from "@/context/utils";
import moment from "moment";
import { categoryConvertorFunc } from "@/context/utils";
const CardItem = ({ item, modeStatus }) => {
  const { image, title, eng, id, category, datePublished, tags } = item;

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);
 
  return (
    <div className={`card ${modeStatus ? "dark" : ""}`}>
      <Link
        href={`/${category}/${eng}-${id}`}
        className="card-wrapper"
        target="_blank"
      >
        <img src={image} alt={title} className="image" />
      </Link>   
      <Link
        href={`/${category}/${eng}-${id}`}
        className="content"
        target="_blank"
      >
        <div className="content-top">
          <div className="content-top-left">
            <span className={`disc ${modeStatus ? "dark" : ""}`}></span>
            <span className={`content-top-left-category ${modeStatus ? "dark" : ""}`}>
              {categoryConvertorFunc(category)}
            </span>
          </div>
          <div className="content-top-right">
            <span className={`content-top-right-time ${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
          </div>
        </div>
        <div className="content-bottom">
          <p className={`title ${modeStatus ? "dark" : ""}`}>
            {handleShort(title, 7)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
