"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./tagsSlider.scss";
import CardItem from "./CardItem";
import { useThemeContext } from "@/context/ThemeContext";
import SliderSkeleton from "./SliderSkeleton";
import moment from "moment";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { categoryList } from "@/context/ThemeContext";

const TagsSlider = () => {
  const { mode, news, tagsList } = useThemeContext();
  const [tagClicked, setTagClicked] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredNewsbyTag, setFilteredNewsbyTag] = useState([]);
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
    setTagClicked(i);
  };

  // const categories = Object.entries(res);

  // const result = categories.sort((a, b) => b[1] - a[1]);
  const firstItem = tagsList.slice(0, 1);

  if (tagClicked === "") {
    setTagClicked(firstItem);
  }

  useEffect(() => {
    let controller = new AbortController();
    let tagsListArray = [];

    for (let i = 0; i < categoryList?.length; i++) {
      (async () => {
        const q = query(collection(db, categoryList[i].collection));
        const newsGetting = onSnapshot(q, (snap) => {
          snap.forEach((doc) => {
            if (doc.data().tags.includes(`${tagClicked}`)) {
              tagsListArray.push({ ...doc.data(), doc: doc.id });
            }
          });
          setFilteredNewsbyTag(tagsListArray);
          setLoading(false);
        });
        return () => newsGetting();
      })();
    }
    return () => controller?.abort();
  }, []);

  //const mostPopularTags = tagsTitles.sort((i,j) => i.length - j.length).slice(0,6)
  const settings = {
    speed: 5000,
    //slidesToShow: newsToShow,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const skeletonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (loading) {
    return (
      <div style={skeletonStyle}>
        <SliderSkeleton />
      </div>
    );
  }

  return (
    <div className="sliderContainer">
      <span className={`sliderContainer-title ${modeStatus ? "dark" : ""}`}>
        Popüler Etiketler
      </span>
      <div className="sliderContainer-tags">
        {tagsList.slice(0, 7).map((i, idx) => (
          <div
            key={idx}
            onClick={() => tagButtonClickHandler(i)}
            className="tag-btn"
          >
            {idx === 6 ? (
              <span onClick={() => tagButtonClickHandler(i)}>#Bursa</span>
            ) : (
              "#" + i.trimStart()
            )}
          </div>
        ))}
      </div>
      {filteredNewsbyTag.length < 10 ? (
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
      ) : (
        <Slider {...settings} className="sliderContainer-slides">
          {filteredNewsbyTag.map((item) => {
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
      )}
    </div>
  );
};

export default TagsSlider;
