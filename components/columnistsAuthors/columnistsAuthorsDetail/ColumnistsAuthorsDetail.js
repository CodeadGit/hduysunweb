"use client";
import "./columnistsAuthorDetail.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
const ColumnistsAuthorsDetail = ({
  posts,
  idForThisAuthor,
  author,
  formattedDate,
}) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="yazarpage">
      <div className="yazarpage-top">
        <div className="yazarpage-top-img">
          <img
            src={author.avatar}
            alt="123"
            className="yazarpage-top-img"
          ></img>
        </div>

        <div className="yazarpage-top-title">
          <div
            className={`yazarpage-top-title-header ${modeStatus ? "dark" : ""}`}
          >
            {" "}
            {/* {post.title} */}
            {author.name + " " + author.lastName}
          </div>

          <div className="line"></div>

          <div className="yazarpage-top-title-bottom">
            <div className="yazarpage-top-title-bottom-text">
              Yazdığı Yazı Sayısı:{" "}
            </div>
            <div className="yazarpage-top-title-bottom-text">
              {" "}
              {author.postCount}{" "}
            </div>
          </div>
        </div>
      </div>
      {posts.map((post, index) => (
        <div className="yazarpage-bottom">
          <div className={`yazarpage-bottom-box ${modeStatus ? "dark" : ""}`}>
            <div
              className={`yazarpage-bottom-box-header  ${
                modeStatus ? "dark" : ""
              }`}
            >
              {post.title}
            </div>

            <div
              key={index}
              className={`yazarpage-bottom-box-time ${
                modeStatus ? "dark" : ""
              }`}
            ></div>

            <p className={`yazarpage-bottom-box-p ${modeStatus ? "dark" : ""}`}>
              {post.description}
            </p>

            <Link
              href={`/${post.path}`}
              className="yazarpage-bottom-box-button"
            >
              Yazının Devamı
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColumnistsAuthorsDetail;
