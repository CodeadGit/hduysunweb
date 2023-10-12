"use client";
import { useThemeContext } from "@/context/ThemeContext";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./videoGallery.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoGalleryCard from "./VideoGalleryCard";

const VideoGallery = () => {
  const { videoGallery } = useThemeContext();

  const links = [{ id: 1, title: "Video Galeri", link: "/video-galeri" }];

  const settings = {
    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: 0,
    arrows: true,
    focusOnSelect: true,
    slideToShow: 1,
    slideToScroll: 1,
    nextArrow: (
      <button type="button" class="slick-next">
        Next
      </button>
    ),
    prevArrow: (
      <button type="button" class="slick-prev">
        Previous
      </button>
    ),
    touchMovie: true,
  };

  console.log(videoGallery)

  // const videoGalleryList = videoGallery.map((item) => {
  //   return <VideoGalleryCard key={item.id} item={item}/>
  // })

  return (
    <div className="videoGallerySlider">
      <Breadcrumb links={links} />
      {/* <div>{videoGalleryList}</div> */}
      <div className="videoGallerySlider-wrapper">
        <Slider {...settings} className="videoGallerySlider-wrapper-slides">
          {videoGallery.map((item) => {
            return (
              <VideoGalleryCard
               item={item}
              />
            )
          })}
        </Slider>
      </div>
    </div>
  );
};

export default VideoGallery;
