//import { SwiperSlide } from "swiper/react";
"use client"
import "swiper/scss";
import Swiper from "swiper";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import $ from "jquery";
import "./mainSlider.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";
//import { useSwiper } from "swiper/react";
import { useThemeContext } from "@/context/ThemeContext";

const MainSwiperSlider = () => {
  const { mode } = useModeContext();
  const { handleReadIncrement } = useThemeContext();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  //const paginationNumber = document.querySelector(".swiper-pagination");

  var swiper = new Swiper(".swiper-container", {
    mode: "horizontal",
    loop: true,
    slidesPerView: 1,
    // modules: [Autoplay, Navigation, Pagination],
    modules: [Navigation, Pagination],
    speed: 500,
    // autoplay: {
    //   delay: 8000,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="swiper-pagination-bullet">' + (index + 1) + "</span>";
      },
    },
    style: {
      "--swiper-pagination-color": "#333333",
      "--swiper-pagination-bullet-inactive-color": "#333333",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "16px"
    }
  });

  const bulletHover = document.querySelectorAll(".swiper-pagination-bullet");

  bulletHover.forEach(function (bullet, index) {
    bullet.addEventListener("mouseover", () => {
      swiper?.slideTo(index);
    });
  });

  return (
    <div className="mainSlider">
      <div className="mainSlider-large">
        <div
          class="swiper swiper-container"
          //pagination="true"
          // data-swiper-autoplay="2000"
        >
          <div class="swiper-wrapper">
            {list &&
              !loading &&
              list?.slice(0, 20).map((item, index) => (
                <div class="swiper-slide" key={item.index}>
                  <Link
                    key={item.index}
                    target="_blank"
                    href={`/${item.category}/${item.eng}-${item.id}`}
                  >
                    <img
                      className="swiper-slide-image"
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Link>
                </div>
              ))}
          </div>
          <div style={{ position: "static" }} class="swiper-pagination">
          </div>
          <Link target="_blank" href="/mansetler" className="all-link"><span>T</span></Link>
        </div>
      </div>
    </div>
  );
};

export default MainSwiperSlider;
