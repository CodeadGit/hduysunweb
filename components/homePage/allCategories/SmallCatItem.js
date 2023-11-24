import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./smallCatItem.scss";
import { navigateCategory, transformCategory } from "@/context/utils";

const SmallCatItem = ({ image, category, modeStatus,title }) => {

  return (
    <div className="box">
      <Link href={`/${category}`}>
        <img src={image} alt={category} />
      </Link>
      <div className="info">
        <div className={`disc ${modeStatus ? "dark" : ""}`}></div>
        <p className={`title ${modeStatus ? "dark" : ""}`}>{title}</p>
      </div>
    </div>
  );
};

export default SmallCatItem;
