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
  const [allColumns, setAllColumns] = useState([]);
  const [allOldColumns, setAllOldColumns] = useState([]);
  const modeStatus = mode === "dark";

  const filteredOldColumns = rustemColumns.filter((i) => i.title !== undefined);
  const filteredOmerOldColumns = omerColumns.filter(
    (i) => i.title !== undefined
  );

  useEffect(() => {
    if (author.id === "618004") {
      setAllColumns([...posts, ...filteredOldColumns]);
    }
  }, [author.id]);

  useEffect(() => {
    if (author.id === "337681") {
      setAllOldColumns([...posts, ...filteredOmerOldColumns]);
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
                ? allColumns.length
                : author.id === "337681"
                ? allOldColumns.length
                : posts.length}
            </div>
          </div>
        </div>
      </div>
      {author.id !== "618004"
        ? posts.map((post, index) => (
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
        : allColumns.map((post, index) => (
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
          ))}
      {author.id !== "337681"
        ? posts.map((post, index) => (
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
        : allOldColumns.map((post, index) => (
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
          ))}
    </div>
  );
};

export default ColumnistsAuthorsDetail;
