import React from "react";
import "./homeCategoryItem.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
const HomeCategoryItem = ({ item, modeStatus }) => {

  const { title, image, category, eng, id, datePublished } = item;
  const { handleReadIncrement} = useThemeContext();

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link href={`/${category}/${eng}-${id}`} 
    target="_blank" 
    className={`homeCategoryCard ${modeStatus ? "dark" : ""}`} onClick={() => handleReadIncrement(category, id)}>
      <div className="homeCategoryCard-top">
        <div >
          <img src={image} alt={title} className="homeCategoryCard-top-img" />
        </div>
      </div>
      <div className="homeCategoryCard-bottom">
        <div
          className={`homeCategoryCard-bottom-title ${modeStatus ? "dark" : ""}`}
        >
             {String(title).length>51?`${String(title).substring(0,50)}...`:title}
        </div>
        <div
          className={`homeCategoryCard-bottom-line ${modeStatus ? "dark" : ""}`}
        ></div>
        <div className="homeCategoryCard-bottom-date">
          <span className={`single-date-title ${modeStatus ? "dark" : ""}`}>Yayınlanma T.</span>
          <span className={`single-date ${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default HomeCategoryItem;


