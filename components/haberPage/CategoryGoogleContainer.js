import React from "react";
import "./categoryGoogleContainer.scss";
import { FaRegBookmark } from "react-icons/fa";
import google from "../homePage/assets/googleNews.png";
import Link from "next/link";
import Image from "next/image";

const CategoryGoogleContainer = ({ modeStatus, category, existingCategory}) => {

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
          <Image src={google} alt="google-news" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryGoogleContainer;
