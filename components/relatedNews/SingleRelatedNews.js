import React from "react";
import "./singleRelated.scss";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";
import { handleShort } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";
import { useCategoriesContext } from "@/context/CategoriesContext";
const SingleRelatedNews = ({ item = {}, mode }) => {
  
  const { categoryConvertor } = useCategoriesContext();

  const { image, title, read, datePublished, category, eng, id } = item;
  const publishedTime = moment(datePublished?.seconds * 1000).format(
    "DD.MM.YYYY"
    // "DD.MM.YYYY - HH:mm"
  );

  const { handleReadIncrement } = useThemeContext();

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
      onClick={() => handleReadIncrement(category, id)}
      className="related-news-single"
    //  target="_blank"
    >
      <img src={image} alt="asd" className="single-img-wrapper" />
        <div className={`related-news-single-comments ${mode ? "dark" : ""}`}>
          <p> {publishedTime} </p>
          {/* <p>{categoryConvertor[category]}</p> */}
          {/* <div className="view-number">
            <AiFillEye />
            <span>{read}</span>
          </div> */}
        </div>
        <p className={`related-news-single-content ${mode ? "dark" : ""}`}>
          {handleShort(title,10)}
        </p>
    </Link>
  );
};

export default SingleRelatedNews;
