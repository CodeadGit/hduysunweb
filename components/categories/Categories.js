"use client";
import { useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import "../navbar/navbar.scss";
import { editLink } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";
import { useCategoriesContext } from "@/context/CategoriesContext";
import CategoriesMenu from "./CategoriesMenu";
import Link from "next/link";

const Categories = ({ wrapper }) => {
  const pathname = usePathname();
  const { mode, closeStoryModal } = useThemeContext();
  const { categories } = useCategoriesContext();

  const modeStatus = mode === "dark";

  const darkBoxStyle = {  height: "auto", backgroundColor: "#1f252b", transition: "0.3s all ease-in-out" };

  const lightBoxStyle = {  height: "auto", backgroundColor: "#fff", transition: "0.3s all ease-in-out" };

  const menuStyle = modeStatus ? darkBoxStyle : lightBoxStyle;


  const sorttedCategories = categories
    .sort((a, b) => a.index - b.index)
    .slice(0, 8);

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
        <CategoriesMenu/>
        {/* <div className={`menu-navbar  ${modeStatus ? "dark" : ""}`}>
          <Button
            id="basic-button"
            className={`menu-button  ${modeStatus ? "dark" : ""}`}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Tümünü Gör
          </Button>
          <div >
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose || handleScroll}
            // onScroll={handleScroll}
            className={`menu ${modeStatus ? "dark" : ""}`}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div style={menuStyle} className={`menu-container ${modeStatus ? "dark" : ""}`}>
              {categories?.slice(8, categories?.length).map((i, idx) => (
                <div className="menu-container-items" key={idx}>
                  <MenuItem
                    className={`menu-item ${modeStatus ? "dark" : ""}`}
                    sx={{ paddingLeft: "0.5rem", paddingRight: "1rem" }}
                    onClick={handleClose}
                  >
                    <Link style={{color:"#333333"}} href={`/${i.collection}`} className={`menu-item-link ${modeStatus ? "dark" : ""}`}>
                      {i.label}
                    </Link>
                  </MenuItem>
                </div>
              ))}
            </div>
          </Menu>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
