import React from "react";
import Link from "next/link";
import "./cardItem.scss";
import { handleShort } from "@/context/utils";

const CardItem = ({ item, modeStatus }) => {

 const { image, title, eng, id, category } = item;

  return (
    <div className={`card ${modeStatus ? "dark" : ""}`}>
      <Link href={`/${category}/${eng}-${id}`} className="card-wrapper" target="_blank">
        <img src={image} alt={title} className="image" />
      </Link>
      <Link href={`/${category}/${eng}-${id}`} className="content" target="_blank">
        <div className={`disc ${modeStatus ? "dark" : ""}`}></div>
        <p className={`title ${modeStatus ? "dark" : ""}`}>{handleShort(title, 7)}</p>
      </Link>
    </div>
  );
};

export default CardItem;
