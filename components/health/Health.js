"use client";
import React from "react";
import "./health.scss";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const Health = () => {

  const { mode, news } = useThemeContext();
  const modeStatus = mode === "dark";

  const filteredNews = news.filter((item) => item.category === "saglik");

  return (
    <div className="pointss">
      <div className="pointss-left-section">
        {/* <div className="eczane">
          <Link href="/nobetci-eczane" target="_blank">
            <div className="big">E</div>
            <div className="down">NÖBETÇİ ECZANE</div>
          </Link>
        </div> */}
      </div>
      <div className="pointss-right-section">
        {filteredNews?.slice(0, 9).map((item) => {
          return <CategoryItem key={item.id} item={item} modeStatus={modeStatus} />
        })}
      </div>
    </div>
  );
};

export default Health;

const CategoryItem = ({ item, modeStatus }) => {
  const { title, image, category, eng, id } = item;

  return (
    <Link href={`/${category}/${eng}-${id}`} target="_blank" className="itemm">
      <img className="img" src={image} alt={title} />
      <p className={`caption ${modeStatus ? "dark" : ""}`}>{title}</p>
    </Link>
  );
};
