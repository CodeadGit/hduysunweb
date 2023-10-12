import Link from "next/link";
import "./PhotoGalleryCard.scss";
import { useThemeContext } from "@/context/ThemeContext";

const PhotoGalleryCard = ({ item }) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const { category, datePublished, description, headImg, eng, id, title, url } =
    item;

  return (
    <div className={`photoGalleryCard ${modeStatus ? "dark" : ""}`}>
      <Link
        href={`foto-galeri/${eng}-${id}`}
        target="_blank"
        className="photoGalleryCard-imageBox"
      >
        <img
          src={headImg}
          alt="fotogaleri-image"
          className="photoGalleryCard-img"
          style={{ objectFit: "cover", width: "100%", aspectRatio: "3.26/2" }}
        />
      </Link>
      <div className="photoGalleryCard-">
        <Link href={`foto-galeri/${eng}-${id}`}>
          <div className="photoGalleryCard-title">{title}</div>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGalleryCard;
