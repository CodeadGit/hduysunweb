import React from "react";
import "./videoGallery.scss";
import Image from "next/image";
import video2 from "../homePage/assets/video2.png";
import { AiFillEye } from "react-icons/ai";
import SingleVideo from "./SingleVideo";
import { useThemeContext } from "@/context/ThemeContext";

const VideoGallery = ({ modeStatus, videoNewsList }) => {
  const { videoGallery } = useThemeContext();

  const options = { year: "numeric", month: "numeric", day: "2-digit" };

  console.log(videoGallery)

  return (
    <div className="video-gallery">
      <h3 className={`video-gallery-title ${modeStatus ? "dark" : ""}`}>
        Video <span className={modeStatus ? "dark" : ""}> Galeri </span>
      </h3>
      {videoGallery?.slice(0, 1).map((item) => {
        return (
          <div>
            <div className="video-live">
              <Image src={item.headImg} alt="google-news" fill />
            </div>
            <h4
              className={`video-gallery-news-header ${
                modeStatus ? "dark" : ""
              }`}
            >
              {item.title}
            </h4>
            <div className={`authors-info ${modeStatus ? "dark" : ""}`}>
              {/* <p>YAZAR LEE MORAN</p> */}
              <div className={`circle ${modeStatus ? "dark" : ""}`}></div>
              <p>
                {new Date(item.datePublished.seconds * 1000).toLocaleDateString(
                  "tr-TR",
                  options
                )}
              </p>
              <AiFillEye />
              <span>{item.read}</span>
            </div>
          </div>
        );
      })}
      <div className="video-gallery-news-container">
        {videoGallery?.slice(0, 3).map((item) => {
          return <SingleVideo key={item.id} mode={modeStatus} item={item} />;
        })}
      </div>
    </div>
  );
};

export default VideoGallery;
