import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./smallCatItem.scss";
import { useCategoriesContext } from "@/context/CategoriesContext";

const SmallCatItem = ({ image, category, modeStatus, title }) => {
  const { categoryConvertor } = useCategoriesContext();

  return (
    <div className="box">
      <Link
        href={category === "videogaleri" ? "video-galeri" : `/${category}`}
        target="_blank"
      >
        <Image height="0" width="0" sizes="100vw" src={image} alt={category} />
      </Link>
      <div className="info">
        <div className={`disc ${modeStatus ? "dark" : ""}`}></div>
        <p className={`title ${modeStatus ? "dark" : ""}`}>
          {categoryConvertor[category]}
        </p>
      </div>
    </div>
  );
};

export default SmallCatItem;
