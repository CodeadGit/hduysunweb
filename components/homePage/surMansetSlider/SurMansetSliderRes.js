import React, { useEffect, useState, useRef } from "react";
import "./surMansetSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import SurMansetSliderResItem from "./SurMansetSliderResItem";

const SurMansetSliderRes = () => {
  const [surMansetResList, setSurMansetResList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurmansetRes = async () => {
      const q = query(
        collection(db, "isSurmanset"),
        orderBy("datePublished", "desc"),
        limit(10)
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

        setSurMansetResList(surMansetArr);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSurmansetRes();
  }, []);
  //const surMansetSliderRes  = useRef();

  const settings = {
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: false,
    adaptiveHeight: false,
    slidecount: null,
    //initialSlide: hoveredIndex,
    arrows: false,
    focusOnSelect: true,
    centerMode:true,
    slideToShow: 2,
    slideToScroll: 1,
    centerPadding: "40px",
    touchMove: true,
   // dotsClass: "surmanset-slick-dots",
    // appendDots: (dots) => (
    //   <>
    //     <ul className="surmanset-dots-ul">
    //       {dots.map((dot, idx) => (
    //         <li
    //           className="dots-ul-li"
    //           key={idx}
    //           // onMouseEnter={() => surMansetSliderRes.current.slickGoTo(idx)}
    //         >
    //           {dot}
    //         </li>
    //       ))}
    //       <Link href="/sur-mansetler" className="surmanset-all-link">
    //         T
    //       </Link>
    //     </ul>
    //   </>
    // ),
  };

  return (
    <div className="surMansetSliderRes">
      {surMansetResList && !loading && (
        <Slider {...settings} className="surMansetSlider-sliders">
          {surMansetResList?.slice(0, 10).map((item, idx) => {
            return <SurMansetSliderResItem item={item} idx={idx} key={idx} />;
          })}
        </Slider>
      )}
    </div>
  );
};

export default SurMansetSliderRes;
