import Link from "next/link";
import "./PhotoGalleryCard.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { handleShort } from "@/context/utils";

const PhotoGalleryCard = ({ item }) => {
  const { mode, handlePhotoGalleryReadInc } = useThemeContext();
  const modeStatus = mode === "dark";

  const { category, datePublished, description, headImg, eng, id, title, url } =
    item;

    const timePublished = new Date(datePublished.seconds * 1000);
    const options = { year: "numeric", month: "numeric", day: "2-digit" };
    const formattedDate = timePublished.toLocaleString("tr-TR", options);  

  return (
    <div className={`photoGalleryCard ${modeStatus ? "dark" : ""}`}>
      <Link
        href={`foto-galeri/${eng}-${id}`}
        onClick={() => handlePhotoGalleryReadInc(id)}
        className="photoGalleryCard-imageBox"
        target="_blank"
      >
        <img
          src={headImg}
          alt="fotogaleri-image"
          className="photoGalleryCard-img"
          style={{ objectFit: "cover", width: "100%", aspectRatio: "3.26/2" }}
        />
      </Link>
      <div className="photoGalleryCard-bottom">
        <Link href={`foto-galeri/${eng}-${id}`}>
          <div className={`photoGalleryCard-bottom-title ${modeStatus ? "dark" : ""}`}>{handleShort(title,8)}</div>
        </Link>
        <div
          className={`photoGalleryCard-bottom-line ${
            modeStatus ? "dark" : ""
          }`}
        ></div>
        <div className="photoGalleryCard-bottom-date">
          <span className={`date-title ${modeStatus ? "dark" : ""}`}>Yayınlanma T.</span>
          <span className={`photogallery-publisheddate ${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryCard;
