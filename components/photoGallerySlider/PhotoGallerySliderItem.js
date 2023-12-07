import { useGalleryContext } from "@/context/GalleryContext";
import "./photoGallerySliderItem.scss";
import { useModeContext } from "@/context/ModeContext";
const PhotoGallerySliderItem = ({ item }) => {
  const {  mode } = useModeContext();
  const { handlePhotoGallerySliderReadInc } = useGalleryContext()

  const { url, doc, id, title, description, datePublished } = item;
  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished?.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <div className="photoGallerySlider-item">
      <img
        src={url}
        alt="photoGallerySlider-item-img"
        className="photoGallerySlider-item-img"
      />
      <div className="photoGallerySlider-item-bottom">
        {/* <span className={`date-title ${modeStatus ? "dark" : ""}`}>
          Yayınlanma T.
        </span>
        <span className={`formattedDate ${modeStatus ? "dark" : ""}`}>
          {formattedDate}
        </span> */}
        <div className="photoGallerySlider-item-bottom-info">
          <span
            className={`photoGallerySlider-item-bottom-info-title ${
              modeStatus ? "dark" : ""
            }`}
          >
            {title}
          </span>
          <div
            className={`photoGallerySlider-item-bottom-info-des ${
              modeStatus ? "dark" : ""
            }`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallerySliderItem;
