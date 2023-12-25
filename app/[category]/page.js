"use client";
import React, { useEffect, useState } from "react";
//import Category from "../../components/categoryPage/CategoryPage";
import { useCategoriesContext } from "@/context/CategoriesContext";
import dynamic from "next/dynamic";

// const useCategoriesContext = dynamic(
//   () => import("@/context/CategoriesContext"),
//   { ssr: false }
// );

const Category = dynamic(
  () => import("../../components/categoryPage/CategoryPage"),
  {
    ssr: false,
  }
);

const CategoryPage = ({ params }) => {
  const { category } = params;
  const { categories, collectionCategories, labelCategories } =
    useCategoriesContext();

  return <Category category={category} />;
};

export default CategoryPage;
