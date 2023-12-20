import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Virtual, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css";
import "swiper/css/bundle";
import "./mainSlider.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";
import { useSwiper } from "swiper/react";
import { renderToString } from "react-dom/server";
import { useThemeContext } from "@/context/ThemeContext";

const MainSwiperSlider = () => {
  const { mode } = useModeContext();
  const { handleReadIncrement } = useThemeContext();
  const sliderRef = useRef();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [swiper, setSwiper] = useState(null);

  const slideTo = (index) => swiper.slideTo(index);

  const handleDotHover = (index) => {
    setHoveredIndex(index);
  };

  const swiperRef = useSwiper();

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

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    //  renderBullet: function (index, className) {
    //    return `<span class="swiper-pagination-bullet" onMouseEnter="${() =>
    //      console.log("hi")}" >${index + 1}</span>`;
    // },
    renderBullet: function (index, className) {
      const bulletObject = {
        customText: `${index + 1}`, // Replace this with the actual property you want to use
      };

      return `<span class=${className}>${index + 1}</span>`;
    },
    // renderBullet: (index, className) => {
    //   return `<span class="${className}" onMouseEnter="${() =>
    //     console.log("hi")}">${index + 1}</span>`;
    // },

    //bulletClass: "swiper-custom-bullet",
    //  bulletActiveClass: "swiper-custom-bullet-active",
  };

  // function handleMouseEnter(index) {
  //   // Your logic for onMouseEnter event
  //   console.log('Mouse entered on bullet with index:', index);
  // }

  // const pagination = {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   renderBullet: (index, className) => {
  //     return '<span class="' + className + '" onMouseEnter="' +()=> swiperRef.(index)+ '">' + (index + 1) + '</span>';
  //   },
  // };

  // const span = document.getElementsByClassName('className');
  // span.className = `${className}`;
  // span.textContent = index + 1;

  // // Adding a mouse enter event listener
  // span.addEventListener('mouseenter', () => {
  //     console.log('merhaba');
  // });

  // const CustomPagination = ({ swiper,current,index }) => {
  //   const activeIndex = swiper?.realIndex + 1 || 1;

  //   console.log("hello")

  //   return (
  //     <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
  //       <span className="swiper-pagination-bullet">{current}</span>
  //     </div>
  //   );
  // };

  const handleMouseEnter = (index) => {
    console.log("hi", index);
    sliderRef.slideTo(index);
  };

  const renderBullet = (index, className) => {
    const bulletContent = (
      <span className={className} onMouseEnter={() => handleMouseEnter(index)}>
        {index + 1}
      </span>
    );

    // Convert the React component to its HTML string representation
    return renderToString(bulletContent);
  };

  return (
    <div className="mainSlider">
      <div className="mainSlider-large">
        <Swiper
          onSwiper={setSwiper}
          modules={[Pagination, A11y, Virtual, Autoplay]}
          spaceBetween={50}
          centeredSlides={true}
          className="swiper mySwiper swiper-pagination-hover-wrap"
          slidesPerView={1}
          ref={sliderRef}
          virtual
          slideToClickedSlide={true}
          onSlideChange={(swiper) => {
            if (hoveredIndex !== null) {
              swiper.slideTo(hoveredIndex);
            }
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation
          loop={true}
          wrapperTag="ul"
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            renderBullet: renderBullet,
          }}
          on={{
            slideChange: function () {
              i(this);
            },
            init: function () {
              i(this);
              document
                .querySelectorAll(".swiper-pagination-bullet")
                .forEach((e, t) => {
                  e.addEventListener("mouseover", () => {
                    sliderRef.slideTo(t);
                  });
                });
              document
                .querySelector(".slider-numbers")
                .insertAdjacentHTML(
                  "beforeend",
                  '<a class="all" href="/mansetler.htm" target="_blank"><strong>T</strong></a>'
                );
            },
          }}
          //onSwiper={(swiper) => console.log(swiper)}
          //onSlideChange={(swiper) => console.log(swiper.activeIndex)}
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          <div className="mainSlider-large-sliders">
            {list &&
              !loading &&
              list?.slice(0, 20).map((item, idx) => (
                <>
                  <SwiperSlide
                    tag="li"
                    idx={idx}
                    key={idx}
                    virtualIndex={idx}
                    className="swiper-slide"
                    onMouseEnter={() => handleDotHover(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      href={`/${item.category}/${item.eng}-${item.id}`}
                      target="_blank"
                      onClick={() =>
                        handleReadIncrement(item.category, item.id)
                      }
                    >
                      <img src={item.image} alt={`slide-${idx}`} />
                    </Link>
                  </SwiperSlide>
                </>
              ))}
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <Link className="swiper-pagination-bullet" href="#">
              {1}
            </Link>
          </div>
        </Swiper>
      </div>
      {/* <div className="mainSlider-med">
        <Swiper
          modules={[ Pagination, A11y, Virtual]}
          spaceBetween={50}
          centeredSlides={true}
          className="swiper mySwiper swiper-pagination-hover-wrap"
          slidesPerView={1}
          ref={sliderRef}
          virtual
          slideToClickedSlide={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation
          loop={true}
          pagination={pagination}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => console.log(swiper.activeIndex)}
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          <div className="mainSlider-large-sliders">
            {list &&
              !loading &&
              list?.slice(0, 15).map((item, idx) => (
                <>
                  <SwiperSlide
                    idx={idx}
                    key={idx}
                    virtualIndex={idx}
                    className="swiper-slide"
                  >
                    <img src={item.image} alt={`slide-${idx}`} />
                  </SwiperSlide>
                </>
              ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div> */}
    </div>
  );
};

export default MainSwiperSlider;
