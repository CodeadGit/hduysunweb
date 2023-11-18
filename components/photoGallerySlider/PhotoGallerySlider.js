import "./photoGallerySlider.scss";
import PhotoGallerySliderItem from "./PhotoGallerySliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useThemeContext } from "@/context/ThemeContext";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useState } from "react";

const PhotoGallerySlider = ({ thisPhotoGallery, titleArray,gDoc }) => {
  const { handlePhotoGallerySliderReadInc } = useThemeContext();
 
const [currentSlide, setCurrentSlide] = useState(0);


  const settings = {

    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: 0,
    arrows: true,
    focusOnSelect: true,
    slideToShow: 1,
    slideToScroll: 1,
    afterChange: (currentSlide) => setCurrentSlide(currentSlide),
    nextArrow: (
      <button
        type="button"
        class="slick-next"
        // onClick={() =>
        //   console.log(
        //     gDoc,
        //     thisPhotoGallery?.[currentSlide]?.id
        //   )
        // }
      >
        Next
      </button>
    ),
    prevArrow: (
      <button type="button" class="slick-prev">
        Previous
      </button>
    ),
    // nextClick: function(e){
    //   //alert('next');
    //   console.log(e);
    // },
    touchMovie: true,
  };

  const links = [
    { id: 1, title: "Foto Galeri", link: "/foto-galeri" },
    { id: 2, title: titleArray, link: "" },
  ];

  //onClick={() => handleReadIncrement(id)

  return (
    <div className="photoGallerySlider">
      <Breadcrumb links={links} />
      <div className="photoGallerySlider-wrapper">
        <Slider {...settings} className="photoGallerySlider-wrapper-sliders">
          {thisPhotoGallery.map((item) => {
            return (
              <PhotoGallerySliderItem
                item={item}
                key={item.id}
                image={item.url}
                doc={item.doc}
                index={item.index}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoGallerySlider;
