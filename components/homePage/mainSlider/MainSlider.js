import "./mainSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSliderItem from "./MainSliderItem";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";

const MainSlider = () => {
  const { mode } = useModeContext();
  const [loading, setLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState([]);
  const [list, setList] = useState([]);

  const modeStatus = mode === "dark";

  useEffect(() => {
    const fetchCategories = async () => {
      const q = query(
        collection(db, "isManset"),
        orderBy("datePublished", "desc"),
        limit(20)
      );
      try {
        const querySnapshot = await getDocs(q);
        var categoriesList = [];

        querySnapshot.forEach((doc) => {
          //header true olanlar geliyor
          if (doc.data().index) {
            categoriesList.push({ ...doc.data(), doc: doc.id });
          } else {
            categoriesList.push({
              ...doc.data(),
              doc: doc.id,
              autoindexed: categoriesList.length,
            });
          }
        });
        categoriesList.sort((a, b) => (a.index || 0) - (b.index || 0));

        setList(categoriesList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: 0,
    arrows: false,
    focusOnSelect: true,
    slideToShow: 1,
    slideToScroll: 1,
    touchMove: true,
    dotsClass: "mansetSliderDots",
    appendDots: (dots) => (
      <>
        <ul className="dots-ul">
          {dots.map((dot, idx) => (
            <li
              className="dots-ul-li"
              key={idx}
              onMouseEnter={() => sliderRef.current.slickGoTo(idx)}
            >
              {dot}
            </li>
          ))}
          <Link href="/mansetler" className="all-link">
            T
          </Link>
        </ul>
      </>
    ),
  };

  return (
    <div className="mainSlider">
      <div className="mainSlider-large">
        {list && !loading && (
          <Slider
            ref={sliderRef}
            {...settings}
            className="mainSlider-large-sliders"
          >
            {list?.slice(0, 20).map((item, idx) => {
              return <MainSliderItem item={item} key={idx} idx={idx} />;
            })}
          </Slider>
        )}
      </div>
      <div className="mainSlider-med">
        {list && !loading && (
          <Slider {...settings} className="mainSlider-med-slidersRes">
            {list?.slice(0, 15).map((item, idx) => {
              return <MainSliderItem item={item} key={idx} idx={idx} />;
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default MainSlider;