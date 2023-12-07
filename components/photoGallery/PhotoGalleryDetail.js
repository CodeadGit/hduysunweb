import PhotoGallerySlider from "../photoGallerySlider/PhotoGallerySlider";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useState } from "react";
import "./photoGalleryDetail.scss";
import PhotoGalleryDetailCard from "./PhotoGalleryDetailCard";
import { useGalleryContext } from "@/context/GalleryContext";
import { useModeContext } from "@/context/ModeContext";

const PhotoGalleryDetail = ({ thisPhotoGallery, titleArray, gDoc }) => {
  const { mode } = useModeContext();
  const { photoGallery } = useGalleryContext();
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
        {/* <span className={`photoGalleryDetail-container-similiarPhotos-title ${modeStatus ? "dark" : ""}`}>Benzer Fotoğraflar</span> */}
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
