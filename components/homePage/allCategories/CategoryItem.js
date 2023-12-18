import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./catItem.scss";
import { useCategoriesContext } from "@/context/CategoriesContext";

const CategoryItem = ({ image, category, modeStatus,title }) => {
  const { categoryConvertor} = useCategoriesContext()

  return (
    <div className="item">
      <Link href={`/${category}`} target="_blank">
        <img src={image} alt={category} />
      </Link>
      <div className="info">
        <div className={`disc ${modeStatus ? "dark" : ""}`}></div>
        <p className={`title ${modeStatus ? "dark" : ""}`}>{categoryConvertor[category]}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
