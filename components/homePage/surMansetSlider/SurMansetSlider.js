import React, { useEffect, useState } from "react";
import "./surMansetSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useThemeContext } from "@/context/ThemeContext";
import SurMansetSliderItem from "./SurMansetSliderItem";
import Link from "next/link";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const SurMansetSlider = () => {
  const { mode } = useThemeContext();
  const [surMansetList, setSurmansetList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurmanset = async () => {
      const q = query(
        collection(db, "isSurmanset"),
        orderBy("datePublished", "desc"),
        limit(20)
      );
      try {
        const querySnapshot = await getDocs(q);
        var surMansetArr = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().index) {
            surMansetArr.push({ ...doc.data(), doc: doc.id });
          } else {
            surMansetArr.push({
              ...doc.data(),
              doc: doc.id,
              autoindexed: surMansetArr.length,
            });
          }
        });
        surMansetArr.sort((a, b) => (a.index || 0) - (b.index || 0));

        setSurmansetList(surMansetArr);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSurmanset();
  }, []);

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
        {surMansetList?.slice(0, 10).map((item, idx) => {
          return (
            <SurMansetSliderItem
              item={item}
              idx={idx}
              key={idx}
              title={item.title}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SurMansetSlider;
