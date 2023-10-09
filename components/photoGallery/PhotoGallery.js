import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./photoGallery.scss";
import "./PhotoGalleryCard";
import PhotoGalleryCard from "./PhotoGalleryCard";

const PhotoGallery = () => {
  const links = [{ id: 1, title: "Foto Galeri", link: "/foto-galeri" }];

  const photoGalleryData = [
    {
      id: 1,
      title: "foto galeri1",
    },
    {
      id: 2,
      title: "foto galeri2",
    },
    {
      id: 3,
      title: "foto galeri3",
    },
    {
      id: 4,
      title: "foto galeri4",
    },
  ];

  const photoGalleryList = photoGalleryData.map((item) => {
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
