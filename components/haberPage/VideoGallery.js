import React from "react";
import "./videoGallery.scss";
import Image from "next/image";
import video2 from "../homePage/assets/video2.png";
import { AiFillEye } from "react-icons/ai"
import SingleVideo from "./SingleVideo";

const VideoGallery = ({modeStatus, videoNewsList}) => {
    
  return (
    <div className="video-gallery">
        <h3 className={`video-gallery-title ${modeStatus ? "dark" : ""}`}>
          Video <span className={modeStatus ? "dark" : ""}> Galeri </span>
        </h3>
        <div className="video-live">
          <Image src={video2} alt="google-news" fill />
        </div>
        <h4 className={`video-gallery-news-header ${modeStatus ? "dark" : ""}`}>
          Apple confirmed a longtime conspiracy theory
        </h4>
        <div className={`authors-info ${modeStatus ? "dark" : ""}`}>
          <p>YAZAR LEE MORAN</p>
          <div className={`circle ${modeStatus ? "dark" : ""}`}></div>
          <p>DECEMBER 20, 2012</p>
          <AiFillEye />
          <span>14</span>
        </div>
      <div className="video-gallery-news-container">
        {videoNewsList?.slice(0, 3).map((item) => {
          return <SingleVideo key={item.id} mode={modeStatus} item={item} />
        })}
      </div>
    </div>
  );
};

export default VideoGallery;
