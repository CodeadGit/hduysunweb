import "./categoryItem.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import { useModeContext } from "@/context/ModeContext";
const CategoryItem = ({ item }) => {
  const { title, image, category, eng, id, datePublished } = item;
  const { handleReadIncrement } = useThemeContext();
  const { mode } = useModeContext();

  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
      // target="_blank"
      className={`categoryItem ${modeStatus ? "dark" : ""}`}
      onClick={() => handleReadIncrement(category, id)}
    >
      <div className="categoryItem-top">
        <div>
          <img src={image} className="categoryItem-top-img" />
        </div>
      </div>
      <div className="categoryItem-bottom">
        <div
          className={`categoryItem-bottom-title ${modeStatus ? "dark" : ""}`}
        >
          {String(title).length > 51
            ? `${String(title).substring(0, 50)}...`
            : title}
        </div>
        <div
          className={`categoryItem-bottom-line ${modeStatus ? "dark" : ""}`}
        ></div>
        <div className="categoryItem-bottom-date">
          <span className={`card-date-title ${modeStatus ? "dark" : ""}`}>
            Yayınlanma T.
          </span>
          <span className={`card-date ${modeStatus ? "dark" : ""}`}>
            {formattedDate}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
