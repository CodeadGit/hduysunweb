import React from "react";
import "./surMansetSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useThemeContext } from "@/context/ThemeContext";
import SurMansetSliderItem from "./SurMansetSliderItem";
import Link from "next/link";

const SurMansetSlider = () => {
  
  const { surMansetNewsList } = useThemeContext();

  const settings = {
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: 0,
    arrows: false,
    focusOnSelect: true,
    slideToShow: 1,
    slideToScroll: 1,
    touchMove: true,
    dotsClass: "surmanset-slick-dots",
    appendDots: (dots) => (
      <>
        <ul className="surmanset-dots-ul">
          {dots}
          <li>
            <Link href="/sur-mansetler" className="surmanset-all-link">
              T
            </Link>
          </li>
        </ul>
      </>
    ),
  };

  return (
    <div className="surMansetSlider">
      <Slider {...settings} className="surMansetSlider-sliders">
        {surMansetNewsList.slice(0, 10).map((item) => {
          return (
            <SurMansetSliderItem item={item} key={item.id} title={item.title} />
          );
        })}
      </Slider>
    </div>
  );
};

export default SurMansetSlider;
