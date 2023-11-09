import "./mainSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useThemeContext } from "@/context/ThemeContext";
import MainSliderItem from "./MainSliderItem";
import Link from "next/link";

const MainSlider = () => {
  const { mansetNewsList, mode } = useThemeContext();

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
        <ul className="dots-ul">
          {dots}
          <li>
            <Link href="/mansetler" className="all-link">
              T
            </Link>
          </li>
        </ul>
      </>
    ),
  };
 
  return (
    <div className="mainSlider">
      <div className="mainSlider-large">
      <Slider {...settings} className="mainSlider-large-sliders">
      {mansetNewsList.slice(0, 20).map((item) => {
        return <MainSliderItem item={item} key={item.id} />;
      })}
    </Slider>
      </div>
      <div className="mainSlider-med">
      <Slider {...settings} className="mainSlider-med-slidersRes">
      {mansetNewsList.slice(0, 15).map((item) => {
        return <MainSliderItem item={item} key={item.id} />;
      })}
    </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
