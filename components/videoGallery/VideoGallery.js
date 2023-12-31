"use client";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./videoGallery.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoGalleryItem from "./VideoGalleryItem";
import VideoGalleryCard from "./VideoGalleryCard";
import { useGalleryContext } from "@/context/GalleryContext";
import { useModeContext } from "@/context/ModeContext";

const VideoGallery = () => {
  const { mode } = useModeContext();
  const { videoGallery } = useGalleryContext();
  const links = [{ id: 1, title: "Video Galeri", link: "/video-galeri" }];

  const modeStatus = mode === "dark";

  const settings = {
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: 0,
    arrows: false,
    focusOnSelect: true,
    slideToShow: 1,
    slideToScroll: 1,
    touchMove: true,
    dotsClass: "slick-dots",
    appendDots: (dots) => (
      <>
        <ul className="dots-ul">{dots}</ul>
      </>
    ),
  };

  return (
    <div className="videoGallerySlider">
      <Breadcrumb links={links} />
      {/* <div>{videoGalleryList}</div> */}
      <span className={`page-title ${modeStatus ? "dark" : ""}`}>
        Video Galeri
      </span>
      <div className="videoGallerySlider-slideWrapper">
        <Slider
          {...settings}
          className="videoGallerySlider-slideWrapper-slides"
        >
          {videoGallery.map((item, idx) => {
            return <VideoGalleryItem item={item} key={idx} />;
          })}
        </Slider>
      </div>
      <span className={`list-all ${modeStatus ? "dark" : ""}`}>Tümü</span>
      <div className="videoGallerySlider-list">
        {videoGallery.map((item, idx) => {
          return <VideoGalleryCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default VideoGallery;
