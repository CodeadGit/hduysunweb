import { useThemeContext } from "@/context/ThemeContext";
import "./similiarVideosCard.scss";
import { handleShort } from "@/context/utils";

const SimiliarVideosCard = ({ item }) => {
  const { headImg, title, id, eng, url, datePublished } = item;

  const { mode } = useThemeContext();

  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <div className="similiarVideosCard">
      <div className="similiarVideosCard-container">
        <div className="similiarVideosCard-container-left">
          <img
            className="similiarVideosCard-container-left-img"
            src={headImg}
          />
        </div>
        <div className="similiarVideosCard-container-right">
          <div className="similiarVideosCard-container-right-title">
            {handleShort(title, 8)}
          </div>
          <div
            className={`similiarVideosCard-container-right-line ${
              modeStatus ? "dark" : ""
            }`}
          ></div>
          <div className="similiarVideosCard-container-right-date">
            <span>Yayınlanma T.</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      <span className="similiarVideosCard-line" />
      {/* <div
          className={`similiarVideosCard-line ${modeStatus ? "dark" : ""}`}
        ></div> */}
    </div>
  );
};

export default SimiliarVideosCard;
