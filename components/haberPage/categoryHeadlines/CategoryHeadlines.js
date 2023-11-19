"use client";
import React, { useState } from "react";
import "./categoryHeadlines.scss";
import SingleSliderItem from "./SingleSliderItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useThemeContext } from "@/context/ThemeContext";

const CategoryHeadlines = () => {

    const [sliderRef, setSliderRef] = useState(null);
    
    const { mode, categoryHeadlines } = useThemeContext();
    const modeStatus = mode === "dark";

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false,
              // nextArrow: (
              //   <button type="button" class="slick-next">
              //       Next
              //     </button>
              //   ),
              //   prevArrow: (
              //     <button type="button" class="slick-prev">
              //       Previous
              //     </button>
              //   ),
            }
          },
          // {
          //   breakpoint: 1150,
          //   settings: {
          //     slidesToShow: 2,
          //     slidesToScroll: 1,
          //     arrows:true,
          //     nextArrow: (
          //       <button type="button" class="slick-next">
          //           Next
          //         </button>
          //       ),
          //       prevArrow: (
          //         <button type="button" class="slick-prev">
          //           Previous
          //         </button>
          //       ),
          //   }
          // },
          // {
          //   breakpoint: 900,
          //   settings: {
          //     slidesToShow: 2,
          //     slidesToScroll: 1,
          //     arrows:true,
          //     nextArrow: (
          //       <button type="button" class="slick-next">
          //           Next
          //         </button>
          //       ),
          //       prevArrow: (
          //         <button type="button" class="slick-prev">
          //           Previous
          //         </button>
          //       ),
          //   }
          // },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              // nextArrow: (
              //   <button type="button" class="slick-next">
              //       Next
              //     </button>
              //   ),
              //   prevArrow: (
              //     <button type="button" class="slick-prev">
              //       Previous
              //     </button>
              //   ),
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              // nextArrow: (
              //   <button type="button" class="slick-next">
              //       Next
              //     </button>
              //   ),
              //   prevArrow: (
              //     <button type="button" class="slick-prev">
              //       Previous
              //     </button>
              //   ),
            }
          },
        ]
  };

  return (
    <div className="category-headlines">
      <div className="category-headlines-title">
        <h2 className={modeStatus ? "dark" : ""}>Kategori Manşet Haberleri</h2>
        <div className="slider-buttons">
          <button onClick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </button>
          <button onClick={sliderRef?.slickNext}>
            <FaChevronRight />
          </button>
        </div>
        <div className="slider-buttonsRes">
          <button onClick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </button>
          <button onClick={sliderRef?.slickNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="category-headlines-slider">
        <Slider ref={setSliderRef} {...settings} className="category-headlines-slider-slides">
          {categoryHeadlines.map((item,idx) => {
            return <SingleSliderItem key={idx} {...item} mode={modeStatus} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryHeadlines;
