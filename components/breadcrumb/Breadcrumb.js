"use client";
import React from "react";
import "./breadcrumb.scss";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useThemeContext } from "@/context/ThemeContext";
import { handleShort,handleShortBreadcrump} from "@/context/utils";
import { handleShortt,handleShorttLetter } from "@/context/utils";

const Breadcrumb = ({ links }) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="breadcrumb-container">
      <ul className={`breadcrumb ${modeStatus ? "dark" : ""}`}>
        <li className={modeStatus ? "dark" : ""}>
          <Link href="/" className={modeStatus ? "dark" : ""}>
            <AiFillHome className="home" />
            <span className="home-title"> Anasayfa </span>
            <FaChevronRight />
          </Link>
        </li>

        {links?.map((item) => (
          <BreadcrumbItem key={item.id} {...item} modeStatus={modeStatus} />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;

function BreadcrumbItem({ title, link, modeStatus }) {

  // const handleShortWord = (title) => {
  //   const res = title?.split(" ");
  //   if (res.length <= 2) return res.join(" ");
  //   return res.substring(0,3)
  // };

 // console.log(title.substring(0,13).concat("..."))
  // const titleSplitted = title.split("");
  // console.log(titleSplitted.slice(0,30).join("").concat("..."));

   return (
    <li className={modeStatus ? "dark" : ""}>
      <Link href={link} className={modeStatus ? "dark" : ""}>
        {/* <span>{handleShort(title,3)}</span> */}
        <span className="item">{handleShortBreadcrump(title,12)}</span>
        <span className="res-item">{handleShortBreadcrump(title,10)}</span> 
        <span className="res-small-item">{handleShortBreadcrump(title,6)}</span> 
        <span className="res-mobil-item">{handleShortBreadcrump(title,3)}</span>
        <FaChevronRight />
      </Link>
    </li>
  );
}
