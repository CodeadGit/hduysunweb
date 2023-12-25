import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "./surMansetSlider.scss";
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import SurMansetSliderItem from "./SurMansetSliderItem";
import Link from "next/link";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";

const Slider = dynamic(
  () => import("react-slick"),
  { ssr: false }
);
const SurMansetSliderItem = dynamic(
  () => import("./SurMansetSliderItem"),
  { ssr: false }
);
const SurMansetSlider = () => {
  const { mode } = useModeContext();
  const [surMansetList, setSurmansetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(0);

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

  const surmansetSliderRef = useRef();

  const settings = {
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: hoveredIndex,
    arrows: false,
    focusOnSelect: true,
    cssEase: "linear",
    slideToShow: 1,
    slideToScroll: 1,
    touchMove: true,
    dotsClass: "surmanset-slick-dots",
    appendDots: (dots) => (
      <>
        <ul className="surmanset-dots-ul">
          {dots.map((dot, idx) => (
            <li
              className="dots-ul-li"
              key={idx}
              onMouseEnter={() => surmansetSliderRef.current.slickGoTo(idx)}
            >
              {dot}
            </li>
          ))}
          <Link href="/sur-mansetler" target="_blank" className="surmanset-all-link">
            T
          </Link>
        </ul>
      </>
    ),
  };

  return (
    <div className="surMansetSlider">
      {surMansetList && !loading && (
        <Slider
          ref={surmansetSliderRef}
          {...settings}
          className="surMansetSlider-sliders"
        >
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
      )}
    </div>
  );
};

export default SurMansetSlider;