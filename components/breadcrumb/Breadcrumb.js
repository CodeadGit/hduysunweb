"use client";
import React from "react";
import "./breadcrumb.scss";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useThemeContext } from "@/context/ThemeContext";
import { handleShort,handleShortBreadcrump} from "@/context/utils";
import { handleShortt } from "@/context/utils";
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

  return (
    <li className={modeStatus ? "dark" : ""}>
      <Link href={link} className={modeStatus ? "dark" : ""}>
        {/* <span>{handleShort(title,3)}</span> */}
        <span className="item">{title}</span>
        <span className="res-item">{handleShortBreadcrump(title,8)}</span> 
        <span className="res-small-item">{handleShortBreadcrump(title,4)}</span> 
        <FaChevronRight />
      </Link>
    </li>
  );
}
