import React from "react";
import "./singleRelated.scss";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

const SingleRelatedNews = ({ item = {}, mode }) => {
  const { image, title, read, datePublished, category, eng, id } = item;
  const publishedTime = moment(datePublished?.seconds * 1000).format(
    "DD.MM.YYYY"
    // "DD.MM.YYYY - HH:mm"
  );

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
      className="related-news-single"
      target="_blank">
      <img src={image} alt="asd" className="single-img-wrapper" />
        <div className={`related-news-single-comments ${mode ? "dark" : ""}`}>
          <p> {publishedTime} </p>
          <div className="view-number">
            <AiFillEye />
            <span>{read}</span>
          </div>
        </div>
        <p className={`related-news-single-content ${mode ? "dark" : ""}`}>
          {title}
        </p>
    </Link>
  );
};

export default SingleRelatedNews;
