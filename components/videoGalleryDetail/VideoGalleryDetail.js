"use client";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./videoGalleryDetail.scss";
import ReactPlayer from "react-player";
import SimiliarVideos from "./SimiliarVideos/SimiliarVideos";
import VideoGalleryDetailVideo from "./VideoGalleryDetailVideo/VideoGalleryDetailVideo";

const VideoGalleryDetail = ({ filteredVideo, titleArray }) => {

  const videoInfo = filteredVideo.map((item,idx) => {
    return (
      <>
        <VideoGalleryDetailVideo key={idx} item={item} />
      </>
    );
  });

  const links = [
    { id: 1, title: "Video Galeri", link: "/video-galeri" },
    { id: 2, title: titleArray, link: "/" },
  ];

  return (
    <div className="videoDetail">
      <Breadcrumb links={links} />
      <span className="title">VİDEO GALERİ</span>
      <div className="videoDetail-container">
        <div className="videoDetail-container-video">
          <div className="videoDetail-container-items-video">{videoInfo}</div>
        </div>
        <div className="videoDetail-container-similarVideos">
          <SimiliarVideos />
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryDetail;
