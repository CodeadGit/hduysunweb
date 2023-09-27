import React from "react";
import "./categoryItem.scss";
import Link from "next/link";

const CategoryItem = ({ item, modeStatus }) => {

  const { title, image, category, eng, id } = item;
  // console.log(item);

  return (
    <Link href={`/${category}/${eng}-${id}`} target="_blank" className="single">
      <img className="img" src={image} alt={title} />
      <p className={`caption ${modeStatus ? "dark" : ""}`}>{title}</p> 
    </Link>
  );
};

export default CategoryItem;

