"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { categories, editLink } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";

const Categories = ({wrapper}) => {

  const pathname = usePathname();
  const { mode, closeStoryModal } = useThemeContext();

  const modeStatus = mode === "dark";

  return (
    <div className={wrapper}>
      {categories?.slice(0,11).map((cat, index) => {
        const isActive = pathname.substring(1).startsWith(cat);
        
        return (
          <Link href={`/${cat}`} key={index} className={`link ${isActive ? "active" : ""} ${modeStatus ? "dark" : ""}`} onClick={closeStoryModal}>
            <span>{editLink(cat)}</span>
            {isActive && <div className={`${modeStatus ? "darkUnderline" : "underline"}`}></div>}
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
