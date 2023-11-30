"use client";
import { useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import "../navbar/navbar.scss";
import { editLink } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";
import { useCategoriesContext } from "@/context/CategoriesContext";
import CategoriesMenu from "./CategoriesMenu";
import { IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

const Categories = ({ wrapper }) => {
  const pathname = usePathname();
  const { mode, closeStoryModal } = useThemeContext();
  const { categories } = useCategoriesContext();
  const [isMenuDrawer, setIsMenuDrawer] = useState(false);

  const modeStatus = mode === "dark";

  const darkBoxStyle = {  height: "auto", backgroundColor: "#1f252b", transition: "0.3s all ease-in-out" };

  const lightBoxStyle = {  height: "auto", backgroundColor: "#fff", transition: "0.3s all ease-in-out" };

  const menuStyle = modeStatus ? darkBoxStyle : lightBoxStyle;


  const sorttedCategories = categories
    .sort((a, b) => a.index - b.index)
    .slice(0, 8);

    const toggleDrawer = (open) => (event) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
        return;
      }
      setIsMenuDrawer(open);
    };


  //const isActive = pathname.substring(1).startsWith(i);

  return (
    <div className={wrapper}>
      <div className="categories-wrapper">
        {sorttedCategories?.map((i, idx) => {
          const isActive = pathname.substring(1).startsWith(i);
          return (
            <div  key={idx}>
              <Link
                href={`/${i.collection}`}
                key={i.index}
                className={`link ${isActive ? "active" : ""} ${
                  modeStatus ? "dark" : ""
                }`}
                onClick={closeStoryModal}
              >
                <span className={`link-label ${modeStatus ? "dark" : ""} `}>
                  {i.label}
                </span>
                {isActive && (
                  <div
                    className={`${modeStatus ? "darkUnderline" : "underline"}`}
                  ></div>
                )}
              </Link>
              {idx === 7 && (
                <Link
                  href={`/foto-galeri`}
                  className={`link-fotoGaleri ${modeStatus ? "dark" : ""}`}
                  onClick={closeStoryModal}
                >
                  Foto Galeri
                </Link>
              )}
            </div>
          );
        })}
         <IconButton
          // className={`menu-icon ${modeStatus ? "dark" : ""}`}
          size="large"
          onClick={toggleDrawer(true)}
        >
         <MenuIcon className={`navmenu-icon ${modeStatus ? "dark" :  ""}`}></MenuIcon>
        </IconButton>
        <CategoriesMenu toggleDrawer={toggleDrawer} isMenuDrawer={isMenuDrawer}/>
      </div>
    </div>
  );
};

export default Categories;
