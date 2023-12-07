import { useState } from "react";
import Link from "next/link";
import "./subHeadlineNewsCard.scss";
import { handleShort } from "@/context/utils";
import { useModeContext } from "@/context/ModeContext";

const SubHeadlineNewsCard = ({ item }) => {
  const {
    image,
    url,
    author,
    title,
    category,
    id,
    eng,
    datePublished,
    handleReadIncrement,
  } = item;

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  // const authorArr = author?.split(" ");

  // const newAuthor =
  //   authorArr[0].slice(0, 1) + "." + authorArr[authorArr.length - 1];

  return (
    <Link
      href={`/${category}/${eng}-${id}`}
      className={`subHeadlineNewsCard ${modeStatus ? "dark" : ""}`}
      onClick={() => handleReadIncrement(category, id)}
    >
      <img
        src={image}
        alt="surmanset-image"
        style={{
          aspectRatio: "0.86/1",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          objectFit: "cover",
          width: "100%",
        }}
      />
      <div className="subHeadLineNewsCard-desBox">
        <div className="subHeadlineNewsCard-desBox-center">
          <div
            //  target="_blank"
            className={`subHeadlineNewsCard-desBox-center-title ${
              modeStatus ? "dark" : ""
            }`}
          >
            {handleShort(title, 8)}
          </div>
        </div>
        <div
          className={`subHeadlineNewsCard-desBox-line ${
            modeStatus ? "dark" : ""
          }`}
        ></div>
        <div className="subHeadlineNewsCard-desBox-bottom">
          <div className="subHeadlineNewsCard-desBox-bottom-info">
            {/* <div className="subHeadlineNewsCard-desBox-bottom-info-author">
              <span className={`author-title ${modeStatus ? "dark" : ""}`}>
                Haber Kaynağı
              </span> 
              <div className={`author-who ${modeStatus ? "dark" : ""}`}>
                <span className={`blue-box ${modeStatus ? "dark" : ""}`}></span>
                {newAuthor}
              </div> 
            </div>*/}
            <div className="subHeadlineNewsCard-desBox-bottom-info-publishedDate">
              <span className={`published-title ${modeStatus ? "dark" : ""}`}>
                Yayınlanma T.
              </span>
              <div className={`published-time ${modeStatus ? "dark" : ""}`}>
                {formattedDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubHeadlineNewsCard;
