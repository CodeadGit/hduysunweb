import React from "react";
import "./singleVideo.scss";
import { handleShort } from "@/context/utils";
import Link from "next/link";

const SingleVideo = ({ mode, item = {} }) => {
  const { headImg, description, author, eng, id } = item;

  return (
    <Link
      target="_blank"
      className="most-reads-single-video"
      href={`/video-galeri/${item.eng}-${item.id}`}
    >
      <div className="most-reads-single-video-pic">
        <img src={headImg} alt="google-news" />
      </div>
      <div className="most-reads-single-video-content">
        <p className={`content-author ${mode ? "dark" : ""}`}>
          YAZAR: {author}
        </p>
        <p className={`content-news ${mode ? "dark" : ""}`}>
          {" "}
          {handleShort(description, 9)}{" "}
        </p>
        {/* <p className={`content-news-res ${mode ? "dark" : ""}`}>
          {" "}
          {handleShort(description, 9)}{" "}
        </p> */}
      </div>
    </Link>
  );
};

export default SingleVideo;
