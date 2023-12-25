"use client";
import dynamic from "next/dynamic";
//import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./videoGalleryDetail.scss";
//import ReactPlayer from "react-player";
//import SimiliarVideos from "./SimiliarVideos/SimiliarVideos";
//import VideoGalleryDetailVideo from "./VideoGalleryDetailVideo/VideoGalleryDetailVideo";
import { useModeContext } from "@/context/ModeContext";

const VideoGalleryDetailVideo = dynamic(
  () => import("./VideoGalleryDetailVideo/VideoGalleryDetailVideo"),
  { ssr: false }
);
const SimiliarVideos = dynamic(
  () => import("/SimiliarVideos/SimiliarVideos"),
  { ssr: false }
);
const Breadcrumb = dynamic(
  () => import("../breadcrumb/Breadcrumb"),
  { ssr: false }
);
const ReactPlayer = dynamic(
  () => import("react-player"),
  { ssr: false }
);

const VideoGalleryDetail = ({ filteredVideo, titleArray }) => {

  const { mode } = useModeContext();

  const videoInfo = filteredVideo.map((item,idx) => {
    return (
      <>
        <VideoGalleryDetailVideo mode={mode} key={idx} item={item} />
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
      <span className={`title ${mode}`}>VİDEO GALERİ</span>
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
