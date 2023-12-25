"use client"
import dynamic from "next/dynamic";
import { useGalleryContext } from "@/context/GalleryContext";
//import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./photoGallery.scss";
import "./PhotoGalleryCard";
//import PhotoGalleryCard from "./PhotoGalleryCard";

const PhotoGalleryCard = dynamic(
  () => import("./PhotoGalleryCard"),
  { ssr: false }
);

const PhotoGallery = () => {
  const links = [{ id: 1, title: "Foto Galeri", link: "/foto-galeri" }];

  const { photoGallery } = useGalleryContext();

  const photoGalleryList = photoGallery.sort((a,b) => b.index - a.index).map((item,idx) => {
    return <PhotoGalleryCard key={idx} item={item} />;
  });

  return (
    <div className="photoGallery">
      <Breadcrumb links={links} />
      <div className="photoGallery-photos">{photoGalleryList}</div>
    </div>
  );
};

export default PhotoGallery;
