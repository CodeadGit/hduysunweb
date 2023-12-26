"use client";
import "swiper/scss";
import Swiper from "swiper";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css";
import "swiper/scss";
import "swiper/css/bundle";
import "./surMansetSlider.scss";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import $ from "jquery";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";
//import { useSwiper } from "swiper/react";
import { useThemeContext } from "@/context/ThemeContext";

const SurMansetSwiperSlider = () => {
  const { handleReadIncrement } = useThemeContext();
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

  var swiper = new Swiper(".surmanset-swiper-container", {
    mode: "horizontal",
    loop: true,
    slidesPerView: 1,
    modules: [Autoplay, Navigation, Pagination],
    // modules: [Navigation, Pagination],
    speed: 500,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".surmanset-swiper-pagination",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    style: {
      "--swiper-pagination-color": "#333333",
      "--swiper-pagination-bullet-inactive-color": "#333333",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "16px",
    },
    on: {
      init: function () {
        document
          .querySelectorAll(".surmanset-swiper-pagination-bullet")
          .forEach(function (bullet, index) {
            bullet.addEventListener("mouseover", () => {
              swiper?.slideTo(index);
            });
          });
      },
    },
  });

  //   const bulletHover = document.querySelectorAll(".swiper-pagination-bullet");

  //   bulletHover.forEach(function (bullet, index) {
  //     bullet.addEventListener("mouseover", () => {
  //         surMansetSwiper?.slideTo(index);
  //     });
  //   })

  return (
    <div className="surMansetSlider">
      <div className="surMansetSlider-sliders">
        <div
          class="surmanset-swiper surmanset-swiper-container"
          pagination="true"
          data-swiper-autoplay="2000"
        >
          <div class="swiper-wrapper">
            {surMansetList &&
              !loading &&
              surMansetList?.slice(0, 10).map((item, index) => (
                <div class="surmanset-swiper-slide" key={item.index}>
                  <Link
                    key={item.index}
                    target="_blank"
                    href={`/${item.category}/${item.eng}-${item.id}`}
                  >
                    <img
                      className="surmanset-swiper-slide-image"
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Link>
                </div>
              ))}
          </div>
          <div style={{ position: "static" }} class="surmanset-swiper-pagination"></div>
          <Link target="_blank" href="/sur-mansetler" className="surmanset-all-link">
            <span>T</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SurMansetSwiperSlider;
