import "./videoGalleryCard.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import { handleShort } from "@/context/utils";
import { PiPlayCircleLight } from "react-icons/pi";

const VideoGalleryCard = ({ item }) => {
  const { title, datePublished, headImg, eng, id } = item;

  const { mode } = useThemeContext();

  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <div className={`videoGalleryCard ${modeStatus ? "dark" : ""}`}>
      <div className="videoGalleryCard-top">
        <Link target="_blank" href={`/video-galeri/${eng}-${id}`}>
          <img src={headImg} className="videoGalleryCard-top-img" />
        </Link>
        <PiPlayCircleLight className="card-icon"/>
      </div>
      <div className="videoGalleryCard-bottom">
        <Link
         target="_blank"
          href={`/video-galeri/${eng}-${id}`}
          className={`videoGalleryCard-bottom-title ${modeStatus ? "dark" : ""}`}
        >
           {handleShort(title, 8)}
        </Link>
        <div
          className={`videoGalleryCard-bottom-line ${modeStatus ? "dark" : ""}`}
        ></div>
        <div className="videoGalleryCard-bottom-date">
          <span className={`video-date-title ${modeStatus ? "dark" : ""}`}>Yayınlanma T.</span>
          <span className={`video-date ${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryCard;
