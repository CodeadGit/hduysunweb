"use client";
import React from "react";
import "./allCategoriesPage.scss";
import AllCategoriesPagesCards from "./AllCategoriesPagesCards";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { useThemeContext } from "@/context/ThemeContext";

const AllCategoriesPage = () => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const { categories } = useCategoriesContext();

  return (
    <div className="allCategoriesPage">
      <h2>Tüm Kategori Haberleri</h2>
      <div className="allCategoriesPage-list">
      {categories.map((item,idx) => <AllCategoriesPagesCards category={item.collection}  key={idx}/>)}
      </div>
    </div>
  );
};
export default AllCategoriesPage;
