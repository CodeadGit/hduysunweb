import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./mainVideoGallery.scss";
import MainVideoGalleryCard from "./MainVideoGalleryCard";

const MainVideoGallery = () => {

  const links = [{ id: 1, title: "Video Galeri", link: "/video-galeri" }];

  return (
    <div>
      <Breadcrumb links={links}/>
    </div>
  )
}

export default MainVideoGallery;
