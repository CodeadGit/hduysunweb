import React from "react";
import "./videoGallery.scss";
import Image from "next/image";
import video2 from "../homePage/assets/video2.png";
import { AiFillEye } from "react-icons/ai";
import SingleVideo from "./SingleVideo";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

// haber içi video galeri ilk büyük video galeri componenti
const VideoGallery = ({ modeStatus, videoNewsList }) => {
  const { videoGallery, handleReadIncrement } = useThemeContext();

  const options = { year: "numeric", month: "numeric", day: "2-digit" };

  return (
    <div className="video-gallery">
      <h3 className={`video-gallery-title ${modeStatus ? "dark" : ""}`}>
        Video <span className={modeStatus ? "dark" : ""}> Galeri </span>
      </h3>
      {videoGallery?.slice(0, 1).map((item,idx) => {
        return (
          <Link key={idx} target="_blank" href={`/video-galeri/${item.eng}-${item.id}`} onClick={() => handleReadIncrement(category, id)}>
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
          </Link>
        );
      })}
      <div className="video-gallery-news-container"> {/*alttaki 3 adet olan video galeri kartları*/}
        {videoGallery?.slice(1, 4).map((item,idx) => {
          return <SingleVideo key={idx} mode={modeStatus} item={item} />;
        })}
      </div>
    </div>
  );
};

export default VideoGallery;
