import React from "react";
import "./singleVideo.scss";
import { handleShort, handleShortt } from "@/context/utils";
import Link from "next/link";

const SingleVideo = ({ mode, item = {} }) => {
  const { headImg, description, author, eng, id,title } = item;

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
          {title}
          {/* {handleShort(description, 9)} */}
        </p>
        <p className={`content-newsRes ${mode ? "dark" : ""}`}>
          {/* {handleShortt(title)} */}
          {title}
        </p>
      </div>
    </Link>
  );
};

export default SingleVideo;
