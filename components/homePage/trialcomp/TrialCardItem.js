import "./trialCardItem.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";

const TrialCardItem = ({ item, modeStatus }) => {
  const { handleReadIncrement } = useThemeContext();
  const { title, image, category, eng, id, datePublished } = item;

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return  <Link
  href={`/${category}/${eng}-${id}`}
  target="_blank"
  className={`singleSporCard ${modeStatus ? "dark" : ""}`}
  onClick={() => handleReadIncrement(category, id)}
>
  <div className="singleSporCard-top">
    <img className="singleSporCard-top-img" src={image} alt={title} />
  </div>
  <div className="singleSporCard-bottom">
    <div
      className={`singleSporCard-bottom-title ${modeStatus ? "dark" : ""}`}
    >
      {title}
    </div>
    <div
      className={`singleSporCard-bottom-line ${modeStatus ? "dark" : ""}`}
    ></div>
    <div className="singleSporCard-bottom-date">
      <span className={`single-date-title ${modeStatus ? "dark" : ""}`}>
        Yayınlanma T.
      </span>
      <span className={`single-date ${modeStatus ? "dark" : ""}`}>
        {formattedDate}
      </span>
    </div>
  </div>
</Link>
};

export default TrialCardItem;
