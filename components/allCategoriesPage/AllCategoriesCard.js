import { useThemeContext } from "@/context/ThemeContext";
import "./allCategoriesCard.scss";
import Link from "next/link";
import { useModeContext } from "@/context/ModeContext";

const AllCategoriesCard = ({ item }) => {
  const { category, eng, id, title, image, datePublished } = item;
  const { handleReadIncrement } = useThemeContext();
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
     // target="_blank"
      className={`allCategoriesCard ${modeStatus ? "dark" : ""}`}
      onClick={() => handleReadIncrement(category, id)}
    >
      <div className="allCategoriesCard-top">
        <div>
          <img src={image} alt={title} className="allCategoriesCard-top-img" />
        </div>
      </div>
      <div className="allCategoriesCard-bottom">
        <div
          className={`allCategoriesCard-bottom-title ${
            modeStatus ? "dark" : ""
          }`}
        >
          {title}
        </div>
        <div
          className={`allCategoriesCard-bottom-line ${modeStatus ? "dark" : ""}`}
        ></div>
        <div className="allCategoriesCard-bottom-date">
          <span className={`single-date-title ${modeStatus ? "dark" : ""}`}>
            Yayınlanma T.
          </span>
          <span className={`single-date ${modeStatus ? "dark" : ""}`}>
            {formattedDate}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AllCategoriesCard;
