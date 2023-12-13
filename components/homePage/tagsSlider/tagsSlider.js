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
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import PrevArrow from "./CustomArrows/PrevArrow";
import NextArrow from "./CustomArrows/NextArrow";
import { useModeContext } from "@/context/ModeContext";

const TagsSlider = () => {
  const { news, newsLoading } = useThemeContext();
  const { mode } = useModeContext()
  const [tagClicked, setTagClicked] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredNewsbyTag, setFilteredNewsbyTag] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  const modeStatus = mode === "dark";

  const newsAmount = news.length;
  const newsToShow = newsAmount >= 5 ? 5 : newsAmount;

  const sliderNews = [...news]
    ?.filter((n) => n?.isManset !== true || n?.isSurmanset !== true)
    .sort((a, b) => b.datePublished.seconds - a.datePublished.seconds);

  const tagButtonClickHandler = (i) => {
    setTagClicked(i);
  };

  const firstItem = tagsList.slice(0, 1);

  if (tagClicked === "") {
    setTagClicked(firstItem);
  }

  // useEffect(() => {
  //   const categoryNumber = categories.length;

  //   for (let i = 0; i < categoryNumber; i++) {
  //     const fetchTags = async () => {
  //       const q = query(collection(db, categories[i].collection));
  //       try {
  //         const querySnapshot = await getDocs(q);
  //         let tagsListArray = [];

  //         querySnapshot.forEach((doc) => {
  //           if (doc.data().tags.includes(`${tagClicked}`)) {
  //             tagsListArray.push({ ...doc.data(), doc: doc.id });
  //           }
  //         });
  //         setFilteredNewsbyTag(tagsListArray);
  //         setLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchTags();
  //   }
  // }, []);

  useEffect(() => {
    const fetchTags = async () => {
      const q = query(collection(db, "TagsList"));
      try {
        const tagsArray = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          tagsArray.push({ ...doc.data(), tag: doc.id });
        });
        setTagsList(tagsArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
  }, []);

  //const mostPopularTags = tagsTitles.sort((i,j) => i.length - j.length).slice(0,6)
  const settings = {
    speed: 1500,
    transtion: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    centerMode: false,
    draggable: true, // Enable dragging
    swipeToSlide: true, // Scroll to the closest slide when dragging

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

  //const sorttedTags = news.sort((a, b) => b[1] - a[1]).slice(0,10);

  // const lowerTags = tagsList.map((str) => String(str.tag).toLowerCase().trim());

  const filteredTags = tagsList
    .sort((a, b) => b.related.length - a.related.length)
    .slice(0, 7);

  if (newsLoading) {
    return (
      <div style={skeletonStyle}>
        <SliderSkeleton />
      </div>
    );
  }

  return (
    <div className="sliderContainer">
      <div className="sliderContainer-top">
        <div className="sliderContainer-top-right">
          <span
            className={`sliderContainer-top-right-title ${
              modeStatus ? "dark" : ""
            }`}
          >
            Popüler Etiketler
          </span>
          <div className="sliderContainer-top-right-tags">
            {filteredTags?.slice(0, 7).map((i, idx) => (
              <Link
                key={idx}
                onClick={() => tagButtonClickHandler(i)}
                className="tag-btn"
                target="_blank"
                href={`/etiketler/${i.tag}`}
              >
                {idx === 6 ? (
                  <span onClick={() => tagButtonClickHandler(i)}>#Bursa</span>
                ) : (
                  "#" + i.tag
                )}
              </Link>
            ))}
          </div>
          <div className="sliderContainer-top-right-tagsRes">
            {tagsList?.slice(0, 6).map((i, idx) => (
              <Link
                key={idx}
                onClick={() => tagButtonClickHandler(i)}
                className="tag-btn"
                href={`/etiketler/${i.tag}`}
              >
                {idx === 5 ? (
                  <span onClick={() => tagButtonClickHandler(i)}>#Bursa</span>
                ) : (
                  "#" + i.tag
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="sliderContainer-top-left-ads">
          <iframe src="https://www.bursa.bel.tr/reklam/?w=728" />
        </div>
      </div>
      <Slider {...settings} className="sliderContainer-slides">
        {sliderNews?.slice(0, 10).map((item, idx) => {
          return (
            <CardItem
              item={item}
              key={idx}
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
