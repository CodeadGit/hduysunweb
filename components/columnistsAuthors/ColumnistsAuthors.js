"use client"
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import "./columnistsAuthors.scss";

const ColumnistsAuthors = (item) => {
  const { eng, tittle } = item;
  const { mode, autors } = useThemeContext();

  const modeStatus = mode === "dark";

  return (
    <div className="yazarcard">
      <div className="yazarcard-card">
        {autors.map((item) => (
          <Link
            href={`yazarlar/${item?.urledTitle}-${item?.id}`}
            className={`yazarcard-card-one ${modeStatus ? "dark" : ""}`}
          >
            <div className="yazarcard-card-one-top">
              <img
                className="yazarcard-card-one-top-img"
                src={item.avatar}
                alt={item.author}
              ></img>
            </div>

            <div className="yazarcard-card-one-bottom">
              <div
                className={`yazarcard-card-one-bottom-header ${
                  modeStatus ? "dark" : ""
                }`}
              >
                {item.name + " " + item.lastName}
              </div>
              <div className="yazarcard-card-one-bottom-line"></div>

              <div
                className={`yazarcard-card-one-bottom-number ${
                  modeStatus ? "dark" : ""
                }`}
              >
                <div>Yazdığı yazı sayısı</div>
                <div>{item.postCount}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ColumnistsAuthors;
