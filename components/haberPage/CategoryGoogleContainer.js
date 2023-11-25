import React from "react";
import "./categoryGoogleContainer.scss";
import { FaRegBookmark } from "react-icons/fa";
import Link from "next/link";
import { useFetchAssetsContext } from "@/context/FetchAssetsContext";

const CategoryGoogleContainer = ({ modeStatus, category, existingCategory}) => {
   const { images } = useFetchAssetsContext();

  return (
    <div className="newss-container-content-category">
      <Link href={`/${category}`} className={`button ${modeStatus ? "dark" : ""}`}>{existingCategory}</Link>
      <div className="icon-wrapper">
        <div className={`svg-wrapper ${modeStatus ? "dark" : ""}`}>
          <FaRegBookmark />
        </div>
        <Link
          href="https://news.google.com/publications/CAAqBwgKMP-czQswr7jkAw?hl=tr&gl=TR&ceid=TR%3Atr"
          className="icons"
          target="_blank"
        >
          <p>Abone Ol</p>
          <img src={images[35]} alt="google-news" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryGoogleContainer;
