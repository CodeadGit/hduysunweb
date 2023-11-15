import "./photoGallerySliderItem.scss";
import { useThemeContext } from "@/context/ThemeContext";
const PhotoGallerySliderItem = ({ item }) => {
  const { handlePhotoGallerySliderReadInc } = useThemeContext();

  const {url, doc, id,} = item;

  return (
    <div className="photoGalerySlider-item">
      <img
        src={url}
        alt="photogallery-item"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "30rem",
          borderRadius: "0",
        }}
      />
    </div>
  );
};

export default PhotoGallerySliderItem;
