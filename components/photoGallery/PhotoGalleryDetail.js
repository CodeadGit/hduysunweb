import PhotoGallerySlider from "../photoGallerySlider/PhotoGallerySlider";
import { useThemeContext } from "@/context/ThemeContext";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useState } from "react";
import "./photoGalleryDetail.scss";
import PhotoGalleryDetailCard from "./PhotoGalleryDetailCard";

const PhotoGalleryDetail = ({ thisPhotoGallery, titleArray, gDoc }) => {
  const { photoGallery, mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const links = [
    { id: 1, title: "Foto Galeri", link: "/foto-galeri" },
    { id: 2, title: titleArray, link: "" },
  ];

  return (
    <div className="photoGalleryDetail">
      <Breadcrumb links={links} />
      <div className="photoGalleryDetail-container">
      <div className="photoGalleryDetail-container-slider">
        <PhotoGallerySlider
          thisPhotoGallery={thisPhotoGallery}
          titleArray={titleArray}
          gDoc={gDoc}
        />
      </div>
      <div className="photoGalleryDetail-container-similiarPhotos">
        <span className={`photoGalleryDetail-container-similiarPhotos-title ${modeStatus ? "dark" : ""}`}>Benzer Fotoğraflar</span>
        <div className={`photoGalleryDetail-container-similiarPhotos-list  ${modeStatus ? "dark" : ""}`}>
        {photoGallery.slice(0, 3).map((item) => {
          return <PhotoGalleryDetailCard item={item}/>;
        })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default PhotoGalleryDetail;
