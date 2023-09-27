"use client";
import React from "react";
import "./breadcrumb.scss";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useThemeContext } from "@/context/ThemeContext";

const Breadcrumb = ({links}) => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="breadcrumb-container">
      <ul className={`breadcrumb ${modeStatus ? "dark" : ""}`}>
        <li className={modeStatus ? "dark" : ""}>
          <Link href="/" className={modeStatus ? "dark" : ""}>
            <AiFillHome className="home"/>
            <span> Anasayfa </span>
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
        <span>{title}</span>
        <FaChevronRight />
      </Link>
    </li>
  );
};
