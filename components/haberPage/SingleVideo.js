import React from "react";
import "./singleVideo.scss";
import { handleShort } from "@/context/utils";

const SingleVideo = ({ mode, item = {} }) => {

  const { headImg, description, author} = item;

  return (
    <div className="most-reads-single-video">
      <div className="most-reads-single-video-pic">
        <img src={headImg} alt="google-news" />
      </div>
      <div className="most-reads-single-video-content">
        <p className={`content-news ${mode ? "dark" : ""}`}> {handleShort(description,10)} </p>
        <p className={`content-author ${mode ? "dark" : ""}`}>YAZAR: {author}</p>
      </div>
    </div>
  );
};

export default SingleVideo;