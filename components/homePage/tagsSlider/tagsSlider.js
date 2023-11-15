"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./tagsSlider.scss";
import CardItem from "./CardItem";
import { useThemeContext } from "@/context/ThemeContext";
import SliderSkeleton from "./SliderSkeleton";
import moment from "moment";
import { useState } from "react";

const TagsSlider = () => {
  const { mode, news, loading, tagsTitles } = useThemeContext();
  const [tagClicked, setTagClicked] = useState("");
  const modeStatus = mode === "dark";

  const newsAmount = news.length;
  const newsToShow = newsAmount >= 5 ? 5 : newsAmount;

  const sliderNews = news
    .sort((a, b) => b.datePublished.seconds - a.datePublished.seconds)
    .filter((item) => item.isSlider);

  const y = sliderNews.map((i) =>
    moment(i.datePublished.seconds * 1000).format("DD.MM.YYYY - HH:mm")
  );

  const tagButtonClickHandler = (i) => {
    setTagClicked(i.title);
  };

  const tagsList = Object.keys(tagsTitles).slice(0,5).map((i) => (
    <button
      onClick={() => tagButtonClickHandler(i)}
      className={`tag-btn ${tagClicked} ${modeStatus ? "dark" : ""}`}
      key={i.id}
    >
      #{i}
    </button>
  ));

  //const mostPopularTags = tagsTitles.sort((i,j) => i.length - j.length).slice(0,6)
  const settings = {
    speed: 5000,
    //slidesToShow: newsToShow,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    infinite: true,
    slidesToShow:5,
    centerMode:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:500,
        settings: {
          slidesToShow:1,
          slidesToScroll:1
        }
      }
    ],
  };

  const skeletonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // console.log(tagsTitles);

  if (loading) {
    return (
      <div style={skeletonStyle}>
        <SliderSkeleton />
      </div>
    );
  }

  return (
    <div className="sliderContainer">
      <span className={`sliderContainer-title ${modeStatus ? "dark" : ""}`}>Popüler Etiketler</span>
      <div className="sliderContainer-tags">{tagsList}</div>
      <Slider {...settings} className="sliderContainer-slides">
        {sliderNews.map((item) => {
          return (
            <CardItem
              item={item}
              key={item.id}
              datePublished={item.datePublished}
              modeStatus={modeStatus}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default TagsSlider;
