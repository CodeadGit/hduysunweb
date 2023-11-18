"use client"
import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./photoGallery.scss";
import "./PhotoGalleryCard";
import PhotoGalleryCard from "./PhotoGalleryCard";
import { useThemeContext } from "@/context/ThemeContext";

const PhotoGallery = () => {
  const links = [{ id: 1, title: "Foto Galeri", link: "/foto-galeri" }];

  const { photoGallery } = useThemeContext();

  const photoGalleryList = photoGallery.sort((a,b) => b.index - a.index).map((item) => {
    return <PhotoGalleryCard key={item.id} item={item} />;
  });

  return (
    <div className="photoGallery">
      <Breadcrumb links={links} />
      <div className="photoGallery-photos">{photoGalleryList}</div>
    </div>
  );
};

export default PhotoGallery;
