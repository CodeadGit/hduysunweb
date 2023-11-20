"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { editLink } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";
import { useCategoriesContext } from "@/context/CategoriesContext";
const Categories = ({ wrapper }) => {
  const pathname = usePathname();
  const { mode, closeStoryModal } = useThemeContext();
  const { categories } = useCategoriesContext();

  const modeStatus = mode === "dark";

  const sorttedCategories = categories.sort((a, b) => a.index - b.index);
  //const isActive = pathname.substring(1).startsWith(i);

  return (
    <div className={wrapper}>
      <div className="categories-wrapper">
        {sorttedCategories?.map((i, idx) => {
          const isActive = pathname.substring(1).startsWith(i);
          return (
            <div key={idx}>
              <Link
                href={`/${i.collection}`}
                key={i.index}
                className={`link ${isActive ? "active" : ""} ${
                  modeStatus ? "dark" : ""
                }`}
                onClick={closeStoryModal}
              >
                <span>{i.label}</span>
                {isActive && (
                  <div
                    className={`${modeStatus ? "darkUnderline" : "underline"}`}
                  ></div>
                )}
              </Link>
            </div>
          );
        })}
      </div>
      {/* <Link
        href={`/foto-galeri`}
        className={`link-fotoGaleri ${modeStatus ? "dark" : ""}`}
        onClick={closeStoryModal}
      >
        Foto Galeri
      </Link> */}
    </div>
  );
};

export default Categories;
