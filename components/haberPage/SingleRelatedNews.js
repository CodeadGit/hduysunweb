import React from "react";
import "./singleRelatedNews.scss";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import { handleShort } from "@/context/utils";

const SingleRelatedNews = ({ image, content, time, view, mode }) => {
  return (
    <div className="related-news-single">
      <div className="single-img-wrapper">
        <Image src={image} alt="google-news" fill />
      </div>
      <div className={`related-news-single-comments ${mode ? "dark" : ""}`}>
        <p> {time} </p>
        <div className="view-number">
          <AiFillEye />
          <span>{view}</span>
        </div>
      </div>
      <p className={`related-news-single-content ${mode ? "dark" : ""}`}>
       {content}
      </p>
    </div>
  );
};

export default SingleRelatedNews;
