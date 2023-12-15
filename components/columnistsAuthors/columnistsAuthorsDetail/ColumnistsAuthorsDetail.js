"use client";
import "./columnistsAuthorDetail.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import { useModeContext } from "@/context/ModeContext";
import { useEffect, useState } from "react";
const ColumnistsAuthorsDetail = ({
  posts,
  idForThisAuthor,
  author,
  formattedDate,
  rustemColumns,
  omerColumns,
}) => {
  const { mode } = useModeContext();
  const [allRustemColumns, setAllRustemColumns] = useState([]);
  const [allOmerColumns, setAllOmerColumns] = useState([]);
  const modeStatus = mode === "dark";

  // const filteredOldColumns = rustemColumns.filter((i) => i.id !== undefined);
  // const filteredOmerOldColumns = omerColumns.filter(
  //   (i) => i.id !== undefined
  // );

  const filteredRustemPost = posts.filter((i) => i.id !== undefined);

  const rustemArr = [...new Set([...filteredRustemPost, ...rustemColumns])];

  useEffect(() => {
    if (author.id === "618004") {
      setAllRustemColumns(rustemArr);
    }
  }, [author.id]);

  const filteredPost = posts.filter((i) => i.id !== undefined);

  const omerArr = [...new Set([...filteredPost, ...omerColumns])];

  useEffect(() => {
    if (author.id === "337681") {
      setAllOmerColumns(omerArr);
    }
  }, [author.id]);

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
              {author.id === "618004"
                ? allRustemColumns.length
                : author.id === "337681"
                ? allOmerColumns.length
                : ""}
            </div>
          </div>
        </div>
      </div>
      {author.id === "618004" &&
        allRustemColumns.map((post, index) => (
          <div className="yazarpage-bottom" key={index}>
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

              <p
                className={`yazarpage-bottom-box-p ${modeStatus ? "dark" : ""}`}
              >
                {post.description}
              </p>
              <Link
                href={`${author.urledTitle}-${author.id}/${post.eng}-${post.id}`}
                className="yazarpage-bottom-box-button"
              >
                Yazının Devamı
              </Link>
            </div>
          </div>
        ))}
      {author.id === "337681" &&
        allOmerColumns.map((post, index) => (
          <div className="yazarpage-bottom" key={index}>
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

              <p
                className={`yazarpage-bottom-box-p ${modeStatus ? "dark" : ""}`}
              >
                {post.description}
              </p>
              <Link
                href={`${author.urledTitle}-${author.id}/${post.eng}-${post.id}`}
                className="yazarpage-bottom-box-button"
              >
                Yazının Devamı
              </Link>
            </div>
          </div>
        ))}
      {author.id !== "618004" &&
        author.id !== "337681" &&
        posts.map((post, index) =>
          allOmerColumns.map((post, index) => (
            <div className="yazarpage-bottom" key={index}>
              <div
                className={`yazarpage-bottom-box ${modeStatus ? "dark" : ""}`}
              >
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

                <p
                  className={`yazarpage-bottom-box-p ${
                    modeStatus ? "dark" : ""
                  }`}
                >
                  {post.description}
                </p>
                <Link
                  href={`${author.urledTitle}-${author.id}/${post.eng}-${post.id}`}
                  className="yazarpage-bottom-box-button"
                >
                  Yazının Devamı
                </Link>
              </div>
            </div>
          ))
        )}
    </div>
  );
};

export default ColumnistsAuthorsDetail;
