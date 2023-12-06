import "./photoGallerySlider.scss";
import PhotoGallerySliderItem from "./PhotoGallerySliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useGalleryContext } from "@/context/GalleryContext";

const PhotoGallerySlider = ({ thisPhotoGallery, titleArray, gDoc }) => {
  const { handlePhotoGallerySliderReadInc } = useGalleryContext();
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
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

  //onClick={() => handleReadIncrement(id)

  return (
    <div className="photoGallerySlider">
      <div className="photoGallerySlider-wrapper">
        <Slider {...settings} className="photoGallerySlider-wrapper-sliders">
          {thisPhotoGallery.map((item, idx) => {
            return (
              <PhotoGallerySliderItem
                item={item}
                key={idx}
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
