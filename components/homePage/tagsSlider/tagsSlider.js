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
import { useCategoriesContext } from "@/context/CategoriesContext";

const TagsSlider = () => {
  const { mode, news, tagsList, newsLoading } = useThemeContext();
  const [tagClicked, setTagClicked] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredNewsbyTag, setFilteredNewsbyTag] = useState([]);
  const { categories } = useCategoriesContext();
  const modeStatus = mode === "dark";

  const newsAmount = news.length;
  const newsToShow = newsAmount >= 5 ? 5 : newsAmount;

  const sliderNews = news
    .sort((a, b) => b.datePublished.seconds - a.datePublished.seconds)
    .slice(0, 10);

  const sorttedTags = tagsList.sort((a, b) => b[1] - a[1]);

  const y = sliderNews.map((i, idx) =>
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
    const categoryNumber = categories.length;

    for (let i = 0; i < categoryNumber; i++) {
      const fetchTags = async () => {
        const q = query(collection(db, categories[i].collection));
        try {
          const querySnapshot = await getDocs(q);
          let tagsListArray = [];

          querySnapshot.forEach((doc) => {
            if (doc.data().tags.includes(`${tagClicked}`)) {
              tagsListArray.push({ ...doc.data(), doc: doc.id });
            }
          });
          setFilteredNewsbyTag(tagsListArray);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchTags();
    }
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

  const lowerTags = sorttedTags.map((str) => str.toLowerCase().trim());

   if (newsLoading) {
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
        {lowerTags.slice(0, 7).map((i, idx) => (
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
      <div className="sliderContainer-res">
        {lowerTags.slice(0, 3).map((i, idx) => (
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
          {sliderNews.map((item, idx) => {
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
      ) : (
        <Slider {...settings} className="sliderContainer-slides">
          {filteredNewsbyTag.map((item, idx) => {
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
      )}
    </div>
  );
};

export default TagsSlider;
