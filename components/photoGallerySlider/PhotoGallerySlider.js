import "./photoGallerySlider.scss";
import PhotoGallerySliderItem from "./PhotoGallerySliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useThemeContext } from "@/context/ThemeContext";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const PhotoGallerySlider = ({ thisPhotoGallery,titleArray }) => {

 const { handleReadIncrement } = useThemeContext()

  const settings = {
    dots: true,
    adaptiveHeight: false,
    slidecount: null,
    initialSlide: 0,
    arrows: true,
    focusOnSelect: true,
    slideToShow: 1,
    slideToScroll: 1,
    nextArrow: (
    <button type="button" class="slick-next">
        Next
      </button>
    ),
    prevArrow: (
      <button type="button" class="slick-prev">
        Previous
      </button>
    ),
    touchMovie: true,
  };

   const links = [
     { id: 1, title: "Foto Galeri", link: "/foto-galeri" },
     { id: 2, title: titleArray, link:"" },
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
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoGallerySlider;
