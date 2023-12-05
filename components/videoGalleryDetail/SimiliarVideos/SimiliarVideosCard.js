import { useThemeContext } from "@/context/ThemeContext";
import "./similiarVideosCard.scss";
import { handleShort } from "@/context/utils";
import Link from "next/link";

const SimiliarVideosCard = ({ item }) => {
  const { headImg, title, id, eng, url, datePublished } = item;

  const { mode, handleVideoGalleryReadInc } = useThemeContext();

  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link className={`similiarVideosCard ${modeStatus ? "dark" : ""}`}
   // target="_blank" 
    href={`/video-galeri/${eng}-${id}`} onClick={()=>handleVideoGalleryReadInc(id)}>
      <div className={`similiarVideosCard-container ${modeStatus ? "dark" : ""}`}>
        <div className="similiarVideosCard-container-left">
          <img
            className="similiarVideosCard-container-left-img"
            src={headImg}
          />
        </div>
        <div className="similiarVideosCard-container-right">
          <div className={`similiarVideosCard-container-right-title ${modeStatus ? "dark" : ""}`}>
            {handleShort(title, 7)}
          </div>
          <div
            className={`similiarVideosCard-container-right-line ${modeStatus ? "dark" : ""}`} ></div>
          <div className="similiarVideosCard-container-right-date">
            <span className={`${modeStatus ? "dark" : ""}`}>Yayınlanma T.</span>
            <span className={`${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
          </div>
        </div>
      </div>

      <span className="similiarVideosCard-line" />
      {/* <div
          className={`similiarVideosCard-line ${modeStatus ? "dark" : ""}`}
        ></div> */}
    </Link>
  );
};

export default SimiliarVideosCard;
