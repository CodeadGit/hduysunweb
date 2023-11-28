"use client";
import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { useParams } from "next/navigation";
import CategorySkeleton from "./CategorySkeleton";
import CategoryPagination from "./CategoryPagination";
import CategoryItem from "./CategoryItem";
import "./categoryPageNews.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import CategorySliderItem from "./CategorySliderItem";
const CategoryPageNews = ({ category, totalPage }) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const [filteredNews, setFilteredNews] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const newsNumber = Object.keys(params).length ? 20 : 9;

  const [page, setPage] = useState(1);
  const [pagList, setPagList] = useState([]);

  const handleChange = (event, value, e, p) => {
    setPage(value);
  };

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [lastData, setLastData] = useState({});

  useEffect(() => {
    const fetchCategory = async () => {
      const qc = query(
        collection(db, category),
        orderBy("datePublished", "desc"),
        limit(20),
        startAfter(page > 1 ? lastData.datePublished : new Date())
      );
      try {
        var demopagList = [];
        const querySnapshot = await getDocs(qc);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            if (
              doc.data().datePublished.seconds * 1000 <
              new Date().getTime()
            ) {
              demopagList.push({ ...doc.data(), doc: doc.id });
            }
          });
          //console.log(demopagList);
          setPagList(demopagList);
          setLastData(demopagList[19]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, [page]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const categorySliderRef = useRef();

  const settings = {
    infinite: true,
    arrows:false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: 0,
    focusOnSelect: true,
    slideToShow: 1,
    slideToScroll: 1,
    touchMove: true,
    dotsClass: "categorySliderDots",
    appendDots: (dots) => (
      <>
        <ul className="dots-ul">
          {dots.map((dot, idx) => (
            <li
              className="dots-ul-li"
              key={idx}
              onMouseEnter={() => categorySliderRef.current.slickGoTo(idx)}
            >
              {dot}
            </li>
          ))}
        </ul>
      </>
    ),
  };

  if (pagList.length > 0) {
    return (
      <div className="categoryPageWrapper">
        <div className="categoryPageWrapper-top">
          <div className="categoryPageWrapper-top-slider">
            {pagList && !loading && (
              <Slider
                ref={categorySliderRef}
                {...settings}
                className="categorySlider"
              >
                {pagList?.slice(0, 20).map((item, idx) => {
                  return <CategorySliderItem item={item} key={idx} idx={idx} />;
                })}
              </Slider>
            )}
          </div>
          <div className="categoryPageWrapper-top-ads">
            <div className="categoryPageWrapper-top-ads-area">
              <iframe src="https://www.bursa.bel.tr/reklam/?w=300"></iframe>
            </div>
          </div>
        </div>
        <div className="categoryPageWrapper_container">
          {pagList?.map((item, idx) => {
            return (
              <CategoryItem key={idx} item={item} modeStatus={modeStatus} />
            );
          })}
        </div>
        <div>
          <CategoryPagination
            pagList={pagList}
            totalPage={totalPage}
            handleChange={handleChange}
            page={page}
          />
        </div>
      </div>
    );
  }
};

export default CategoryPageNews;
