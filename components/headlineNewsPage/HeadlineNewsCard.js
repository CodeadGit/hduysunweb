import "./headlineNewsCard.scss";
import { handleShort } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const HeadlineNewsCard = ({ item }) => {
  const { image, url, author, title, category, id, eng, datePublished } = item;
  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const authorArr = author.split(" ");

  const newAuthor =
    authorArr[0].slice(0, 1) + "." + authorArr[authorArr.length - 1];

  return (
    <div className={`headlineNewsCard ${modeStatus ? "dark" : ""}`}>
      <div className="headlineNewsCard-left">
        <Link
          href={`/${category}/${eng}-${id}`}
          className="headlineNewsCard-left-imgBox"
          //target="_blank"
        >
          <img src={image} alt={title} className="headline-img" />
        </Link>
      </div>
      <div className="headlineNewsCard-right">
        <div className="headlineNewsCard-right-top">
        <Link
          href={`/${category}/${eng}-${id}`}
          className={`headlineNewsCard-right-top-title ${modeStatus ? "dark" : ""}`}
         // target="_blank"
        >
          {handleShort(title, 8)}
        </Link>
        </div>
        <div
          className={`headlineNewsCard-right-line ${modeStatus ? "dark" : ""}`}
        ></div>
        <div className="headlineNewsCard-right-bottom">
          <div className="headlineNewsCard-right-bottom-info">
            <div className="headlineNewsCard-right-bottom-info-author">
              <span
                className={`headline-author-title ${modeStatus ? "dark" : ""}`}
              >
                Haber Kaynağı
              </span>
              {/* <div
                className={`headline-author-who ${modeStatus ? "dark" : ""}`}
              >
                <span className={`blue-box ${modeStatus ? "dark" : ""}`}></span>
                {newAuthor}
              </div> */}
            </div>
            <div className="headlineNewsCard-right-bottom-info-publishedDate">
              <span
                className={`headline-published-title ${
                  modeStatus ? "dark" : ""
                }`}
              >
                Yayınlanma T.
              </span>
              <div
                className={`headline-published-time ${
                  modeStatus ? "dark" : ""
                }`}
              >
                {formattedDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineNewsCard;
