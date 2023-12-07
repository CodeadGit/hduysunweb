"use client";
import React from "react";
import "./allCategoriesPage.scss";
import AllCategoriesPagesCards from "./AllCategoriesPagesCards";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { useModeContext } from "@/context/ModeContext";

const AllCategoriesPage = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  const { categories } = useCategoriesContext();

  return (
    <div className="allCategoriesPage">
      <h2 className={`${modeStatus ? "dark" :  ""}`}>Tüm Kategori Haberleri</h2>
      <div className="allCategoriesPage-list">
      {categories.map((item,idx) => <AllCategoriesPagesCards label={item.label} category={item.collection}  key={idx}/>)}
      </div>
    </div>
  );
};
export default AllCategoriesPage;
