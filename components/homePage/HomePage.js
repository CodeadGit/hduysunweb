"use client";
import React from "react";
import Link from "next/link";
import "./homePage.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { handleShort } from "@/context/utils";
import BannerNext from "../ads/adsComponents/BannerNext";
import HomePageSkeleton from "./HomePageSkeleton";
import MainSlider from "./mainSlider/MainSlider";
import SurMansetSlider from "./surMansetSlider/SurMansetSlider";
import SurMansetSliderRes from "./surMansetSlider/SurMansetSliderRes";
import { useModeContext } from "@/context/ModeContext";

const HomePage = () => {
  const { handleReadIncrement, newsLoading } = useThemeContext();
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  // const mainNews = mansetNewsList[0];
  // const secondNews = mansetNewsList[1];

  const skeletonStyle = { display: "flex", justifyContent: "center" };

  if (newsLoading) {
    return (
      <div style={skeletonStyle}>
        <HomePageSkeleton />
      </div>
    );
  }

  return (
    <div className={`homeContainer ${mode}`}  style={{backgroundColor:mode&&"inherit"}}>
      <MainSlider />
      {/* <MainNewsComponent
        handleReadIncrement={handleReadIncrement}
        mainNews={mainNews}
        modeStatus={modeStatus}
      /> */}
      <div className="right">
        <SurMansetSlider />
        <SurMansetSliderRes />
        {/* <div className="right-top">
          {/* <SecondNews
            handleReadIncrement={handleReadIncrement}
            secondNews={secondNews}
            modeStatus={modeStatus}
          /> */}
        {/* <AdsComponent /> */}
        {/* <BannerNext /> */}
        {/*</div>*/}
        {/* <div className="right-bottom">
          {mansetNewsList.slice(2, 5).map((news) => {
            return (
              <SingleNewsComponent
                handleReadIncrement={handleReadIncrement}
                key={news.id}
                news={news}
                modeStatus={modeStatus}
              />
            );
          })}
        </div>  */}
      </div>
    </div>
  );
};

export default HomePage;

const MainNewsComponent = ({
  mainNews = {},
  handleReadIncrement,
  modeStatus,
}) => {
  const { category, eng, id, image, title } = mainNews;

  return (
    <Link
      onClick={() => handleReadIncrement(category, id)}
      className="left"
      href={`/${category}/${eng}-${id}`}
      // target="_blank"
    >
      <div className="left-image">
        <img src={image} alt="news" />
      </div>
      <h5 className={modeStatus ? "dark" : ""}>{title}</h5>
    </Link>
  );
};

const SecondNews = ({ secondNews = {}, handleReadIncrement, modeStatus }) => {
  const { category, eng, id, image, title = "" } = secondNews;

  return (
    <Link
      onClick={() => handleReadIncrement(category, id)}
      className="right-top-left-pic"
      href={`/${category}/${eng}-${id}`}
      // target="_blank"
    >
      <div className="right-top-left-pic-wrapper">
        <img src={image} alt="news" />
      </div>
      <p className={modeStatus ? "dark" : ""}>{`${handleShort(title, 6)}`}</p>
    </Link>
  );
};

const SingleNewsComponent = ({ news, handleReadIncrement, modeStatus }) => {
  const { category, id, eng, image, title = "" } = news;

  return (
    <Link
      onClick={() => handleReadIncrement(category, id)}
      href={`/${category}/${eng}-${id}`}
      className="news-pic"
      // target="_blank"
    >
      <img src={image} alt="news" className="img" />
      <p className={modeStatus ? "dark" : ""}>{`${handleShort(title, 6)}`}</p>
    </Link>
  );
};
