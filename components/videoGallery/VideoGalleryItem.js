"use client";
import "./videoGalleryItem.scss";
import Link from "next/link";
import playIcon from "./videoGallerysvg/play-icon.svg";
import { PiPlayCircleLight } from "react-icons/pi";
import Image from "next/image";

const VideoGalleryItem = ({ item }) => {
  const { category, datePublished, description, headImg, eng, id, title, url } =
    item;

  return (
    <Link
      href={`video-galeri/${eng}-${id}`}
     // target="_blank"
      className="videoGalleryItem"
    >
      <Image
      width="0" height="0" sizes="100vw"
        src={headImg}
        alt="videogaleri-image"
        className="videoGalleryItem-img"
      />
      <PiPlayCircleLight className="icon" />
    </Link>
  );
};

export default VideoGalleryItem;
