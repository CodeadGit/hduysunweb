import "./photoGallerySliderItem.scss";
const PhotoGallerySliderItem = ({ image }) => {
  return (
    <div className="photoGalerySlider-item">
      <img
        src={image}
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
